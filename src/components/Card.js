import React from "react";
import classes from "./Card.module.css";

export default function Card(props) {
  return (
    <div className={classes.card}>
      <div className={classes.subCard}>
        <h1>{props.title}</h1>
        <h2>{props.category}</h2>
        <img src={props.image}></img>
        <p>{props.description}</p>
        <h4>price: ${props.price}</h4>
        <h3>Rating:{props.rating}</h3>
      </div>
    </div>
  );
}
