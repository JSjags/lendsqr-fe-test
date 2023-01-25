import React from "react";
import styles from "./styles/dropdown.module.scss";
import caretDown from "../assets/dashboard/caret-down.svg";

const Dropdown = () => {
  return (
    <div className={styles.container}>
      <p>100</p>
      <img src={caretDown} alt="caret-down" />
    </div>
  );
};

export default Dropdown;
