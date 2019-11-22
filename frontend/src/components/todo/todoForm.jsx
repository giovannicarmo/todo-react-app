import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { add, changeDescription, search, clear } from "./todoActions";
import Grid from "../../template/grid";
import IconButton from "../../template/button";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.keyHandler = this.keyHandler.bind(this);
  }

  keyHandler(e) {
    const { search, add, clear, description } = this.props;
    if (e.key === "Enter") {
      e.shiftKey ? search() : add(description);
    } else if (e.key === "Escape") {
      clear();
    }
  }

  componentWillMount() {
    this.props.search();
  }

  render() {
    const { description, changeDescription, add, search } = this.props;
    return (
      <div role="form" className="row d-flex align-items-center todoForm">
        <Grid cols="12 8 10">
          <input
            className="form-control"
            id="description"
            placeholder="Add a task"
            value={description}
            onChange={changeDescription}
            onKeyUp={this.keyHandler}
            value={description}
          ></input>
        </Grid>
        <Grid cols="12 3 2">
          <IconButton
            style="primary"
            icon="plus"
            click={() => add(description)}
          ></IconButton>
          <IconButton style="info" icon="search" click={search}></IconButton>
          <IconButton
            style="default"
            icon="close"
            click={this.props.handleClear}
          ></IconButton>
        </Grid>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  description: state.todo.description
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ add, changeDescription, search, clear }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
