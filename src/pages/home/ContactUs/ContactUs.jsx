import React from 'react';
import { Link } from 'react-router-dom';

import styles from './ContactUs.module.css';

export default function ContactUs() {
  return (
    <>
      <div className='w-full items-center justify-center flex flex-col mt-4'>
        <h2>Do you have any questions?</h2>
        <p className='mb-2'>Feel free to contact us by clicking this button below</p>
        <button className='w-48 h-16 bg-white mb-4 rounded-lg text-red-600 block'>
          <a href="mailto:infotech@ppi-australia.org">Contact PPIA IT</a>
        </button>
      </div>
    </>
  );
}
