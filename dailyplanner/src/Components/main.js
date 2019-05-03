import React from "react";
import Answer from "./toDoList";
import "./main.css";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: -1,
      value: "",
      arr: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClickDisplay = this.handleClickDisplay.bind(this);
    this.handleClickReset = this.handleClickReset.bind(this);
    this.delete = this.delete.bind(this);
    this.change = this.change.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleClickDisplay(event) {
    let el = <span>{this.state.value}</span>;
    let element = {
      id: this.state.id + 1,
      value: el
    };
    this.setState({
      arr: [...this.state.arr, element],
      id: this.state.id + 1
    });
  }
  handleClickReset(event) {
    this.setState({ value: "" });
  }
  delete(index) {
    let data = this.state.arr.filter(i => i.id !== index.id);
    this.setState({
      arr: data
    });
  }
  change(index) {
    let a = this.state.arr;
    let el = (
      <span
        style={{
          color: "red",
          textDecoration: "line-through",
          fontStyle: "italic"
        }}
      >
        {index.value}
      </span>
    );
    let element = {
      id: this.state.id + 1,
      value: el
    };
    this.setState({
      id: this.state.id + 1
    });
    let j = 0,
      count = 0;
    while (index.id !== this.state.arr[j].id) {
      count++;
      j++;
    }
    a.splice(count, 1, element);
    this.setState({
      arr: a
    });
    console.log(index.id);
    console.log(this.state.id);
    console.log(this.state.arr);
  }
  render() {
    return (
      <div>
        <div className="label">
          <label>Enter the work to be done:</label>
        </div>
        <div className="outsidetextbox">
          <input
            className="textbox"
            type="text"
            placeholder="Enter your work-details here"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </div>
        <div className="parent">
          <div className="child1">
            <input
              className="button1"
              type="button"
              value="Add"
              onClick={this.handleClickDisplay}
            />
          </div>
          <div className="child2">
            <input
              className="button2"
              type="button"
              value="Reset"
              onClick={this.handleClickReset}
            />
          </div>
        </div>
        <div className="ans">
          <Answer
            arr={this.state.arr}
            delete={this.delete}
            change={this.change}
          />
        </div>
      </div>
    );
  }
}
export default Main;
