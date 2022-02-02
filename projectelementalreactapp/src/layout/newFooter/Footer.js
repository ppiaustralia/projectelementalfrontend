import React from "react"
// import "./Footer.css"
import styles from "./Footer.module.css"

import {Container, Row, Col} from "react-bootstrap/"

function Footer() {
    return (
        <div className={styles["ft-body"]}>
            <Container>
                <Row>
                    <Col lg={2} className={styles["ft-PPIA"]}>
                        <h2>PPI AUSTRALIA</h2>
                        <h2>(PPIA)</h2>
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
                                            <a className={styles["ft-a"]} href="#">
                                                Impact Cabinet 2021/22
                                            </a>
                                        </li>
                                        <li>
                                            <a className={styles["ft-a"]} href="#">
                                                AD / ART
                                            </a>
                                        </li>
                                        <li>
                                            <a className={styles["ft-a"]} href="#">
                                                Indonesia Consulate
                                            </a>
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
