import React, { useState } from 'react';
import MenuScholarship from './MenuScholarship';
import { Link } from 'react-router-dom';
import styles from './Dropdown.module.css';
// import Chapter from "../../pages/chapter/Chapter.jsx";

function DropdownScholarship() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <ul
        onClick={handleClick}
        className={
          click
            ? `${styles.dropdownMenu} ${styles.clicked}`
            : `${styles.dropdownMenu}`
        }
      >
        {MenuScholarship.map((item, index) => {
          const itemStyle = item.cName;
          return (
            <li key={index} className={styles.states}>
              <Link
                className={`${styles[itemStyle]}`}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default DropdownScholarship;
