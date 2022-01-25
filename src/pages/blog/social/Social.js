import React from "react"
import s from "./Social.module.css"
function Social() {
    return (
        <div>
            <ul className={`${s.socialUl} ${s.socialList}`}>
                <li>
                    <a href="#">
                        <i className="fab fa-facebook"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="fab fa-twitter"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="fab fa-instagram"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="fab fa-github"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="fab fa-youtube"></i>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Social
