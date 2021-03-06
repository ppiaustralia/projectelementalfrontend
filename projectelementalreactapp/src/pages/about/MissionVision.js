import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
  margin: 10rem auto 0 auto;
  width: 60%;

  .heading--main {
    text-align: left
    ;
  }
  .row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }
  
  .column {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
  }
  .double-column {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 3;
  }
  .ul {
    margin: 0;
    padding: 0;
  }
  .li {
    list-style: none;
  }
  .li a {
    font-size: 18px;
    text-decoration: none;
    padding: 10px;
    display: block;
    color: #000000;
  }
`;

const MissionVision = () => {
    return (
      <StyledSection className="About Us">
        <div class='wrapper'>
          <div class = 'row'>
            <div class = 'column'>
            <ul>
        <li>
        <h2 className="heading--main">About Us</h2>
        </li>
        <li>
        <h2 className="heading--main">Vision</h2>
        </li>
        <li>
        <h2 className="heading--main">Mission</h2>
        </li>
        <li>
        <h2 className="heading--main">Kabinet Sinergi 2020/2021</h2>
        </li>
        <li>
        <h2 className="heading--main">AD / ART</h2>
        </li>
      </ul>
            </div>
            <div class = 'double-column'>
        <div className="block_text">
          <div className="aboutUs_info">
            <h1 className="heading--main">About Us</h1>
            <p>
            Perhimpunan Pelajar Indonesia Australia (PPIA) or Indonesian Students’ Association of Australia has been established on March 13, 1981 in Canberra, Australian Capital Territory.
            As one of the most prominent Indonesian student organisation in Australia, it has purpose to serve and unite Indonesian students across Australia. 
            Moreover, PPIA is a medium of communication and interaction for all Indonesian students across Australia. 
            The goals are to establish a strong sense of fellowship among Indonesian students and gives contribution to the nation in terms of cultural recognition as a foreign community.
            PPIA comprises of 8 state-level organisations (PPIA Chapters) and 33 university-level organisations (PPIA Branches). 
            PPIA represents the interests and caters for the needs of all Indonesia students.
            For the success of its activities, PPIA is affiliated with the Embassy of the Republic of Indonesia and the Consulate General of the Republic of Indonesia along with the cooperation of the Indonesian community. 
            Thus, PPIA becomes an organisation that has a large exposure to the wider community in Australia, be it Indonesians, locals and other international communities.
            </p>
          </div>
        </div>

        <div className="block_text">
          <div className="vision_info">
            <h1 className="heading--main">Vision</h1>
            <p>
            Mewujudkan Perhimpunan Pelajar Indonesia-Australia (PPIA) sebagai organisasi yang berkontribusi membangun generasi muda Indonesia yang peduli, mandiri, kreatif dan inovatif untuk kemajuan bangsa dan negara.
            </p>
          </div>
        </div>

        <div className="block_text">
          <div className="mission_info">
            <h1 className="heading--main">Mission</h1>
            <p>
            Membangun rasa kepedulian dan kontribusi positif kepada masyarakat Indonesia di Australia terutama para mahasiswa.

            Membangun platform berasas kekeluargaan yang memberikan kesempatan bagi mahasiswa-mahasiswa Indonesia untuk memperluas koneksi mereka dari berbagai kota Australia.

            Mengembangkan sistem organisasi yang efisien dan peduli.
            </p>
          </div>
        </div>
        </div>
        </div>
        </div>
      </StyledSection>
    );
  };
  
  export default MissionVision;