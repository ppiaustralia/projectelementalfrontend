import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Row, Col } from 'react-bootstrap/';

function Footer() {
  return (
      <div className='w-full bg-primaryRed text-white flex flex-row justify-evenly'>
        <div className='firstcolumn p-4 pt-0 border-r-2 border-gray-400 w-full flex flex-col items-center pt-8'>
          <div className="flex flex-col mb-2">
            <img
                src={`https://chapterslogo.s3.us-east-2.amazonaws.com/PPIA-WHITE.png`}
                alt="PPIA logo"
                className='w-36 h-24 object-cover '
            />
          </div>
          <p className='text-white mb-2'>2010 - 2023</p>
          <ul className='list-none'>
            <li className='pl-0 mb-2'>
              <a
                  href="https://www.ppi-australia.org/privacy-policy/"
              >
                Terms &amp; Conditions
              </a>
            </li>
            <li className='pl-0 mb-2'>
              <a
                  href="https://www.ppi-australia.org/terms-and-conditions/"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div className='secondcolumn p-4 w-full'>
          <h2 className='text-white font-semibold mb-2'> Get to know us </h2>
          <ul className='list-none'>
            <li className='pl-0 mb-2 tex'>
              <Link to="/alpha/about" className='decoration-0 text-white '>
                Kabinet PPIA 2021-2022
              </Link>
            </li>
            <li className='pl-0 mb-2'>
              <Link to="/alpha/about" className='decoration-0 text-white'>
                AD/ART
              </Link>
            </li>
            <li className='pl-0 mb-2'>
              <Link to="/alpha/contact" className='decoration-0 text-white'>
                Konsulat Indonesia
              </Link>
            </li>
            <li className='pl-0 mb-2'>
              <Link to="/alpha/about" className='decoration-0 text-white'>
                Events
              </Link>
            </li>
          </ul>
        </div>
        <div className='thirdcolumn p-4 w-full'>
          <h2 className='text-white font-semibold mb-2'> Important Link </h2>
          <ul className='list-none'>
            <li className='pl-0 mb-2'>
              <Link to="/alpha/contact" className='decoration-0 text-white'>
                Embassy
              </Link>
            </li>
            <li className='pl-0 mb-2'>
            <Link to="/alpha/contact" className='decoration-0 text-white'>
                Consulate
              </Link>
            </li>
            <li className='pl-0 mb-2'>
              <Link to="/alpha/contact" className='decoration-0 text-white'>
                Sponsorship
              </Link>
            </li>
          </ul>
        </div>
        <div className='forthcolumn p-4 w-full'>
          <h2 className='text-white font-semibold mb-2'> Our Social Media </h2>
          <div className="flex flex-row">
            <ul className='list-none mr-4'>
              <li className='pl-0 mb-2'>
                <a
                    className='decoration-0'
                    href="https://www.facebook.com/PPIAustralia"
                >
                  Facebook
                </a>
              </li>
              <li className='pl-0 mb-2'>
                <a
                    className='decoration-0'
                    href="https://www.instagram.com/ppiaustralia_/"
                >
                  Instagram
                </a>
              </li>
              <li className='pl-0 mb-2'>
                <a
                    className='decoration-0'
                    href="https://www.youtube.com/c/PPIAustraliaOfficial"
                >
                  Youtube
                </a>
              </li>
            </ul>

            <ul className='list-none'>
              <li className='pl-0 mb-2'>
                <a className='decoration-0' href="#">
                  Tik Tok
                </a>
              </li>
              <li className='pl-0 mb-2'>
                <a
                    className='decoration-0'
                    href="https://github.com/ppiaustralia/"
                >
                  GitHub
                </a>
              </li>
              <li className='pl-0 mb-2'>
                <a
                    className='decoration-0'
                    href="https://discord.gg/gq5m4UhXXx"
                >
                  Discord
                </a>
              </li>
            </ul>

          </div>

        </div>
      </div>
    );
}

export default Footer;
