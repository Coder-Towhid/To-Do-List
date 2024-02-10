import { array } from "prop-types";
import { Fragment } from "react";
import Card from "../card/Card";
import "./card_list.css";
const CardList = ({cards}) => {
  return <Fragment>{
    cards.map((card, index)=>(<Card key={index}/>))
  }</Fragment>;
};

CardList.propTypes = {
  cards: array
}
CardList.defaultProps={
  cards: []
}

export default CardList;
