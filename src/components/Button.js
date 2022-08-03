import React from "react";
import classes from "./Button.module.css";
export default function Button(props) {
  return (
    <div className={classes.buttonContainer}>
      <button type="submit" onClick={props.prevSubmitHandler}>
        prev..
      </button>
      <button type="submit" onClick={props.nextSubmitHandler}>
        next..
      </button>
    </div>
  );
}
