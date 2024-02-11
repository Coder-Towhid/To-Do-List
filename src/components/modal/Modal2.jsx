import { useState } from "react";
import "./modal.css";
const TodoModal = ({ isOpen, onClose, todo, onSave }) => {
  const [title, setTitle] = useState(todo ? todo.title : "");

  const handleSave = (e) => {
    e.preventDefault()
    onSave(title);
    onClose();
  };

  return (
    isOpen && (
      <>
        <div className="modal-backdrop" ></div>
        <div className="modal-container">
          <div className="modal-content">
            <span className="close" onClick={onClose}>
              &times;
            </span>
            <h2>{todo ? "Edit Todo" : "Add Todo"}</h2>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter todo title"
            />
            <button onClick={handleSave}>
              {todo ? "Save Changes" : "Add Todo"}
            </button>
          </div>
        </div>
      </>
    )
  );
};

export default TodoModal;
