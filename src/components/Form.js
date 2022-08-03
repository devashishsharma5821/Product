import React,{useState} from "react";
import classes from "./Form.module.css";


export default function Form(props) {
    const [minVal, setMinVal] = useState();
    const [maxVal, setMaxVal] = useState();

  const onMinChangeHandler = (event) => {
        setMinVal(event.target.value);
  }

  const onMaxChangeHandler = (event) => {
        setMaxVal(event.target.value);
  }

  const onSubmitHandler = (event) => {
       event.preventDefault();
       props.onSubmit(minVal,maxVal);
  }

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <label>Please enter your range of price for the items.</label>
      <div className={classes.inputContainer}>
        <input type="number" min="1" max="1000" step="0.1" placeholder="minimum" onChange={onMinChangeHandler} required/>
        <input type="number" min="1" max="1000" step="0.1" placeholder="maximum" onChange={onMaxChangeHandler} required/>
      <button type='submit'>Submit</button>
      </div>
    </form>
  );
}
