import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { remove, markAsDone, markAsPending } from "./todoActions";
import IconButton from "../../template/button";

const TodoList = props => {
  const renderRows = () => {
    const list = props.list || [];
    return list.map(todo => (
      <tr key={todo._id}>
        <td className={todo.done ? "marked-as-done" : ""}>
          {todo.description}
        </td>
        <td>
          <IconButton
            style="success"
            icon="check"
            click={() => props.markAsDone(todo)}
            hide={todo.done}
          ></IconButton>
          <IconButton
            style="warning"
            icon="undo"
            click={() => props.markAsPending(todo)}
            hide={!todo.done}
          ></IconButton>
          <IconButton
            style="danger"
            icon="trash-o"
            click={() => props.remove(todo._id)}
            hide={!todo.done}
          ></IconButton>
        </td>
      </tr>
    ));
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  );
};

const mapStateToProps = state => ({
  list: state.todo.list
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ remove, markAsDone, markAsPending }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
