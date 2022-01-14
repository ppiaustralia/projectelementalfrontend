import React from "react"
import styles from "./MissionVision.module.css"
import styled from "styled-components"
import SideButton from "./SideButton"
import SideMenu from "./SideMenu"

const MissionVision = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading1}>About Us</h1>
            <div className={styles.aboutCont}>
                <p>
                    Perhimpunan Pelajar Indonesia Australia
                    (PPIA) or Indonesian Students’ Association
                    of Australia has been established on March
                    13, 1981 in Canberra, Australian Capital
                    Territory. As one of the most prominent
                    Indonesian student organisation in
                    Australia, it has purpose to serve and unite
                    Indonesian students across Australia.
                    Moreover, PPIA is a medium of communication
                    and interaction for all Indonesian students
                    across Australia. The goals are to establish
                    a strong sense of fellowship among
                    Indonesian students and gives contribution
                    to the nation in terms of cultural
                    recognition as a foreign community.
                </p>
                <p>
                    PPIA comprises of 8 state-level organisations
                    (PPIA Chapters) and 33 university-level
                    organisations (PPIA Branches). PPIA
                    represents the interests and caters for the
                    needs of all Indonesia students. For the
                    success of its activities, PPIA is
                    affiliated with the Embassy of the Republic
                    of Indonesia and the Consulate General of
                    the Republic of Indonesia along with the
                    cooperation of the Indonesian community.
                    Thus, PPIA becomes an organisation that has
                    a large exposure to the wider community in
                    Australia, be it Indonesians, locals and
                    other international communities.
                </p>
            </div>
        </div>
    );
}

// const MissionVision = () => {
//     return (
//         <section className={styles["main-section"]}>
//             <div className={styles["wrapper"]}>
//                 <div className={styles["row"]}>
//                     <div className={styles["column"]}>
//                         <SideMenu />
//                     </div>
//                     <div className={styles["double-column"]}>
//                         <div className={styles["block_text"]}>
//                             <div className={styles["aboutUs_info"]}>
//                                 <h1 className={styles["heading--main"]}>
//                                     About Us
//                                 </h1>
                                // <p>
                                //     Perhimpunan Pelajar Indonesia Australia
                                //     (PPIA) or Indonesian Students’ Association
                                //     of Australia has been established on March
                                //     13, 1981 in Canberra, Australian Capital
                                //     Territory. As one of the most prominent
                                //     Indonesian student organisation in
                                //     Australia, it has purpose to serve and unite
                                //     Indonesian students across Australia.
                                //     Moreover, PPIA is a medium of communication
                                //     and interaction for all Indonesian students
                                //     across Australia. The goals are to establish
                                //     a strong sense of fellowship among
                                //     Indonesian students and gives contribution
                                //     to the nation in terms of cultural
                                //     recognition as a foreign community. PPIA
                                //     comprises of 8 state-level organisations
                                //     (PPIA Chapters) and 33 university-level
                                //     organisations (PPIA Branches). PPIA
                                //     represents the interests and caters for the
                                //     needs of all Indonesia students. For the
                                //     success of its activities, PPIA is
                                //     affiliated with the Embassy of the Republic
                                //     of Indonesia and the Consulate General of
                                //     the Republic of Indonesia along with the
                                //     cooperation of the Indonesian community.
                                //     Thus, PPIA becomes an organisation that has
                                //     a large exposure to the wider community in
                                //     Australia, be it Indonesians, locals and
                                //     other international communities.
                                // </p>
//                             </div>
//                         </div>

//                         <div className={styles["block_text"]}>
//                             <div className={styles["vision_info"]}>
//                                 <h1 className={styles["heading--main"]}>
//                                     Vision
//                                 </h1>
//                                 <p>
//                                     Mewujudkan Perhimpunan Pelajar
//                                     Indonesia-Australia (PPIA) sebagai
//                                     organisasi yang berkontribusi membangun
//                                     generasi muda Indonesia yang peduli,
//                                     mandiri, kreatif dan inovatif untuk kemajuan
//                                     bangsa dan negara.
//                                 </p>
//                             </div>
//                         </div>

//                         <div className={styles["block_text"]}>
//                             <div className={styles["mission_info"]}>
//                                 <h1 className={styles["heading--main"]}>
//                                     Mission
//                                 </h1>
//                                 <p>
//                                     Membangun rasa kepedulian dan kontribusi
//                                     positif kepada masyarakat Indonesia di
//                                     Australia terutama para mahasiswa. Membangun
//                                     platform berasas kekeluargaan yang
//                                     memberikan kesempatan bagi
//                                     mahasiswa-mahasiswa Indonesia untuk
//                                     memperluas koneksi mereka dari berbagai kota
//                                     Australia. Mengembangkan sistem organisasi
//                                     yang efisien dan peduli.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

export default MissionVision
