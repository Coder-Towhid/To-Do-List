import "./todo_filter.css";
const FilterField = () => {


  
  return (
    <div className="filter-container">
      <p className="filter-container-header">filter By</p>
      <div className="filter-container-content">
        <p>status</p>
        <input type="radio" name="statusInput" />
        <label>complete</label>
        <input type="radio" name="statusInput" />
        <label>incomplete</label>
      </div>
      <div className="filter-container-content">
        <p>status</p>
        <input type="radio" name="priorityInput" />
        <label>High</label>
        <input type="radio" name="priorityInput" />
        <label>Medium</label>
        <input type="radio" name="priorityInput" />
        <label>low</label>
      </div>
    </div>
  );
};

export default FilterField;
