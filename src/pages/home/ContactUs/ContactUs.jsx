import React from 'react';
import { Link } from 'react-router-dom';

import styles from './ContactUs.module.css';

export default function ContactUs() {
  return (
    <>
      <div className='w-full items-center justify-center flex flex-col mt-4'>
        <h2 className='font-header text-[2em] justify-center pb-[0.2em]'>Do you have any questions?</h2>
        <p className='mb-[1em]'>Feel free to contact us by clicking this button below</p>
        <Link to="mailto:infotech@ppi-australia.org" className="flex items-center justify-center text-[#ec2027] bg-[white] border-2 border-grey w-48 h-16 no-underline !mb-[1.5em] m-0 px-[1em] py-[0.5em] rounded-[1em] hover:bg-[#ec2027] hover:text-[white]">
          Contact PPIA IT
        </Link>
        {/* <button className='w-48 h-16 bg-white mb-4 rounded-lg text-red-600 block'>
          <a href="mailto:infotech@ppi-australia.org">Contact PPIA IT</a>
        </button> */}
      </div>
    </>
  );
}
