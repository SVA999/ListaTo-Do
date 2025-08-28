import { useState } from 'react';

function AddTodo({ onAdd }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd(title.trim());
      setTitle('');
    }
  };

  return (
    <form className="add-todo" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="¿Qué necesitas hacer?"
        className="add-todo-input"
      />
      <button type="submit" className="add-todo-button">
        Agregar
      </button>
    </form>
  );
}

export default AddTodo;
