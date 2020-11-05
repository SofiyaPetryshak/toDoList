import React from "react";

const SearchPanel = () => {
  return (
    <div className="d-flex my-4">
      <input type="search" className="form-control w-auto flex-grow-1 mr-1" placeholder="Search" />

      <div class="btn-group w-25" role="group" >
        <button type="button btn-info" class="btn btn-light">
          All
        </button>
        <button type="button" class="btn btn-light">
          Active
        </button>
        <button type="button" class="btn btn-light">
          Done
        </button>
      </div>
    </div>
  );
};
export default SearchPanel;
