import { useContext, useState } from "react";
import { TodoContext } from "../../context/todoContext";
import Modal from "../modal/Modal";
import "./add_task.css";
const AddTask = () => {
  const [modal, setModal] = useState(false);
  const [newTodo, setNewTodo] = useState("");
  // const [newPriority, setNewPriority] = useState("");

  const toggleModal = () => {
    modal ? setModal(false) : setModal(true);
  };

  const { addTodo } = useContext(TodoContext);

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() !== "") {
      addTodo(newTodo, "low");
    }
  };

  return (
    <>
      <button className="add-btn" onClick={toggleModal}>
        Add Todo
      </button>
      {modal && (
        <Modal
          onClose={toggleModal}
          onAddTodo={handleAddTodo}
          setNewTodo={setNewTodo}
     
        />
      )}
    </>
  );
};

export default AddTask;
