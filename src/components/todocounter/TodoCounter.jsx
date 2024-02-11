import { useContext, useMemo } from "react";
import { TodoContext } from "../../context/todoContext";
import "./todo_counter.css";

const TodoCounter = () => {
  const { todos } = useContext(TodoContext);
  const completedTodos = useMemo(() => {
    return todos.filter((todo)=> todo.status)    
  },[todos]);
  return (
    <p className="todo_counter">
      {completedTodos.length} of {todos.length} completed
    </p>
  );
};

export default TodoCounter;
