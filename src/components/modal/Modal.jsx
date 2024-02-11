import { X } from "@phosphor-icons/react";
import { useRef } from "react";
import "./modal.css";
const Modal = ({ title, onClose, onAddTodo, setNewTodo, newUpdateTodo, onUpdateTodo, setUpdateTodo }) => {
  

  const inputRef = useRef()
  const handleInput = ()=>{
    setNewTodo? setNewTodo(inputRef.current.value) : setUpdateTodo(inputRef.current.value)
  }
  return (

    <>
      <div className="modal-backdrop"></div>

      <div className="modal-container">
        <div className="todo-modal-title">
          <h3>{title}</h3>
          <X className="btn-cta" onClick={onClose} size={24} />
        </div>


        <form action="submit" onSubmit={onAddTodo}>
        
          <input
            ref={inputRef}
            placeholder="Write your todo..."
            className="submit-input"
            type="text"
            onChange={handleInput}
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
