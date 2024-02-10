
import { useContext } from "react"
import { TodoContext } from "../../context/todoContext"
import "./todo_counter.css"


const TodoCounter = () => {

const {todos} = useContext(TodoContext)
  return (
    <p className="todo_counter">{todos.length} of {todos.length} completed</p>
  )
}

export default TodoCounter