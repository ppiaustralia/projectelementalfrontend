import React from 'react';
import styles from "./Liveinoz.module.css"

export default function Subtitle({section}) {
  return (
    <div className={styles["subtitle"]}>
        <h2>{section.subtitle}</h2>
        <hr style={{ width: "70%", margin: "auto" }} />
    </div>
  );
}