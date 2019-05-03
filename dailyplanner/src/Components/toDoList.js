import React from "react";
import "./toDoList.css";

class Answer extends React.Component {
  handleClickTick(work) {
    this.props.change(work);
  }
  handleClickCross(work) {
    this.props.delete(work);
  }
  render() {
    return (
      <div className="answer">
        {this.props.arr.map(work => (
          <div key={work.id} className="todos">
            <input
              className="done"
              type="button"
              value="Done"
              onClick={this.handleClickTick.bind(this, work)}
            />
            {work.value}
            <input
              className="delete"
              type="button"
              value="Delete"
              onClick={this.handleClickCross.bind(this, work)}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Answer;
