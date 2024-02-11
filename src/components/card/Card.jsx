import { PencilLine, Trash } from "@phosphor-icons/react";
import { useContext, useState } from "react";
import { TodoContext } from "../../context/todoContext";
import TodoModal from "../modal/Modal";
import "./card.css";

const Card = ({todo}) => {
  const [modal, setModal] = useState(false);
  // const [check, setCheck] = useState(todo.status);
  // console.log(check)



  const toggleModal = () => {
    modal ? setModal(false) : setModal(true);
  };

const{deleteTodo,  updateTodo }=useContext(TodoContext);

const handleUpdate = (newTodo, priority)=>{
  updateTodo(todo.id, {...todo, title: newTodo, priority: priority })
}

const handleDelete = ()=>{
  deleteTodo(todo.id)
}

const handleUpdateStatus = () => {

  updateTodo(todo.id, {...todo, status: !todo.status});
 
}
  return (
    <>
      <div className={`card ${todo.status ? 'active' : ''}`}>
        <div className="card-left">
          <div className="checkbox">
            <input checked={todo.status} onChange={handleUpdateStatus} type="checkbox" />
          </div>
          <div className="title">
            <h3>{todo.title}</h3>
            <span>{todo.priority}</span>
          </div>
        </div>

        <div className="action">
          <PencilLine onClick={toggleModal} className={`${todo.status ? 'active-btn' : 'btn-cta'}`} size={24} />
          <Trash onClick={handleDelete} className={`${todo.status ? 'active-btn' : 'btn-cta'}`} size={24} />
        </div>
      </div>
      {modal && <TodoModal isOpen={modal} onClose={toggleModal} onSave={handleUpdate} todo={todo}  />}
      
    </>
  );
};

export default Card;
