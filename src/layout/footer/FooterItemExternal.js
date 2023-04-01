import React from 'react'
import PropTypes from "prop-types";

function FooterItemExternal(props){
    const {heading, target} = props
    return(
        <li className='pl-0 mb-2 '>
            <a href={target} className={`hover:text-slate-300`}>
                {`${heading}`}
            </a>
        </li>
    )

}

FooterItemExternal.propTypes = {
    heading: PropTypes.string,
    target: PropTypes.string
}

export default FooterItemExternal