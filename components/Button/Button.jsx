import React from "react";
import styles from "./button.module.scss";

function Button(props) {
  return props.link ? (
    <a className={`${styles.container} `} {...props}>
      {props.children}
    </a>
  ) : (
    <button className={`${styles.container} `} {...props}>
      {props.children}
    </button>
  );
}

export default Button;
