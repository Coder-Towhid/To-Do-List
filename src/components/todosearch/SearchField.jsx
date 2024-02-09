import { MagnifyingGlass, X } from "@phosphor-icons/react";
import PropTypes from 'prop-types';
import "./todo_search.css";
const SearchField = ({showSearchField}) => {
  return (
    <div className="search-field-wrapper">
       <MagnifyingGlass className="btn-cta" size={24}/>
        <input placeholder="Search a TODO"  className="search-input " type="text" />
        <X onClick={showSearchField} className="btn-cta" size={24} />
    </div>
  )
}


SearchField.propTypes = {
    showSearchField: PropTypes.func.isRequired,
  };
export default SearchField