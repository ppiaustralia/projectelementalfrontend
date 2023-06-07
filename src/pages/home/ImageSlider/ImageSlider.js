import React from 'react';

import styles from './ImageSlider.module.css';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import ImageHeader from '../../../assets/images/2.jpg';
export default function ImageSlider() {
  const slideshow = useSelector((state) => state.slideshow.slideshow);
  return (
    // <div className="flex min-h-[50vh] relative z-[5] overflow-hidden p-[2em]">
    <div className="flex flex-col min-h-[50vh] relative z-[5] overflow-hidden p-[2em] lg:flex-row">
      <span className="absolute inset-0 w-full h-full bg-batik opacity-[0.08] z-[-1]"/>
      <div className="flex flex-col text-lg p-2 px-4 items-center leading-9">
        <h2 className="text-5xl text-red-600 mb-2">PPI-Australia (PPIA)</h2>
        <p className="italic text-[21px] text-center lg:!text-left">
          Perhimpunan Pelajar Indonesia Australia (PPIA) or Indonesian Students'
          Association of Australia. it has purpose to serve Indonesian students
          across Australia
        </p>
        <div className="flex flex-row w-full justify-evenly lg:justify-start">
          <Link to="about/" className="w-2/5 bg-[#ec2027] flex justify-center no-underline text-[white] m-[0.5em] px-[0.5em] py-[1em] rounded-[1.75em] hover:text-[black]">
            <span>Learn More</span>
          </Link>
          <a
            href="https://www.ppi-australia.org/kipi-2022/"
            className="w-2/5 bg-transparent text-[black] border-2 flex justify-center no-underline m-[0.5em] px-[0.5em] py-[1em] rounded-[1.75em] border-black hover:text-[#ec2027]"
          >
            <span>KIPI 2022</span>
          </a>
        </div>
      </div>
      <div className=''>
        <img src={ImageHeader} alt="Synergy for Indonesia image" className='w-full h-full object-contain' />
      </div>

    </div>
  );
}
