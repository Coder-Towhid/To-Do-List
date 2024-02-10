import Card from "../card/Card";
import "./card_list.css";
const CardList = () => {
  return (
    <section className="card-list">
      <ul>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ul>
    </section>
  );
};

export default CardList;
