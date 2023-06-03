import React from "react"
import styles from "./MissionVision.module.css"
import styled from "styled-components"
import SideButton from "./SideButton"
import SideMenu from "./SideMenu"

const MissionVision = () => {
    return (
        <div>
            
            <div className="mx-12 my-8 px-4 py-0">
                <h1 className="text-center text-[#ed1c24] mt-6">About Us</h1>
                <div className="flex flex-row justify-center m-6">
                    <img src="https://chapterslogo.s3.us-east-2.amazonaws.com/PPIA_ALL.jpg" className='max-w-[70%] max-h-[50%]' />
                </div>
                <div className="text-center my-0 mx-20 lg:mx-60">
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
            <div className="flex flex-col w-full text-[white] mb-20 md:flex-row">
                <div className="bg-[rgb(75,75,75)] w-full px-16 py-12">
                    <h1>VISION</h1>
                    Mewujudkan Perhimpunan Pelajar
                    Indonesia-Australia (PPIA) sebagai
                    organisasi yang berkontribusi membangun
                    generasi muda Indonesia yang peduli,
                    mandiri, kreatif dan inovatif untuk kemajuan
                    bangsa dan negara.
                </div>
                <div className="bg-[rgb(43,43,43)] w-full pt-12 pb-[3.7rem] px-16">
                    <h1>MISSION</h1>
                    Membangun rasa kepedulian dan kontribusi
                    positif kepada masyarakat Indonesia di
                    Australia terutama para mahasiswa. Membangun
                    platform berasas kekeluargaan yang
                    memberikan kesempatan bagi
                    mahasiswa-mahasiswa Indonesia untuk
                    memperluas koneksi mereka dari berbagai kota
                    Australia. Mengembangkan sistem organisasi
                    yang efisien dan peduli.
                </div>
            </div>
        </div>
    );
}
export default MissionVision
