// frontend/src/services/api.js
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? '/api'  // En producción (Vercel)
  : 'http://localhost:5000/api';  // En desarrollo local

export const todoAPI = {
  getTodos: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/todos`);
      if (!response.ok) throw new Error('Error al obtener tareas');
      return await response.json();
    } catch (error) {
      console.error('Error:', error);
      return [];
    }
  },

  createTodo: async (title) => {
    try {
      const response = await fetch(`${API_BASE_URL}/todos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title }),
      });
      if (!response.ok) throw new Error('Error al crear tarea');
      return await response.json();
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
  },

  updateTodo: async (id, completed) => {
    try {
      const response = await fetch(`${API_BASE_URL}/todos?id=${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ completed }),
      });
      if (!response.ok) throw new Error('Error al actualizar tarea');
      return await response.json();
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
  },

  deleteTodo: async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/todos?id=${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Error al eliminar tarea');
      return true;
    } catch (error) {
      console.error('Error:', error);
      return false;
    }
  },
};