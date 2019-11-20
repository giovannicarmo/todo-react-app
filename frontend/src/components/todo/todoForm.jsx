import React from "react";
import Grid from "../../template/grid";
import IconButton from "../../template/button";

export default props => {
  const keyHandler = e => {
    if (e.key === "Enter") {
      e.shiftKey ? props.handleSearch() : props.handleAdd();
    } else if (e.key === "Escape") {
      props.handleClear();
    }
  };

  return(
    <div role="form" className="row d-flex align-items-center todoForm">
      <Grid cols="12 8 10">
        <input
          className="form-control"
          id="description"
          placeholder="Add a task"
          value={props.description}
          onChange={props.handleChange}
          onKeyUp={keyHandler}
          value={props.description}
        ></input>
      </Grid>
      <Grid cols="12 3 2">
        <IconButton
          style="primary"
          icon="plus"
          click={props.handleAdd}
        ></IconButton>
        <IconButton
          style="info"
          icon="search"
          click={props.handleSearch}
        ></IconButton>
        <IconButton
          style="default"
          icon="close"
          click={props.handleClear}
        ></IconButton>
      </Grid>
    </div>
  );
};
