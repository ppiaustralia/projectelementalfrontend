import React from "react"
import styles from "./Twigs.module.css"
import { Image } from "react-bootstrap"

function Twigs(data) {
    const chBaseLink = data.chBaseLink
    return (
        <>
            {data.data.map((element) => {
                const {
                    ppia_id,
                    name,
                    president,
                    state,
                    level,
                    image,
                    parent,
                    details,
                    is_deleted,
                    others,
                } = element
                return (
                    <div className={`${styles["twig"]}`}>
                        <div className={styles.imageContainer}>
                            <Image
                                src={`${chBaseLink}${image}`}
                                className={styles.logo}
                            />
                        </div>
                        <div className={styles.infoContainer}>
                            <h2>{name} </h2>
                            <p>{parent}</p>
                            <p>President: {president}</p>
                            <p>Parent: {parent}</p>
                            <p>State: {state}</p>
                        </div>
                    </div>
                )
            })}
        </>
    )
}
export default Twigs
