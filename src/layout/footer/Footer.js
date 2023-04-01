import React from 'react';
import { Link } from 'react-router-dom';
import FooterItemExternal from './FooterItemExternal'
import FooterItemInternal from './FooterItemInternal'
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
                    <FooterItemExternal heading={"Terms & Conditions"} target="https://www.ppi-australia.org/terms-and-conditions/" />
                    <FooterItemExternal heading={"Privacy Policy"} target="https://www.ppi-australia.org/privacy-policy/" />
                </ul>
            </div>
            <div className='secondcolumn p-4 w-full'>
                <h2 className='text-white font-semibold mb-2'> Get to know us </h2>
                <ul className='list-none'>
                    <FooterItemInternal target="/alpha/about" heading={`Kabinet PPIA 2022-2023`} />
                    <FooterItemInternal target="/alpha/about" heading={`AD/ART 2022-2023`}/>
                    <FooterItemInternal target="/alpha/contact" heading={`Konsulat Indonesia`}/>
                    <FooterItemInternal target="/alpha/about" heading={`Events`}/>
                </ul>
            </div>
            <div className='thirdcolumn p-4 w-full'>
                <h2 className='text-white font-semibold mb-2'> Important Link </h2>
                <ul className='list-none'>
                    <FooterItemInternal target="/alpha/contact" heading="Embassy" />
                    <FooterItemInternal target="/alpha/contact" heading="Consulate" />
                    <FooterItemInternal target="/alpha/contact" heading="Sponsorship" />
                </ul>
            </div>
            <div className='forthcolumn p-4 w-full'>
                <h2 className='text-white font-semibold mb-2'> Our Social Media </h2>
                <div className="flex flex-row">
                    <ul className='list-none mr-4'>
                        <FooterItemExternal target="https://www.facebook.com/PPIAustralia" heading="Facebook" />
                        <FooterItemExternal target="https://www.instagram.com/ppiaustralia_/" heading="Instagram" />
                        <FooterItemExternal target="https://www.youtube.com/c/PPIAustraliaOfficial" heading="Youtube" />
                    </ul>
                    <ul className='list-none'>
                        <FooterItemExternal target="https://github.com/ppiaustralia/" heading="Github" />
                        <FooterItemExternal target="https://discord.gg/gq5m4UhXXx" heading="Discord" />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;
