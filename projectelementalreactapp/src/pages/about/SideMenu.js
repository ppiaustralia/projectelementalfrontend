import React from "react"
import styles from "./SideMenu.module.css"
function SideMenu() {
    return (
        <div className={styles["side-menu"]}>
            <div className={styles["button"]}>About Us</div>
            <div className={styles["button"]}>Vision</div>
            <div className={styles["button"]}>Mission</div>
            <div className={styles["button"]}>Kabinet Impact 2021/2022</div>
            <div className={styles["button"]}>AD / ART</div>
        </div>
    )
}

export default SideMenu
