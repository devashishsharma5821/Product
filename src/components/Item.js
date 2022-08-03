import React, { useState, useEffect } from "react";
import Card from "./Card";
import classes from './Item.module.css';

const Item = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((dataa) => setData(dataa));
  }, []);

  let items;

  if (!(props.minVal && props.maxVal)) {
    items = data.map((item) => {
      if (!(item.id <= props.num2 && item.id >= props.num1)) {
        return;
      }
      return (
        <Card
          key={item.id}
          title={item.title}
          description={item.description}
          image={item.image}
          rating={item.rating.rate}
          price={item.price}
          category={item.category}
        />
      );
    });
  }

  if (props.minVal || props.maxVal) {
    items = data.filter((item) => {
      return item.price >= props.minVal && item.price <= props.maxVal;
    });
 
    items = items.map((item, index) => {
      console.log(item);
        if (index <= props.num2 - 1 && index >= props.num1 - 1) {
          return (
            <Card
              key={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
              rating={item.rating.rate}
              price={item.price}
              category={item.category}
            />
          );
        } 
    });
  }

  if(items.length === 0){
    return <p className={classes.noItem}>No item available in this range</p>;
  }

  return (
    items.map((item) => item)
    );
};

export default Item;
