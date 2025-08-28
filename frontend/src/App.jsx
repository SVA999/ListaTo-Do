import { useState, useEffect } from 'react';
import { todoAPI } from './services/api';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Cargar tareas al iniciar
  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    setLoading(true);
    const todosData = await todoAPI.getTodos();
    setTodos(todosData);
    setLoading(false);
  };

  const handleAddTodo = async (title) => {
    const newTodo = await todoAPI.createTodo(title);
    if (newTodo) {
      setTodos([...todos, newTodo]);
    }
  };

  const handleToggleTodo = async (id, completed) => {
    const updatedTodo = await todoAPI.updateTodo(id, completed);
    if (updatedTodo) {
      setTodos(todos.map(todo => 
        todo.id === id ? { ...todo, completed } : todo
      ));
    }
  };

  const handleDeleteTodo = async (id) => {
    const success = await todoAPI.deleteTodo(id);
    if (success) {
      setTodos(todos.filter(todo => todo.id !== id));
    }
  };

  const completedCount = todos.filter(todo => todo.completed).length;

  return (
    <div className="app">
      <header className="app-header">
        <h1>📝 Mi Lista To-Do</h1>
        <p>
          {todos.length > 0 
            ? `${completedCount}/${todos.length} tareas completadas`
            : 'No hay tareas aún'
          }
        </p>
      </header>

      <main className="app-main">
        <AddTodo onAdd={handleAddTodo} />
        
        {loading ? (
          <div className="loading">Cargando tareas...</div>
        ) : (
          <TodoList 
            todos={todos}
            onToggle={handleToggleTodo}
            onDelete={handleDeleteTodo}
          />
        )}
      </main>
    </div>
  );
}

export default App;