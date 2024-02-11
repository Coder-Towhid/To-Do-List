import { createContext, useEffect, useState } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({});


  
  
  const updateLocalStorage = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  
  const addTodo = (title, priority, status= false) => {
    const newTodo = {
      id: todos.length + 1,
      title,
      priority,
      status,
    };
    setTodos((prev) => {
      const data = [...prev, newTodo];
      updateLocalStorage(data);
      return data;
    });
  };

  const updateTodo = (id, updatedTodo) => {
    setTodos((old) => {
      const prev = [...old]
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
    setTodos((old) => {
      const prev = [...old]
      const index = prev.findIndex((todo) => todo.id === id);
      if (index < 0) {
        return prev;
      }
      prev.splice(index, 1);
      
      updateLocalStorage(prev);
      return prev;
    });
  };
  
  const updateSearch = (searchTerm) => {

    setSearch(searchTerm.trim())
 
  };
  
  const updateFilters = (property, value) => {
    setFilters(prev=> ({...prev, [property]:value}))
  };

  const resetFilters = ()=>{
    setFilters({})
  }
  // useEffect(() => {
  //   localStorage.setItem('todos', JSON.stringify(todos));
  // }, [todos]); 
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    console.log("display stored todos",storedTodos)
    setTodos(storedTodos);
  }, []);

  return (
    <TodoContext.Provider
      value={{
        todos,
        search,
        filters,
        updateSearch,
        resetFilters,
        updateFilters,
        addTodo,
        updateTodo,
        deleteTodo,
      
      
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
