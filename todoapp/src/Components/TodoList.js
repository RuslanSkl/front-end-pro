import React from "react";

export class TodoList extends React.Component {
  state = {
    nameOfList: "",
    lists: [],
  };

  render() {
    return (
      <div>
        <h1>To do List</h1>
        <input
          type="text"
          value={this.state.nameOfList}
          onChange={this.handleChange.bind(this)}
          name="nameofList"
        />
        <button onClick={this.handleAddClick.bind(this)}>Add a Cat</button>
        <ul>
          {this.state.lists.map((data, key) => (
            <li key={key}>{data}</li>
          ))}
        </ul>
      </div>
    );
  }

  handleChange(e) {
    this.setState({
      nameOfList: e.target.value,
    });
  }

  handleAddClick() {
    if (!this.state.nameOfList.length) {
      return;
    }
    this.setState({
      nameOfList: "",
      lists: [...this.state.lists, this.state.nameOfList],
    });
  }
}

