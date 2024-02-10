import { array } from "prop-types";
import { Fragment, useContext } from "react";
import Card from "../card/Card";
import "./card_list.css";
import { TodoContext } from "../../context/todoContext";

const CardList = ({cards}) => {
const {todos} = useContext(TodoContext)


  return <Fragment>{
    todos.map((todo, index)=>(<Card key={index} todo={todo}/>))
  }</Fragment>;
};

CardList.propTypes = {
  cards: array
}
CardList.defaultProps={
  cards: []
}

export default CardList;
