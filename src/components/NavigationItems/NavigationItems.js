import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "../NavigationItems/NavigationItem/NavigationItem";
const NavigationItems = props => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" active>
      Twoja kanapka
    </NavigationItem>
    <NavigationItem link="/">Zamówienia</NavigationItem>
    <NavigationItem link="/auth">Logowanie</NavigationItem>
  </ul>
);

export default NavigationItems;
