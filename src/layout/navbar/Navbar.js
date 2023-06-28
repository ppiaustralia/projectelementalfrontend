import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import DropdownChapter from "./DropdownChapter";
import DropdownOpportunities from "./DropdownOpportunities";

function Navbar() {
  const [click, setClick] = useState(false);
  const [opportunitiesDropdown, setDropdownOpportunities] = useState(false);
  const [chapterDropdown, setChapterDropdown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  const onMouseEnterOpportunities = () => {
    if (!isMobile) {
      setDropdownOpportunities(true);
    }
  };

  const onMouseEnterChapter = () => {
    if (!isMobile) {
      setChapterDropdown(true);
    }
  };

  const onMouseLeaveChapter = () => {
    if (!isMobile) {
      setChapterDropdown(false);
    }
  };

  const onMouseLeaveOpportunities = () => {
    if (!isMobile) {
      setDropdownOpportunities(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 960);
    };

    handleResize(); // Check initial width on component mount

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <nav
        className={`${styles.navbar} bg-primaryRed h-24 flex justify-around items-center font-lg sticky top-0 z-20`}
      >
        <div>
          <Link to="/alpha/" className={styles["navbar-logo"]}>
            <img
              src={`https://chapterslogo.s3.us-east-2.amazonaws.com/PPIA-WHITE.png`}
              alt="PPIA logo"
              className={styles.ppiaLogo}
            />
          </Link>
        </div>
        {isMobile ? (
          <div
            className={`${styles["menu-icon"]} ${click ? styles.active : ""}`}
            onClick={handleClick}
          >
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
        ) : null}
        <ul
          className={`${styles["nav-menu"]} ${
            isMobile ? (click ? styles.active : "") : ""
          }`}
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
            <div className={styles["nav-links"]} onClick={closeMobileMenu}>
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
  );
}

export default Navbar;
