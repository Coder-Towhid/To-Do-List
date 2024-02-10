import { PencilLine, Trash } from "@phosphor-icons/react";
import { useContext, useState } from "react";
import { TodoContext } from "../../context/todoContext";
import Modal from "../modal/Modal";
import "./card.css";

const Card = ({todo}) => {
  const [modal, setModal] = useState(false);

  const [newTodo, setNewTodo]=useState("")

  const toggleModal = () => {
    modal ? setModal(false) : setModal(true);
  };

const{deleteTodo, updateTodo}=useContext(TodoContext);

const handleUpdate = ()=>{
  deleteTodo(todo.id)

}
const handleDelete = ()=>{
  deleteTodo(todo.id, newTodo)
}
  return (
    <>
      <div className="card">
        <div className="card-left">
          <div className="checkbox">
            <input type="checkbox" />
          </div>
          <div className="title">
            <h3>{todo.title}</h3>
            <span>{todo.priority}</span>
          </div>
        </div>

        <div className="action">
          <PencilLine onClick={toggleModal} className="btn-cta" size={24} />
          <Trash onClick={handleDelete} className="btn-cta" size={24} />
        </div>
      </div>
      {modal && <Modal onClose={toggleModal} title={"Update Todo"} onUpdateTodo={handleUpdate} setUpdateTodo={setNewTodo} newUpdateTodo={newTodo} />}
    </>
  );
};

export default Card;
