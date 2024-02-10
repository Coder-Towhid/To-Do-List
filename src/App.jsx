import "./App.css";
import TodoApp from "./container/TodoApp";
import { TodoProvider } from "./context/todoContext";

function App() {
  return (
    <TodoProvider >
      <TodoApp />
    </TodoProvider>
  );
}

export default App;
