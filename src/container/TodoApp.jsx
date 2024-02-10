import AddTask from "../components/addtask/AddTask";
import CardList from "../components/cardlist/CardList";
import TodoCounter from "../components/todocounter/TodoCounter";
import TodoFilter from "../components/todofilter/TodoFilter";
import TodoSearch from "../components/todosearch/TodoSearch";
import "./todo_app.css";
const TodoApp = () => {
  return (
    <main className="container">
      <div className="header">
        <div className="todo-header">
          <h2>To-Do App</h2>
          <AddTask />
        </div>
        <div className="todo-sub-header">
          <TodoCounter />
          <div className="todo-sub-header-right">
            <TodoSearch />
            <TodoFilter />
          </div>
        </div>
      </div>

      <div className="todo-card-container">
        <CardList />
      </div>
    </main>
  )
}

export default TodoApp;
