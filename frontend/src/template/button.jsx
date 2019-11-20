import React from "react";
import If from "../helper/if";

export default props => (
  <If test={!props.hide}>
    <button className={"ml-2 btn btn-" + props.style} onClick={props.click}>
      <i className={"fa fa-" + props.icon}></i>
    </button>
  </If>
);
