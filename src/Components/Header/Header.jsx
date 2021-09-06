import React from "react";
import logo from '../../Assets/Logo.png'
import classes from "./Header.module.scss";

export default function Header() {

  return (
    <header className={classes.logo}>
      <img src={logo} alt="logo"/>
    </header>
  )
}