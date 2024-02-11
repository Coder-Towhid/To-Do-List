import { MagnifyingGlass, X } from "@phosphor-icons/react";
import PropTypes from 'prop-types';
import { useContext } from "react";
import { TodoContext } from "../../context/todoContext";
import "./todo_search.css";
const SearchField = ({showSearchField}) => {
  const {updateSearch } = useContext(TodoContext)



  const handleCloseSearch = (e) =>{
    updateSearch("")
    showSearchField(e);
  }

  return (
    <div className="search-field-wrapper">
       <MagnifyingGlass className="btn-cta" size={24}/>
        <input placeholder="Search a TODO" onChange={(e)=>updateSearch(e.target.value)}  className="search-input " type="text" />
        <X onClick={handleCloseSearch} className="btn-cta" size={24} />
    </div>
  )
}


SearchField.propTypes = {
    showSearchField: PropTypes.func.isRequired,
  };
export default SearchField