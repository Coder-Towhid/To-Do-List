import { X } from "@phosphor-icons/react";
import "./modal.css";
const Modal = ({ onClose, onAddTodo, setNewTodo }) => {
  return (
    <>
      <div className="modal-backdrop" onClick={onclose}></div>

      <div className="modal-container">
        <div className="todo-modal-title">
          <h2>ADD Todo</h2>
          <X className="btn-cta" onClick={onClose} size={24} />
        </div>
        <form action="submit" onSubmit={onAddTodo}>
          <input
            placeholder="Write your todo..."
            className="submit-input"
            type="text"
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <div className="priorities">
            <div className="priority-left">
              <label>priority</label>
            </div>
            <div className="priority-right">
              <input type="radio" name="priority" />
              <label htmlFor="high">HIGH</label>
              <input type="radio" name="priority" />
              <label htmlFor="medium">MEDIUM</label>
              <input type="radio" name="priority" />
              <label htmlFor="low">LOW</label>
            </div>
          </div>
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default Modal;
