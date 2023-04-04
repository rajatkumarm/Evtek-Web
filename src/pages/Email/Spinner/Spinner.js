import React from "react";
import styles from "./Spinner.module.scss";

const Spinner = ({className}) => {
  return <div className={`${className} ${styles.Loader}`}>Loading...</div>;
};

export default Spinner;
