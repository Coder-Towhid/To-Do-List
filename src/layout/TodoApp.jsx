
import AddTask from "../components/AddTask"
import "./todo_app.css"
const TodoApp = () => {
  return (
    <main className="container">
        <div className="todo-card">
            <div className="todo-header">
                <h2>To-Do App</h2>
                <AddTask/>
            </div>


        </div>

    </main>
  )
}

export default TodoApp