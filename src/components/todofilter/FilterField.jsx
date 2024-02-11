import { useContext } from "react";
import { FILTER_PROPERTY, PRIORITY_ITEMS, STATUS_ITEMS } from "../../constants/filters";
import { TodoContext } from "../../context/todoContext";
import "./todo_filter.css";

const FilterField = () => {
  const { updateFilters, resetFilters, filters } = useContext(TodoContext);

  const handleFilter = (name, value) => {
    updateFilters(name, value);
  };

  return (
    <div className="filter-container">
      <p className="filter-container-header">filter By</p>
      <div className="filter-container-content">
        <p>priority</p>
        {PRIORITY_ITEMS.map((item) => (
          <div key={item.value}>
            <input
              name="priorityName"
              type="radio"
              value={item.value}
              id={item.value}
              checked={filters[FILTER_PROPERTY.PRIORITY] === item.value}
              onChange={() => handleFilter(FILTER_PROPERTY.PRIORITY,item.value)}
            />
            <label htmlFor={item.value}>{item.label}</label>
          </div>
        ))}
        <p>status</p>
        {STATUS_ITEMS.map((item) => (
          <div key={item.value}>
            <input
              name="statusName"
              type="radio"
              value={item.value}
              id={item.value}
              checked={filters[FILTER_PROPERTY.STATUS] === item.value}
              onChange={() => handleFilter(FILTER_PROPERTY.STATUS, item.value)}
            />
            <label htmlFor={item.priorityName}>{item.label}</label>
          </div>
        ))}
      </div>

      <button onClick={resetFilters}>Reset Filter</button>
    </div>
  );
};

export default FilterField;
