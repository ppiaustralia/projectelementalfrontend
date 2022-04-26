import React from "react"
import styles from "./Footer.module.css"

function Footer() {
    return (
        <div ClassName={styles["ft-body"]}>
            <section className={styles["ft-main"]}>
                <div className={styles["ft-main-item"]}>
                    
                </div>
                <div className={styles["ft-main-item"]}></div>
                <div className={styles["ft-main-item"]}></div>
            </section>
            <section className={styles["ft-social"]}></section>
            <section className={styles["ft-legal"]}></section>
        </div>
    )
}

export default Footer