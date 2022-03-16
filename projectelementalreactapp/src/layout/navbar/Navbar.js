import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import DropdownChapter from './DropdownChapter';
import DropdownOpportunities from './DropdownOpportunities';

function Navbar() {
  const [click, setclick] = useState(false);
  const [opportunitiesDropdown, setDropdownOpportunities] = useState(false);
  const [chapterDropdown, setChapterDropdown] = useState(false);

  const handleClick = () => setclick(!click);
  const closeMobileMenu = () => setclick(false);

  const onMouseEnterOpportunities = () => {
    if (window.innerWidth < 960) {
      setDropdownOpportunities(false);
    } else {
      setDropdownOpportunities(true);
    }
  };
  const onMouseEnterChapter = () => {
    if (window.innerWidth < 960) {
      setChapterDropdown(false);
    } else {
      setChapterDropdown(true);
    }
  };
  const onMouseLeaveChapter = () => {
    if (window.innerWidth < 960) {
      setChapterDropdown(false);
    } else {
      setChapterDropdown(false);
    }
  };

  const onMouseLeaveOpportunities = () => {
    if (window.innerWidth < 960) {
      setDropdownOpportunities(false);
    } else {
      setDropdownOpportunities(false);
    }
  };

  return (
    <>
      <nav className={styles.navbar}>
        <Link to="/" className={styles['navbar-logo']}>
          <img
            src={`https://chapterslogo.s3.us-east-2.amazonaws.com/PPIA.png`}
            alt="PPIA logo"
            className={styles.ppiaLogo}
          />
        </Link>
        <div className={styles['menu-icon']} onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul
          className={
            click
              ? `${styles['nav-menu']} ${styles.active}`
              : `${styles['nav-menu']}`
          }
        >
          <li className={styles['nav-item']}>
            <Link
              to=""
              className={styles['nav-links']}
              onClick={closeMobileMenu}
            >
              Home
            </Link>
          </li>
          <li className={styles['nav-item']}>
            <Link
              to="/about"
              className={styles['nav-links']}
              onClick={closeMobileMenu}
            >
              About Us
            </Link>
          </li>
          <li
            className={styles['nav-item']}
            onMouseEnter={onMouseEnterChapter}
            onMouseLeave={onMouseLeaveChapter}
          >
            {/* changed from "Link" to "p" to prevent redirect to /chapter/ */}
            <div className={styles['nav-links']} onClick={closeMobileMenu}>
              <Link
                to="/chapter/all"
                className={styles['nav-links']}
                onClick={closeMobileMenu}
              >
                Chapters <i className="fas fa-caret-down" />
              </Link>
              {chapterDropdown && <DropdownChapter />}
            </div>
          </li>
          <li className={styles['nav-item']}>
            <Link
              to="/liveinoz"
              className={styles['nav-links']}
              onClick={closeMobileMenu}
            >
              Live in OZ
            </Link>
          </li>
          <li className={styles['nav-item']}>
            <Link
              to="/blog"
              className={styles['nav-links']}
              onClick={closeMobileMenu}
            >
              Blog
            </Link>
          </li>
          <li className={styles['nav-item']}>
            <Link
              to="/contact"
              className={styles['nav-links']}
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </li>
          <li
            className={styles['nav-item']}
            onMouseEnter={onMouseEnterOpportunities}
            onMouseLeave={onMouseLeaveOpportunities}
          >
            <div className={styles['nav-links']} onClick={closeMobileMenu}>
              <Link
                to="/opportunities"
                className={styles['nav-links']}
                onClick={closeMobileMenu}
              >
                Opportunities <i className="fas fa-caret-down" />
              </Link>
              {opportunitiesDropdown && <DropdownOpportunities />}
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;

//className="(\w*-\w*)"
//className={styles['$1']}
