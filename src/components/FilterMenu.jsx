import React from "react";

const FilterMenu = () => {
    
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn m-1">
        Filter By:
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <a >Onsite</a>
        </li>
        <li>
          <a >Remote</a>
        </li>
      </ul>
    </div>
  );
};

export default FilterMenu;
