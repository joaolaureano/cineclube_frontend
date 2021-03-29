import React from "react";
import {logIn} from "../../services/login"
import "./styles.css";



const Example = (): JSX.Element => {
  return (
    <div>
      <h1>Example Page Title</h1>
      <button
        onClick = {logIn}
      >Submit</button>
    </div>
  );
};

export default Example;