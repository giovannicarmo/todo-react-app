import React from "react";
import IconButton from "../../template/button";

export default props => {
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
            click={() => props.handleMarkAsDone(todo)}
            hide={todo.done}
          ></IconButton>
          <IconButton
            style="warning"
            icon="undo"
            click={() => props.handleMarkAsPending(todo)}
            hide={!todo.done}
          ></IconButton>
          <IconButton
            style="danger"
            icon="trash-o"
            click={() => props.handleRemove(todo)}
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
