import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { LeftSideNav } from "./components/LeftSideNav";
import { Main } from "./components/Main";


export class App extends React.Component {
   render() {
    return (
    <div className="App">
      <Header />
      <Main />
      <LeftSideNav />
    </div>
    );
  }
}
