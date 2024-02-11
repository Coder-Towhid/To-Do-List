import { array } from "prop-types";
import { Fragment, useContext, useMemo } from "react";
import { FILTER_PROPERTY } from "../../constants/filters";
import { TodoContext } from "../../context/todoContext";
import EmptyList from "../EmptyList/EmptyList";
import Card from "../card/Card";
import "./card_list.css";

const CardList = ({ cards }) => {
  const { todos, search, filters } = useContext(TodoContext);
  const filteredTodo = useMemo(() => {
    let newTodoList = [...todos];

    if (Object.keys(filters).includes(FILTER_PROPERTY.PRIORITY)) {
      newTodoList = newTodoList.filter(
        (todo) => todo.priority === filters.priority
      );
    }

    if (Object.keys(filters).includes(FILTER_PROPERTY.STATUS)) {
      newTodoList = newTodoList.filter(
        (todo) => todo.status === filters.status
      );
    }

    return newTodoList;
  }, [todos, filters]);

  return (
    <Fragment>
      {filteredTodo.length > 0 ? (
        filteredTodo
          .filter((todo) =>
            todo.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((todo, index) => <Card key={index} todo={todo} />)
      ) : (
        <EmptyList />
      )}
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
