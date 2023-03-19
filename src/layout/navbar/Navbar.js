import React, { useState } from "react"
import { Link } from "react-router-dom"
import styles from "./Navbar.module.css"
import DropdownChapter from "./DropdownChapter"
import DropdownOpportunities from "./DropdownOpportunities"

function Navbar() {
    const [click, setclick] = useState(false)
    const [opportunitiesDropdown, setDropdownOpportunities] = useState(false)
    const [chapterDropdown, setChapterDropdown] = useState(false)

    const handleClick = () => setclick(!click)
    const closeMobileMenu = () => setclick(false)

    const onMouseEnterOpportunities = () => {
        if (window.innerWidth < 960) {
            setDropdownOpportunities(false)
        } else {
            setDropdownOpportunities(true)
        }
    }
    const onMouseEnterChapter = () => {
        if (window.innerWidth < 960) {
            setChapterDropdown(false)
        } else {
            setChapterDropdown(true)
        }
    }
    const onMouseLeaveChapter = () => {
        if (window.innerWidth < 960) {
            setChapterDropdown(false)
        } else {
            setChapterDropdown(false)
        }
    }

    const onMouseLeaveOpportunities = () => {
        if (window.innerWidth < 960) {
            setDropdownOpportunities(false)
        } else {
            setDropdownOpportunities(false)
        }
    }

    return (
        <>
            <nav className='bg-primaryRed h-24 flex justify-around items-cener font-lg sticky top-0 z-20'>
                <div>
                    <Link to="/alpha/" className={styles["navbar-logo"]}>
                        <img
                            src={`https://chapterslogo.s3.us-east-2.amazonaws.com/PPIA-WHITE.png`}
                            alt="PPIA logo"
                            className={styles.ppiaLogo}
                        />
                    </Link>
                </div>
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
                            to="/alpha"
                            className={styles["nav-links"]}
                            onClick={closeMobileMenu}
                        >
                            Home
                        </Link>
                    </li>
                    <li className={styles["nav-item"]}>
                        <Link
                            to="/alpha/about"
                            className={styles["nav-links"]}
                            onClick={closeMobileMenu}
                        >
                            About Us
                        </Link>
                    </li>
                    <li
                        className={styles["nav-item"]}
                        onMouseEnter={onMouseEnterChapter}
                        onMouseLeave={onMouseLeaveChapter}
                    >
                        {/* changed from "Link" to "p" to prevent redirect to /chapter/ */}
                        <div
                            className={styles["nav-links"]}
                            onClick={closeMobileMenu}
                        >
                            <Link
                                to="/alpha/chapter/all"
                                className={styles["nav-links"]}
                                onClick={closeMobileMenu}
                            >
                                Chapters <i className="fas fa-caret-down" />
                            </Link>
                            {chapterDropdown && <DropdownChapter />}
                        </div>
                    </li>
                    <li className={styles["nav-item"]}>
                        <Link
                            to="/alpha/liveinoz"
                            className={styles["nav-links"]}
                            onClick={closeMobileMenu}
                        >
                            Live in OZ
                        </Link>
                    </li>
                    <li className={styles["nav-item"]}>
                        <Link
                            to="/alpha/blog"
                            className={styles["nav-links"]}
                            onClick={closeMobileMenu}
                        >
                            Blog
                        </Link>
                    </li>
                    <li className={styles["nav-item"]}>
                        <Link
                            to="/alpha/contact"
                            className={styles["nav-links"]}
                            onClick={closeMobileMenu}
                        >
                            Contact
                        </Link>
                    </li>
                    {/* <li
            className={styles['nav-item']}
            onMouseEnter={onMouseEnterOpportunities}
            onMouseLeave={onMouseLeaveOpportunities}
          >
            <div className={styles['nav-links']} onClick={closeMobileMenu}>
              <Link
                to="/alpha/opportunities"
                className={styles['nav-links']}
                onClick={closeMobileMenu}
              >
                Opportunities <i className="fas fa-caret-down" />
              </Link>
              {opportunitiesDropdown && <DropdownOpportunities />}
            </div>
          </li> */}
                </ul>
            </nav>
        </>
    )
}

export default Navbar

//className="(\w*-\w*)"
//className={styles['$1']}
