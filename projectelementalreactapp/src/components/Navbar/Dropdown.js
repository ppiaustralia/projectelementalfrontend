import React, { useState } from "react";
import MenuItems from "./MenuItems";
import { Link } from "react-router-dom";
import "./Dropdown.css";
import Chapter from "../../pages/chapter/Chapter.jsx";

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
                {/* {<Chapter />} */}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
