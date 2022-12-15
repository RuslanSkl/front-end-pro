import React from "react";

export class LeftSideNav extends React.Component {
  render() {
    return (
      <div className="sidenav">
        <a href="https://ru.reactjs.org/docs/getting-started.html">Docs</a>
        <a href="https://reactjs.org/tutorial/tutorial.html">Tuturial</a>
        <a href="https://reactjs.org/blog/">Blog</a>
        <a href="https://reactjs.org/community/support.html">Community</a>
      </div>
    );
  }
}
