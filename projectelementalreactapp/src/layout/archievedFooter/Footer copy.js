import React from "react"
// import "./Footer.css"
import styles from "./Footer.module.css"

function Footer() {
    return (
        <div className={styles["ft-body"]}>
            <section className={styles["ft-main"]}>
                <div className={styles["ft-main-item"]}>
                    <h2 className={styles["ft-title"]}>About</h2>
                    <ul className={styles["ft-ul"]}>
                        <li>
                            <a className={styles["ft-a"]} href="#">
                                PPIA
                            </a>
                        </li>
                        <li>
                            <a className={styles["ft-a"]} href="#">
                                The Biggest Overseas
                            </a>
                        </li>
                        <li>
                            <a className={styles["ft-a"]} href="#">
                                Indonesia Student
                            </a>
                        </li>
                        <li>
                            <a className={styles["ft-a"]} href="#">
                                Association
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={styles["ft-main-item"]}>
                    <h2 className={styles["ft-title"]}>Useful Links</h2>
                    <ul className={styles["ft-ul"]}>
                        <li>
                            <a className={styles["ft-a"]} href="#">
                                Kabinet Impact 2021 - 2022
                            </a>
                        </li>
                        <li>
                            <a className={styles["ft-a"]} href="#">
                                AD / ART
                            </a>
                        </li>
                        <li>
                            <a className={styles["ft-a"]} href="#">
                                Konsulat Indonesia
                            </a>
                        </li>
                        <li>
                            <a className={styles["ft-a"]} href="#">
                                Events
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={styles["ft-main-item"]}>
                    <h2 className={styles["ft-title"]}>Contact</h2>
                    <ul className={styles["ft-ul"]}>
                        <li>
                            <a className={styles["ft-a"]} href="#">
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
                        <a href="#">
                            <i class="fab fa-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fab fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fab fa-instagram"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fab fa-github"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fab fa-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
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
