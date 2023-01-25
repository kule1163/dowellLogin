import React from "react";
import Box from "./box/Box";
import styles from "./styles.module.css";

const Products = () => {
  return (
    <div className={styles.cover}>
      {products.map((item) => (
        <div key={item.id} class={styles.container}>
          <Box product={item.first} />
          <Box product={item.second} />
        </div>
      ))}
    </div>
  );
};

export default Products;

export const products = [
  {
    id: crypto.randomUUID(),
    first: {
      image:
        "https://uxlivinglab.com/wp-content/uploads/2022/12/Workflow-AI-2.png",
      id: crypto.randomUUID(),
      title: "Workflow AI",
      porfolios: [
        {
          portfolio_name: "porfolio one",
          id: crypto.randomUUID(),
        },
        {
          portfolio_name: "porfolio two",
          id: crypto.randomUUID(),
        },
        {
          portfolio_name: "porfolio three",
          id: crypto.randomUUID(),
        },
      ],
    },
    second: {
      image:
        "https://uxlivinglab.com/wp-content/uploads/2022/12/Wifi-QR-Code-1.png",
      id: crypto.randomUUID(),
      title: "Will QR Code",
      porfolios: [
        {
          portfolio_name: "porfolio one",
          id: crypto.randomUUID(),
        },
        {
          portfolio_name: "porfolio two",
          id: crypto.randomUUID(),
        },
        {
          portfolio_name: "porfolio three",
          id: crypto.randomUUID(),
        },
      ],
    },
  },
  {
    id: crypto.randomUUID(),
    first: {
      image:
        "https://uxlivinglab.com/wp-content/uploads/2022/12/Workflow-AI-2.png",
      id: crypto.randomUUID(),
      title: "Workflow AI",
      porfolios: [
        {
          portfolio_name: "porfolio one",
          id: crypto.randomUUID(),
        },
        {
          portfolio_name: "porfolio two",
          id: crypto.randomUUID(),
        },
        {
          portfolio_name: "porfolio three",
          id: crypto.randomUUID(),
        },
      ],
    },
    second: {
      image:
        "https://uxlivinglab.com/wp-content/uploads/2022/12/Wifi-QR-Code-1.png",
      id: crypto.randomUUID(),
      title: "Will QR Code",
      porfolios: [
        {
          portfolio_name: "porfolio one",
          id: crypto.randomUUID(),
        },
        {
          portfolio_name: "porfolio two",
          id: crypto.randomUUID(),
        },
        {
          portfolio_name: "porfolio three",
          id: crypto.randomUUID(),
        },
      ],
    },
  },
];
