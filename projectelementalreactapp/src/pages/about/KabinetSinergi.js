import React, { Component } from "react"
import {
    Carousel,
    Container,
    Row,
    Col,
    Image,
    CardGroup,
    Card,
    Button,
} from "react-bootstrap/"
import ReactDOM from "react-dom"
import styles from "./KabinetSinergi.module.css"

import "../home/Home.css"

import dummy1 from "../../assets/images/cat.jpg"
import dummy2 from "../../assets/images/cat2.jpg"
import dummy3 from "../../assets/images/cat3.jpg"

const image_arr = [
    <img
        className="d-block mx-auto responsive-carousel img-fluid"
        src={dummy1}
    />,
    <img
        className="d-block mx-auto responsive-carousel img-fluid"
        src={dummy2}
    />,
    <img
        className="d-block mx-auto responsive-carousel img-fluid"
        src={dummy3}
    />,
]

const source_arr = [
    {
        img: dummy1,
        name: "cat1",
        position: 'IT Officer',
        university: 'University of New South Wales'
    },
    {
        img: dummy2,
        name: "cat2",
        position: 'Community Welfare Officer',
        university: 'University of Sydney'
    },
    {
        img: dummy3,
        name: "cat3",
        position: 'IT Officer',
        university: 'University of Melbourne'
    },
    {
        img: dummy1,
        name: "cat4",
        position: 'IT Officer',
        university: 'University of Technology Sydney'
    },
]

export default function KabinetSinergi() {
    return (
        <div>
            <h1 className={styles.heading1}>Our Committee</h1>
            <Carousel className="carousel-dark" width="50vw">
                <Carousel.Item>
                    <Division />
                </Carousel.Item>
                <Carousel.Item>
                    <Division />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export function Division() {
    return (
        <div className={styles.container}>
            <div className={styles.divisionContainer}>
                <h3>Information Technology</h3>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className={styles.cardContainer}>
                {
                    source_arr.map(member => {
                        return <MemberCard member={member}/>
                    })
                }
            </div>
        </div>
    )
}

export function MemberCard({member}) {
    return (
        <Card className={`${styles.memberCard} px-4 py-2`}>
            <Image src={source_arr[0].img} className={`${styles.cardImage} fluid me-4 my-2`} roundedCircle />
            <Card.Body className={`ps-0`}>
                <Card.Title>{member.name}</Card.Title>
                <Card.Subtitle>{member.position}</Card.Subtitle>
                <Card.Text>{member.university}</Card.Text>
            </Card.Body>
        </Card>
    )
}

// export function ImageGallery() {
//     return (
//         <div className={styles["main-section"]}>
//             <div className={styles["wrapper"]}>
//                 <div className={styles["row"]}>
//                     <div className={styles["column"]}></div>
//                     <div className={styles["double-column"]}>
//                         <div className={styles["front-page"]}>
//                             <div className={styles["mt-5"]}>
//                                 <h3>Information Technology</h3>
//                             </div>
//                             <div className={styles["img-gallery"]}>
//                                 <Container>
//                                     <Row className={styles["-center"]}>
//                                         {source_arr.map((kabinet, i) => (
//                                             <Col md={3}>
//                                                 <Image
//                                                     src={kabinet.img}
//                                                     className={`d-block responsive-gallery img-fluid mx-4`}
//                                                     roundedCircle
//                                                 />
//                                                 <h5>{kabinet.name} yo</h5>
//                                             </Col>
//                                         ))}
//                                     </Row>
//                                 </Container>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
