import React from 'react';

import styles from './MainHighlights.module.css';

import { Container, Row, Col } from 'react-bootstrap/';

import ImageHeader from '../../../assets/images/exspor.png';

export default function MainHighlights() {
  return (
    <div className="bg-[#e9ecef] rounded-[5px]">
      <Container>
        <Row>
          <Col lg={6} sm={12}>
            <div>
              <img
                src={ImageHeader}
                className='w-full pt-[54px] justify-center align-center'
              />
            </div>
          </Col>

          <Col lg={6} sm={12}>
            <div className="text-center p-[50px] lg:!text-left">
              <a href='https://www.kemendag.go.id/berita/siaran-pers/jumpa-perhimpunan-pelajar-indonesia-di-australia-dan-selandia-baru-wamendag-jerry-dorong-para-pelajar-menjadi-duta-ekspor' className='text-lg' target="_blank">
                <b>Jumpa Perhimpunan Pelajar Indonesia di Australia dan Selandia Baru, Wamendag Jerry Dorong Para Pelajar Menjadi Duta Ekspor Indonesia</b>
              </a><br/><br/>
              <p>
                Wakil Menteri Perdagangan Jerry Sambuaga menyampaikan, Pemerintah mengapresiasi para pelajar Indonesia di Australia dan Selandia Baru yang terus membantu pemerintah mengenalkan produk Indonesia ke pasar luar negeri. 
              </p><br/>
              <p>
                Dalam acara Ngobrol Ekspor Bareng Bang Jerry Sambuaga dengan tema ‘Banjiri Produk Indo di Luar Negeri Bersama Perhimpunan Pelajar Indonesia (PPI)’ yang dilaksanakan secara hibrida di Australian National University oleh Atase Perdagangan Canberra Bersama PPI Australia dan PPI Selandia Baru di Canberra, Australia.
              </p><br/>
              <p>
                “Para pelajar sebagai diaspora Indonesia di Australia dan Selandia Baru merupakan aset potensial untuk  memperluas  pasar  produk Indonesia,mengingat  generasi  pelajar  saat  ini memiliki  peran strategis dalam membangun Indonesia Emas 2045” ungkap Wamendag.
              </p><br/>
              <h4>{/* <b>CREDITS TO @WILDWONDERINGWILLY</b> */}</h4>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
