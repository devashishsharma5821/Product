import React, { Fragment, useState } from "react";
import Item from "./components/Item";
import Form from './components/Form';
import "./App.css";
import Button from "./components/Button";

function App() {
  const [num1, setNum1] = useState(1);
  const [num2, setNum2] = useState(5);
  const [minVal, setMinVal] = useState();
  const [maxVal, setMaxVal] = useState();

  const onformSubmitHandler = (mnVal,mxVal) => {
    setMinVal(mnVal);
    setMaxVal(mxVal);
  }

  const prevSubmitHandler = () => {
    if (num1 > 1) {
      setNum1((prevNum1) => prevNum1 - 5);
      setNum2((prevNum2) => prevNum2 - 5);
    }
  };
  
  const nextSubmitHandler = () => {
    if (num2 < 20) {
      setNum2((prevNum2) => prevNum2 + 5);
      setNum1((prevNum1) => prevNum1 + 5);
    }
  };

  return (
    <Fragment>
      <Form onSubmit={onformSubmitHandler}/>
      <Item num1={num1} num2={num2} minVal={minVal} maxVal={maxVal} />
      <Button
        prevSubmitHandler={prevSubmitHandler}
        nextSubmitHandler={nextSubmitHandler}
      />
    </Fragment>
  );
}

export default App;
