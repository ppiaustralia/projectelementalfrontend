import React from "react"
// import "./Footer.css"
import { Link } from "react-router-dom"
import styles from "./Footer.module.css"

import {Container, Row, Col} from "react-bootstrap/"

function Footer() {
    return (
        <div className={styles["ft-body"]}>
            <Container>
                <Row>
                    <Col lg={2} className={styles["ft-PPIA"]}>
                        <Link to="/" className={styles["ft-logo"]}>
                            <img
                                src={`https://chapterslogo.s3.us-east-2.amazonaws.com/PPIA.png`}
                                alt="PPIA logo"
                                className={styles.ppiaLogo}
                            />
                         </Link>
                        <p>2010 - 2020</p>
                        <p>Privacy - Terms</p>   
                    </Col>
                    <Col lg={1}>
                        <div className={styles["ft-vertical"]}></div>
                    </Col>
                    <Col>
                        <section className={styles["ft-main"]}>
                                <div className={styles["ft-main-item"]}>
                                    <p className={styles["ft-title"]}><b>PPI-Apps</b></p>
                                    <ul className={styles["ft-ul"]}>
                                        <li>
                                            <a className={styles["ft-a"]} href="#">
                                                Apple App Store
                                            </a>
                                        </li>
                                        <li>
                                            <a className={styles["ft-a"]} href="#">
                                                Android Play Store
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className={styles["ft-main-item"]}>
                                    <p className={styles["ft-title"]}><b>Get To Know Us</b></p>
                                    <ul className={styles["ft-ul"]}>
                                    <li>
                                        <Link
                                            to = "/about"
                                            className={styles["ft-link"]}
                                            >
                                                Kabinet PPIA 2021-2022
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to = "/about"
                                            className={styles["ft-link"]}
                                        >
                                            AD/ART
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to = "/contact"
                                            className={styles["ft-link"]}
                                        >
                                            Konsulat Indonesia
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to = "/about"
                                            className={styles["ft-link"]}
                                        >
                                            Events
                                        </Link>
                                    </li>
                                    </ul>
                                </div>

                                <div className={styles["ft-main-item"]}>
                                    <p className={styles["ft-title"]}><b>Our Social Media</b></p>
                                    <Row>
                                        <Col>
                                            <ul className={styles["ft-ul"]}>
                                                <li>
                                                    <a className={styles["ft-a"]} href="#">
                                                        Facebook
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className={styles["ft-a"]} href="#">
                                                        Instagram
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className={styles["ft-a"]} href="#">
                                                        Youtube
                                                    </a>
                                                </li>
                                            </ul>
                                        </Col>

                                        <Col>
                                            <ul className={styles["ft-ul"]}>
                                                <li>
                                                    <a className={styles["ft-a"]} href="#">
                                                        Tik Tok
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className={styles["ft-a"]} href="#">
                                                        GitHub
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className={styles["ft-a"]} href="#">
                                                        Discord
                                                    </a>
                                                </li>
                                            </ul>
                                        </Col>
                                    </Row>
                                </div>
                        </section>
                    </Col>
                        
                </Row>
                <Row>
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
                </Row>
                <Row>
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
                </Row>
            </Container>
        </div>
    )
}

export default Footer
