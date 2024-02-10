import { createContext, useEffect, useState } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title, status) => {
    const newTodo = {
      id: todos.length + 1,
      title,
      status,
    };
    setTodos([...todos, newTodo]);
  };

  const updateTodo = (id, updatedTodo) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, ...updatedTodo } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = id => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const searchTodo = searchTerm => {
    return todos.filter(todo =>
      todo.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const filterTodoByStatus = status => {
    return todos.filter(todo => todo.status === status);
  };
  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        updateTodo,
        deleteTodo,
        searchTodo,
        filterTodoByStatus,
    
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
