import React, { useState } from "react";
import MenuItems from "./MenuItems";
import { Link } from "react-router-dom";
import styles from  "./Dropdown.module.css";
import Chapter from "../../pages/chapter/Chapter.jsx";

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? `${styles.dropdownMenu} ${styles.clicked}` : `${styles.dropdownMenu}`}
      >
        {MenuItems.map((item, index) => {
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

export default Dropdown;
