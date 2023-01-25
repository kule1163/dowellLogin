import React from "react";
import styles from "./styles.module.css";

const FeatureBox = ({ product }) => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.title}>{product.title}</div>
        <select>
          {product.porfolios.map((item) => (
            <option key={item.id}>{item.portfolio_name}</option>
          ))}
        </select>
        <button className={styles.button}>Connect</button>
      </div>
    </div>
  );
};

export default FeatureBox;
