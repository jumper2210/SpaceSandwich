import React from "react";
import classes from "./SandwichCheck.module.css";
import SandwichBreadType from "../SandwichType/SandwichBreadType/SandwichBreadType";
import SandwichIngredientsType from "../SandwichType/SandwichIngredientsType/SandwichIngredientsType";
import SandwichSaucesType from "../SandwichType/SandwichSaucesType/SandwichSaucesType";
const SandwichCheck = props => {
  console.log(props);
  let transformedIngredientsType = Object.keys(props.Ingredients)
    .map(igKey => {
      return [...Array(props.Ingredients[igKey])].map((_, i) => {
        return <SandwichIngredientsType key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  let transformedSaucesType = Object.keys(props.Sauces)
    .map(suKey => {
      return [...Array(props.Sauces[suKey])].map((_, i) => {
        return <SandwichSaucesType key={suKey + i} type={suKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  let transformedBreadType = Object.keys(props.BreadTypes)
    .map(btKey => {
      return [...Array(props.BreadTypes[btKey])].map((_, i) => {
        return <SandwichBreadType key={btKey + i} type={btKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformedBreadType.length === 0) {
    transformedBreadType = (
      <p className={classes.Information}>na jakie pieczywko masz ochotę ?</p>
    );
  }

  return (
    <div className={classes.Sandwich}>
      {transformedBreadType}
      {transformedIngredientsType}
      {transformedSaucesType}
    </div>
  );
};
export default SandwichCheck;