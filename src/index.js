import React from "react";
import { render } from "react-dom";
import EditableGrid from "./EditableGrid";
import "./style.css";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <EditableGrid name="CodeSandbox" />
  </div>
);

render(<App />, document.getElementById("root"));
