import React from "react";
import style from "./navbar.module.css";

export default function Index() {
  return (
    <>
      <nav className={style.NavBar}>
        <span className={style.AppName}>Home Food</span>
        <span className={style.FillFlex} />
        <a href="" className={style.AppItem}>
          Login
        </a>
        <a href="" className={style.AppItem}>
          Sign up
        </a>
      </nav>
    </>
  );
}
