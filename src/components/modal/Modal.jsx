import { useState } from "react";
import { PRIORITY_ITEMS } from "../../constants/filters";
import "./modal.css";

const TodoModal = ({ isOpen, onClose, todo, onSave }) => {
  const [title, setTitle] = useState(todo ? todo.title : "");
  const [priority, setPriority] = useState(todo ? todo.priority : null);


  const handleSave = (e) => {
    e.preventDefault();
    onSave(title, priority);
    onClose();
  };

  return (
    isOpen && (
      <>
        <div className="modal-backdrop"></div>
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
            <p>Priority</p>

            {PRIORITY_ITEMS.map(item => (
              <div key={item.value}>
                <input
                  name="priorityName"
                  type="radio"
                  value={item.value}
                  id={item.label}
                  checked={priority === item.value}
                  onChange={(e) => setPriority(e.target.value)}
                />
                <label htmlFor={item.label}>{item.label}</label>
              </div>
            ))}

            <button  disabled={title.trim() === ""  } onClick={handleSave}>
              {todo ? "Save Changes" : "Add Todo"}
            </button>
          </div>
        </div>
      </>
    )
  );
};

export default TodoModal;
