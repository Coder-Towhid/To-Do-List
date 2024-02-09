import { MagnifyingGlass } from "@phosphor-icons/react";
import { useState } from "react";
import SearchField from "./SearchField";

const TodoSearch = () => {

  const [show, setShow] = useState(false)

  const showSearchField = (e)=>{
    e.preventDefault();
    show? setShow(false):setShow(true)
  }
  return (
    <div className="search-field">
    {
      show ? <SearchField showSearchField={showSearchField}/> :   <MagnifyingGlass onClick={showSearchField} className="btn-cta" size={24} />
    }
    
    </div>
  );
};

export default TodoSearch;
