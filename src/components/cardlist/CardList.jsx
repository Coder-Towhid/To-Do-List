import { array } from "prop-types";
import { Fragment, useContext, useMemo } from "react";
import { TodoContext } from "../../context/todoContext";
import Card from "../card/Card";
import "./card_list.css";

const CardList = ({ cards }) => {
  const { todos, search, filters } = useContext(TodoContext);
  const filteredTodo = useMemo(() => {
    let newTodoList = [...todos];
    if(Object.keys(filters).includes("status")){
        newTodoList = newTodoList.filter((todo)=> todo.status === filters.status )
    }
    
    if(Object.keys(filters).includes("priority")){
        newTodoList = newTodoList.filter((todo)=> todo.priority === filters.priority )
    }
    
    
    return newTodoList;
  }, [todos, filters]);

  return (
    <Fragment>
      {filteredTodo
        .filter((todo) =>
          todo.title.toLowerCase().includes(search.toLowerCase())
        )
        .map((todo, index) => (
          <Card key={index} todo={todo} />
        ))}
    </Fragment>
  );
};

CardList.propTypes = {
  cards: array,
};
CardList.defaultProps = {
  cards: [],
};

export default CardList;
