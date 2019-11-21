import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { changeDescription, search } from "./todoActions";
import Grid from "../../template/grid";
import IconButton from "../../template/button";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.keyHandler = this.keyHandler.bind(this);
  }

  keyHandler(e) {
    if (e.key === "Enter") {
      e.shiftKey ? this.props.handleSearch() : this.props.handleAdd();
    } else if (e.key === "Escape") {
      this.props.handleClear();
    }
  }

  componentWillMount() {
    this.props.search();
  }

  render() {
    return (
      <div role="form" className="row d-flex align-items-center todoForm">
        <Grid cols="12 8 10">
          <input
            className="form-control"
            id="description"
            placeholder="Add a task"
            value={this.props.description}
            onChange={this.props.changeDescription}
            onKeyUp={this.keyHandler}
            value={this.props.description}
          ></input>
        </Grid>
        <Grid cols="12 3 2">
          <IconButton
            style="primary"
            icon="plus"
            click={this.props.handleAdd}
          ></IconButton>
          <IconButton
            style="info"
            icon="search"
            click={this.props.handleSearch}
          ></IconButton>
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
  bindActionCreators({ changeDescription, search }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
