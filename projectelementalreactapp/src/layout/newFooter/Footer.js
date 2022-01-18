import React from "react"
// import "./Footer.css"
import styles from "./Footer.module.css"
import {image} from "react"

function Footer() {
    return (
        <div className={styles["ft-body"]}>
            <section className={styles["ft-main"]}>
                <div className={styles["ft-main-item"]}>
                    <ul className = {styles["ft-logo"]}>
                    </ul>
                    <h2 className={styles["ft-title"]}>About</h2>

                    <ul className={styles["ft-ul"]}>
                        <li>
                            <a className={styles["ft-a"]} href="./about">
                                PPIA The Biggest Overseas 
                                <br/>
                                Indonesia Student Association
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={styles["ft-main-item"]}>
                    <h2 className={styles["ft-title"]}>Useful Links</h2>
                    <ul className={styles["ft-ul"]}>
                        <li>
                            <a className={styles["ft-a"]} href="./about">
                                Kabinet Impact 2021 - 2022
                            </a>
                        </li>
                        <li>
                            <a className={styles["ft-a"]} href="./about">
                                AD / ART
                            </a>
                        </li>
                        <li>
                            <a className={styles["ft-a"]} href="./about">
                                Konsulat Indonesia
                            </a>
                        </li>
                        <li>
                            <a className={styles["ft-a"]} href="./about">
                                Events
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={styles["ft-main-item"]}>
                    <h2 className={styles["ft-title"]}>Contact</h2>
                    <ul className={styles["ft-ul"]}>
                        <li>
                            <a className={styles["ft-a"]} href="./contact">
                                Help
                            </a>
                        </li>
                        <li>
                            <a className={styles["ft-a"]} href="#">
                                Sponsor
                            </a>
                        </li>
                        <li>
                            <a className={styles["ft-a"]} href="#">
                                Advertise
                            </a>
                        </li>
                    </ul>
                </div>
            </section>

            <section className={styles["ft-social"]}>
                <ul
                    className={`${styles["ft-social-list"]} ${styles["ft-ul"]}`}
                >
                    <li>
                        <a href="https://www.facebook.com/PPIAustralia/">
                            <i class="fab fa-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fab fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/ppiaustralia_/">
                            <i class="fab fa-instagram"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fab fa-github"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/company/ppi-australia/">
                            <i class="fab fa-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/c/PPIAustraliaOfficial">
                            <i class="fab fa-youtube"></i>
                        </a>
                    </li>
                </ul>
            </section>

            <section className={styles["ft-legal"]}>
                <ul className={`${styles["ft-legal-list"]} ${styles["ft-ul"]}`}>
                    <li>
                        <a className={styles["ft-a"]} href="#">
                            Terms &amp; Conditions
                        </a>
                    </li>
                    <li>
                        <a className={styles["ft-a"]} href="#">
                            Privacy Policy
                        </a>
                    </li>
                    <li>&copy;Copyright PPIA</li>
                </ul>
            </section>
        </div>
    )
}

export default Footer
