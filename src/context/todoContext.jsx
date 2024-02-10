import { createContext, useEffect, useState } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  }, []);

  // useEffect(() => {
  //
  // }, [todos]);

  const updateLocalStorage = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, status) => {
    const newTodo = {
      id: todos.length + 1,
      title,
      status,
    };
    setTodos((prev) => {
      const data = [...prev, newTodo];
      updateLocalStorage(data);
      return data;
    });
  };

  const updateTodo = (id, updatedTodo) => {
    setTodos((prev) => {
      const index = prev.findIndex((todo) => todo.id === id);
      if (index < 0) {
        return prev;
      }
      prev.splice(index, 1, updatedTodo);

      updateLocalStorage(prev);
      return prev;
    });
  };

  const deleteTodo = (id) => {
    setTodos((prev) => {
      const index = prev.findIndex((todo) => todo.id === id);
      if (index < 0) {
        return prev;
      }
      prev.splice(index, 1);

      updateLocalStorage(prev);
      return prev;
    });
  };

  const searchTodo = (searchTerm) => {
    return todos.filter((todo) =>
      todo.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const filterTodoByStatus = (status) => {
    return todos.filter((todo) => todo.status === status);
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
