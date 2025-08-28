const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Crear la aplicación Express
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Ruta de salud para verificar que el servidor funciona
app.get('/health', (req, res) => {
  res.json({ message: 'API funcionando correctamente' });
});

// ==========================================
// VERSIÓN TEMPORAL CON ARRAY EN MEMORIA
// (Cambiar por PostgreSQL después)
// ==========================================

let todos = [
  { id: 1, title: 'Ejemplo de tarea', completed: false, created_at: new Date() }
];

// GET - Obtener todas las tareas
app.get('/api/todos', async (req, res) => {
  try {
    res.json(todos);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Error al obtener tareas' });
  }
});

// POST - Crear nueva tarea
app.post('/api/todos', async (req, res) => {
  try {
    const { title } = req.body;
    
    if (!title || title.trim() === '') {
      return res.status(400).json({ error: 'El título es requerido' });
    }

    const newTodo = {
      id: Date.now(), // ID temporal único
      title: title.trim(),
      completed: false,
      created_at: new Date()
    };

    todos.push(newTodo);
    res.status(201).json(newTodo);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Error al crear tarea' });
  }
});

// PUT - Actualizar tarea (marcar como completada/no completada)
app.put('/api/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { completed } = req.body;
    
    const todoIndex = todos.findIndex(todo => todo.id === parseInt(id));
    
    if (todoIndex === -1) {
      return res.status(404).json({ error: 'Tarea no encontrada' });
    }

    todos[todoIndex].completed = completed;
    res.json(todos[todoIndex]);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Error al actualizar tarea' });
  }
});

// DELETE - Eliminar tarea
app.delete('/api/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const todoIndex = todos.findIndex(todo => todo.id === parseInt(id));
    
    if (todoIndex === -1) {
      return res.status(404).json({ error: 'Tarea no encontrada' });
    }

    const deletedTodo = todos.splice(todoIndex, 1)[0];
    res.json({ 
      message: 'Tarea eliminada correctamente', 
      deleted: deletedTodo 
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Error al eliminar tarea' });
  }
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
  console.log(`📋 API disponible en: http://localhost:${PORT}/api/todos`);
  console.log(`💚 Health check: http://localhost:${PORT}/health`);
});