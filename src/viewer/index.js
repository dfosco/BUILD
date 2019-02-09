import React, { Fragment } from "react";
import ComponentList from "./ComponentList.js";
import ComponentRenderer from "./ComponentRenderer.js";

export default function Viewer(props) {
  return (
    <Fragment>
      <ComponentList></ComponentList>
      <ComponentRenderer></ComponentRenderer>
    </Fragment>
  );
}
