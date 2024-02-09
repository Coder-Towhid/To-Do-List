import { Faders, X } from "@phosphor-icons/react";
import { useState } from "react";
import FilterField from "./FilterField";
import "./todo_filter.css";

const TodoFilter = () => {
  const [show, setShow] = useState(false);

  const showFilterField = (e) => {
    e.preventDefault();
    show ? setShow(false) : setShow(true);
  };
  return (
    <div className="filter-field">
      {show ? (
      <>
        <X className="btn-cta" onClick={showFilterField} size={24} />
        <FilterField/>

      </>
      ) : (
        <Faders onClick={showFilterField} className="btn-cta" size={24} />
      )}
    </div>
  );
};

export default TodoFilter;
