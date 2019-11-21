import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { add, changeDescription, search } from "./todoActions";
import Grid from "../../template/grid";
import IconButton from "../../template/button";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.keyHandler = this.keyHandler.bind(this);
  }

  keyHandler(e) {
    const { search, add, description } = this.props
    if (e.key === "Enter") {
      e.shiftKey ? search() : add(description);
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
            onClick={() => add(description)}
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
  bindActionCreators({ add, changeDescription, search }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
