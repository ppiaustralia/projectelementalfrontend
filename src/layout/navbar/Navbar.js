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
            <nav className='bg-primaryRed h-20 flex justify-around items-cener font-lg sticky top-0 z-20'>
                <div className={'flex justify-center items-center'}>
                    <Link to="/alpha/" className={styles["navbar-logo"]}>
                        <img
                            src={`https://chapterslogo.s3.us-east-2.amazonaws.com/PPIA-WHITE.png`}
                            alt="PPIA logo"
                            className={'cursor-pointer w-28 h-28'}
                        />
                    </Link>
                </div>
                <div className={styles["menu-icon"]} onClick={handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"} />
                </div>
                <ul
                    className={
                        click
                            ? `flex list-none text-center w-[75vw] justify-center items-center mr-4 mb-0 h-full bg-black left-0 opacity-100 z-50`
                            : `flex list-none text-center w-[75vw] justify-center items-center mr-4 mb-0 h-full`
                    }
                >
                    <li className={`flex justify-center pl-0 w-[18%] h-[50%] hover:bg-white hover:rounded-xl hover:text-primaryRed`}>
                        <Link
                            to="/alpha"
                            className={`flex w-full h-full items-center justify-center text-white decoration-none px-6 py-2 h-full hover:!text-primaryRed`}
                            onClick={closeMobileMenu}
                        >
                            Home
                        </Link>
                    </li>
                    <li className={`flex justify-center pl-0 w-[18%] h-[50%] hover:bg-white hover:rounded-xl hover:text-primaryRed`}>
                        <Link
                            to="/alpha/about"
                            className={`flex w-full h-full items-center justify-center text-white decoration-none px-6 py-2 h-full hover:!text-primaryRed`}
                            onClick={closeMobileMenu}
                        >
                            About Us
                        </Link>
                    </li>
                    <li
                        className={`flex justify-center pl-0 w-[18%] h-[50%] hover:bg-white hover:rounded-xl hover:text-primaryRed`}
                        onMouseEnter={onMouseEnterChapter}
                        onMouseLeave={onMouseLeaveChapter}
                    >
                        {/* changed from "Link" to "p" to prevent redirect to /chapter/ */}
                        <div
                            className={`flex items-center text-white decoration-none px-6 py-2 h-full hover:text-primaryRed`}
                            onClick={closeMobileMenu}
                        >
                            <Link
                                to="/alpha/chapter/all"
                                className={`flex w-full h-full items-center justify-center text-white decoration-none px-6 py-2 h-full hover:!text-primaryRed`}
                                onClick={closeMobileMenu}
                            >
                                Chapters <i className="fas fa-caret-down" />
                            </Link>
                            {chapterDropdown && <DropdownChapter />}
                        </div>
                    </li>
                    <li className={`flex justify-center pl-0 w-[18%] h-[50%] hover:bg-white hover:rounded-xl hover:text-primaryRed`}>
                        <Link
                            to="/alpha/liveinoz"
                            className={`flex w-full h-full items-center justify-center text-white decoration-none px-6 py-2 h-full hover:!text-primaryRed`}
                            onClick={closeMobileMenu}
                        >
                            Live in OZ
                        </Link>
                    </li>
                    <li className={`flex justify-center pl-0 w-[18%] h-[50%] hover:bg-white hover:rounded-xl hover:text-primaryRed`}>
                        <Link
                            to="/alpha/blog"
                            className={`flex w-full h-full items-center justify-center text-white decoration-none px-6 py-2 h-full hover:!text-primaryRed`}
                            onClick={closeMobileMenu}
                        >
                            Blog
                        </Link>
                    </li>
                    <li className={`flex justify-center pl-0 w-[18%] h-[50%] hover:bg-white hover:rounded-xl hover:text-primaryRed`}>
                        <Link
                            to="/alpha/contact"
                            className={`flex w-full h-full items-center justify-center text-white decoration-none px-6 py-2 h-full hover:!text-primaryRed`}
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
