import React, { useState } from "react"
import { Link } from "react-router-dom"
import styles from "./Navbar.module.css"
import Dropdown from "./Dropdown"

function Navbar() {
    const [click, setclick] = useState(false)
    const [dropdown, setDropdown] = useState(false)

    const handleClick = () => setclick(!click)
    const closeMobileMenu = () => setclick(false)

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(true)
        }
    }

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(false)
        }
    }

    return (
        <>
            <nav className={styles.navbar}>
                <Link to="/" className={styles["navbar-logo"]}>
                    <img
                        src={`https://chapterslogo.s3.us-east-2.amazonaws.com/PPIA.png`}
                        alt="PPIA logo"
                        className={styles.ppiaLogo}
                    />
                </Link>
                <div className={styles["menu-icon"]} onClick={handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"} />
                </div>
                <ul
                    className={
                        click
                            ? `${styles["nav-menu"]} ${styles.active}`
                            : `${styles["nav-menu"]}`
                    }
                >
                    <li className={styles["nav-item"]}>
                        <Link
                            to="/"
                            className={styles["nav-links"]}
                            onClick={closeMobileMenu}
                        >
                            Home
                        </Link>
                    </li>
                    <li className={styles["nav-item"]}>
                        <Link
                            to="/about"
                            className={styles["nav-links"]}
                            onClick={closeMobileMenu}
                        >
                            About Us
                        </Link>
                    </li>
                    <li
                        className={styles["nav-item"]}
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        {/* changed from "Link" to "p" to prevent redirect to /chapter/ */}
                        <div
                            className={styles["nav-links"]}
                            onClick={closeMobileMenu}
                        >
                            <Link
                                to="/chapter/all"
                                className={styles["nav-links"]}
                                onClick={closeMobileMenu}
                            >
                                Chapters <i className="fas fa-caret-down" />
                            </Link>
                            {dropdown && <Dropdown />}
                        </div>
                    </li>
                    <li className={styles["nav-item"]}>
                        <Link
                            to="/liveinoz"
                            className={styles["nav-links"]}
                            onClick={closeMobileMenu}
                        >
                            Live in OZ
                        </Link>
                    </li>
                    <li className={styles["nav-item"]}>
                        <Link
                            to="/blog"
                            className={styles["nav-links"]}
                            onClick={closeMobileMenu}
                        >
                            Blog
                        </Link>
                    </li>
                    <li className={styles["nav-item"]}>
                        <Link
                            to="/contact"
                            className={styles["nav-links"]}
                            onClick={closeMobileMenu}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar

//className="(\w*-\w*)"
//className={styles['$1']}
