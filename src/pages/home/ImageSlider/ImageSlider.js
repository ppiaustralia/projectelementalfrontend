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
        <h2 className="font-header text-6xl text-red-600 mb-2 text-center lg:text-left">PPI-Australia (PPIA)</h2>
        <p className="italic text-[21px] text-center lg:text-left">
          Perhimpunan Pelajar Indonesia Australia (PPIA) or Indonesian Students'
          Association of Australia. it has purpose to serve Indonesian students
          across Australia
        </p>
        <div className="flex flex-row w-full justify-evenly lg:justify-start">
          <Link to="about/" className="w-2/5 bg-[white] flex justify-center no-underline text-[#ec2027] border-2 border-grey m-[0.5em] px-[0.5em] py-[1em] rounded-[1.75em] hover:text-[white] hover:bg-[#ec2027]">
            <span className='text-center'>Learn More</span>
          </Link>
          <Link to="https://www.ppi-australia.org/kipi-2022/" className="w-2/5 bg-[white] flex justify-center no-underline text-[#ec2027] border-2 border-grey m-[0.5em] px-[0.5em] py-[1em] rounded-[1.75em] hover:text-[white] hover:bg-[#ec2027]">
            <span className='text-center'>KIPI 2022</span>
          </Link>
        </div>
      </div>
      <div className=''>
        <img src={ImageHeader} alt="Synergy for Indonesia image" className='w-full h-full object-contain' />
      </div>

    </div>
  );
}
