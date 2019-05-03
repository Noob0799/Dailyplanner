import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Head from "./Components/head";
import Main from "./Components/main";

const App = () => {
  return (
    <div>
      <div className="head">
        <Head />
      </div>
      <div className="main">
        <Main />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
