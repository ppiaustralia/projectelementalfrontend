import styles from "./Footer.module.css"
import React, { useState } from "react"
import { Link } from "react-router-dom"

function Footer() {
    return (
        <div className={styles["ft-body"]}>
            <section className={styles["ft-main"]}>
                <div className={styles["ft-main-item"]}>
                    <h2 className={styles["ft-title"]}>About</h2>
                    <ul className={styles["ft-ul"]}>
                        <li>
                            <Link to="/about" className={styles["ft-link"]}>
                                PPIA The Biggest Overseas
                                <br />
                                Indonesia Student Association
                            </Link>
                        </li>
                    </ul>
                    <Link to="/" className={styles["ft-logo"]}>
                        <img
                            src={`https://chapterslogo.s3.us-east-2.amazonaws.com/PPIA.png`}
                            alt="PPIA logo"
                            className={styles.ppiaLogo}
                        />
                    </Link>
                </div>
                <div className={styles["ft-main-item"]}>
                    <h2 className={styles["ft-title"]}>Useful Links</h2>
                    <div className={styles["ft-main-content"]}>
                        <ul className={styles["ft-ul"]}>
                            <li>
                                <Link to="/about" className={styles["ft-link"]}>
                                    Kabinet PPIA 2021-2022
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className={styles["ft-link"]}>
                                    AD/ART
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    className={styles["ft-link"]}
                                >
                                    Konsulat Indonesia
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className={styles["ft-link"]}>
                                    Events
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles["ft-main-item"]}>
                    <h2 className={styles["ft-title"]}>Contact</h2>
                    <div className={styles["ft-main-content"]}>
                        <ul className={styles["ft-ul"]}>
                            <li>
                                <Link
                                    to="/contact"
                                    className={styles["ft-link"]}
                                >
                                    Help
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className={styles["ft-link"]}>
                                    Sponsor
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className={styles["ft-link"]}>
                                    Advertise
                                </Link>
                            </li>
                        </ul>
                    </div>
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
