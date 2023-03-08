import React from 'react';
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap/"
import styles from "./Liveinoz.module.css"

const MAX_CHR = 300

export default function Entry({entry}) {
  return (
    <div>
        <div className={styles["page-content"]}>
            <img
                src={entry.img}
                className={styles["entry-thumb"]}
                alt="missing"
            />
            <div className={styles["entry-text"]}>
                <h3 className={styles["object-title"]}>
                    {entry.title}
                </h3>
                <p className={styles["object-desc"]}>
                    {entry.description.slice(0, MAX_CHR)}
                </p>
                <Link to={entry}>
                    <Button variant="news" style={{ width: "155px" }}>
                        Continue Reading
                    </Button>
                </Link>
            </div>
        </div>
        <div className={styles["share-icons"]}>
            <i className="fas fa-share-alt-square" />
            <i className="fab fa-facebook-square" />
            <i className="fab fa-instagram-square" />
            <i className="fab fa-youtube-square" />
            <i className="fab fa-twitter-square" />
        </div>
    </div>
  );
}