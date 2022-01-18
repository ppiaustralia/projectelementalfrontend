import React from "react"
import { Link } from "react-router-dom"
import { news_data } from "../database_home"
import styles from "./NewsCards.module.css"
import { Card, Button, CardDeck } from "react-bootstrap/"
import { useSelector } from "react-redux"

export default function NewsCards() {
    const news = useSelector((state) => state.news.news)
    const loading = useSelector((state) => state.news.loading)
    return (
        <div
            className={`${styles.background} ${styles["front-page"]} ${styles.news}`}
        >
            <div className={styles["news-title"]}>
                <h4>Latest Updates</h4>
            </div>

            <div className={styles["news-cards"]}>
                <CardDeck style={{ display: "flex", flexDirection: "row" }}>
                    {news_data.map((news, i) => (
                        <div>
                            <Card
                                style={{
                                    width: "18rem",
                                    flex: 1,
                                    maxWidth: "90%",
                                }}
                            >
                                <Link to={news.pathname}>
                                    <Card.Img
                                        variant="top"
                                        src={news.img}
                                        className={styles["card-img"]}
                                    />
                                </Link>

                                <Card.Body>
                                    <Card.Title>{news.title}</Card.Title>
                                    <Card.Subtitle>{news.date}</Card.Subtitle>
                                    <Card.Text>{news.desc}</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </CardDeck>
            </div>

            <Link to="/blog">
                <Button variant="news" style={{ width: "116px" }}>
                    Read More
                </Button>
            </Link>
        </div>
    )
}
