import { useContext, useState } from "react";
import { TodoContext } from "../../context/todoContext";
import TodoModal from "../modal/Modal2";
import "./add_task.css";
const AddTask = () => {
  const [modal, setModal] = useState(false);

  // const [newPriority, setNewPriority] = useState("");

  const toggleModal = (e) => {
    console.log(e)
    modal ? setModal(false) : setModal(true);
  };

  const { addTodo } = useContext(TodoContext);

  const handleAddTodo = (newTodo) => {
    if (newTodo.trim() !== "") {
      addTodo(newTodo, "low");
    }
    setModal(false);
  };

  return (
    <>
      <button className="add-btn" onClick={toggleModal}>
        Add Todo
      </button>
      {modal && <TodoModal isOpen={modal} onClose={toggleModal} onSave={handleAddTodo}  />}
      {/* {modal && (
        <Modal
        title={"ADD Todo"}
          onClose={toggleModal}
          onAddTodo={handleAddTodo}
          setNewTodo={setNewTodo}
        /> */}
    
    </>
  );
};

export default AddTask;
