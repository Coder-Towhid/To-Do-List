import { PencilLine, Trash } from "@phosphor-icons/react";
import { useState } from "react";
import Modal from "../modal/Modal";
import "./card.css";
const Card = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    modal ? setModal(false) : setModal(true);
  };

  return (
    <>
      <div className="card">
        <div className="card-left">
          <div className="checkbox">
            <input type="checkbox" />
          </div>
          <div className="title">
            <h3>Task 1</h3>
            <span>HIGH</span>
          </div>
        </div>

        <div className="action">
          <PencilLine onClick={toggleModal} className="btn-cta" size={24} />
          <Trash className="btn-cta" size={24} />
        </div>
      </div>
      {modal && <Modal onClose={toggleModal} />}
    </>
  );
};

export default Card;
