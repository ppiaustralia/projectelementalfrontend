import React, { Component, useEffect, useState } from "react"
import {
    Carousel,
    Container,
    Row,
    Col,
    Image,
    CardGroup,
    Card,
    Button,
} from "react-bootstrap"
import axios from "axios"
import styles from "./KabinetSinergi.module.css"

import "../home/Home.css"

import dummy1 from "../../assets/images/cat.jpg"
import dummy2 from "../../assets/images/cat2.jpg"
import dummy3 from "../../assets/images/cat3.jpg"
import Loading from "../../components/Loading"

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
        position: "IT Officer",
        university: "University of New South Wales",
    },
    {
        img: dummy2,
        name: "cat2",
        position: "Community Welfare Officer",
        university: "University of Sydney",
    },
    {
        img: dummy3,
        name: "cat3",
        position: "IT Officer",
        university: "University of Melbourne",
    },
    {
        img: dummy1,
        name: "cat4",
        position: "IT Officer",
        university: "University of Technology Sydney",
    },
]

const execToObj = (array) => {
    let execObj = new Object()
    execObj.name = "Executive"
    for (let x of array) {
        execObj[x.role] = new Object()
        execObj[x.role].name = x.name
        execObj[x.role].image = x.image
    }
    return execObj
}
const oneDeptToObj = (array) => {
    let deptObj = new Object()
    //set name field for each dept
    deptObj.name = array[0].department
    //will be an array of objects ( one commiittee one object)
    let commArr = []
    for (let x of array) {
        if (x.role == "Committee") {
            let comObj = new Object()
            comObj.name = x.name
            comObj.image = x.image
            commArr.push(comObj)
        } else {
            deptObj[x.role] = new Object()
            deptObj[x.role].name = x.name
            deptObj[x.role].image = x.image
        }
    }
    deptObj.Committee = commArr
    return deptObj
}

const iterateAllDept = (deptList, dataArr) => {
    let final = []
    deptList.map((eachDept) => {
        const memberDepArr = dataArr.filter(
            (item) => item.department === eachDept
        )
        const deptInObj = oneDeptToObj(memberDepArr)
        final.push(deptInObj)
    })
    return final
}

const getAllDept = async () => {
    let deptList = []
    await axios
        .get("https://ppia-backend.herokuapp.com/user/committee/")
        .then((data) => {
            //create Exec object
            const execArr = data.data.filter(
                (item) => item.department == "Executive Committee"
            )
            let execObj = execToObj(execArr)
            //Each available dept
            data.data.map((ea) => {
                if (
                    !deptList.includes(ea.department) &&
                    ea.department !== "Executive Committee"
                ) {
                    deptList.push(ea.department)
                }
            })
            deptList = iterateAllDept(deptList, data.data)
            //need to add exec to the front
            deptList.unshift(execObj)
            console.log(deptList)
        })
    return deptList
}

export default function KabinetSinergi() {
    const [deptList, setDeptList] = useState([])

    useEffect(() => {
        async function fetchCommittee() {
            let response = await getAllDept()
            setDeptList(response)
            console.log("dept list")
        }

        fetchCommittee()
    }, [])

    return (
        <div>
            <h1 className={styles.heading1}>Our Committee</h1>
            <Carousel className="carousel-dark">
                {deptList.length >= 1 ? (
                    deptList.map((eachDept, idx) => {
                        console.log(eachDept)
                        return (
                            <Carousel.Item key={idx}>
                                <Division deptData={eachDept} />
                            </Carousel.Item>
                        )
                    })
                ) : (
                    <div>loading</div>
                )}
            </Carousel>
        </div>
    )
}

export function Division(props) {
    return (
        <div className={styles.container}>
            <div className={styles.divisionContainer}>
                <h3>{props.deptData.name}</h3>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className={styles.cardContainer}>
                {/* {source_arr.map((member) => {
                    return <MemberCard member={member} />
                })} */}
            </div>
        </div>
    )
}
export function Division1() {
    return (
        <div className={styles.container}>
            <div className={styles.divisionContainer}>
                <h3>Not tech info</h3>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className={styles.cardContainer}>
                {source_arr.map((member) => {
                    return <MemberCard member={member} />
                })}
            </div>
        </div>
    )
}

export function MemberCard({ member }) {
    return (
        <Card className={`${styles.memberCard} px-4 py-2`}>
            <Image
                src={source_arr[0].img}
                className={`${styles.cardImage} fluid me-4 my-2`}
                roundedCircle
            />
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
