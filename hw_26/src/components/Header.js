import React from "react";
import { Timer } from "./Timer";

export class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
      <header className="header">
        <h1>React component - Header</h1>
        <Timer />
      </header>
      </React.Fragment>
    );
  }
}
