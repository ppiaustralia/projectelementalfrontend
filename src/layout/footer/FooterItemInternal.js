import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import FooterItemExternal from "./FooterItemExternal";

function FooterItemInternal(props){
    const {heading, target} = props
    return(
        <li className='pl-0 mb-2'>
            <Link to={target} className='decoration-0 hover:text-slate-300'>
                {heading}
            </Link>
        </li>
    )

}
FooterItemExternal.propTypes = {
    heading: PropTypes.string,
    target: PropTypes.string
}

export default FooterItemInternal