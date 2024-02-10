import { PencilLine, Trash } from "@phosphor-icons/react";
import "./card.css";
const Card = () => {
  return (
    <li className="card">
      <div className="card-left">
        <div className="checkbox">
          <input type="checkbox" />
        </div>
        <div className="title">
          <p>Task 1</p>
          <span>HIGH</span>
        </div>
      </div>

      <div className="action">
        <PencilLine className="btn-cta" size={24} />
        <Trash className="btn-cta" size={24} />
      </div>
    </li>
  );
};

export default Card;
