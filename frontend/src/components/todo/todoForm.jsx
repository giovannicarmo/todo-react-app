import React from "react";
import Grid from "../../template/grid";
import IconButton from "../../template/button";

export default props => (
  <div role="form" className="row d-flex align-items-center todoForm">
    <Grid cols="12 8 10">
      <input
        className="form-control"
        id="description"
        placeholder="Add a task"
        value={props.description}
        onChange={props.handleChange}
      ></input>
    </Grid>
    <Grid cols="12 3 2">
      <IconButton style="primary" icon="plus" click={props.handleAdd}></IconButton>
    </Grid>
  </div>
);
