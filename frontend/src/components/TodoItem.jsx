function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={(e) => onToggle(todo.id, e.target.checked)}
        className="todo-checkbox"
      />
      
      <span className="todo-title">
        {todo.title}
      </span>
      
      <button
        onClick={() => onDelete(todo.id)}
        className="todo-delete"
      >
        🗑️
      </button>
    </div>
  );
}

export default TodoItem;