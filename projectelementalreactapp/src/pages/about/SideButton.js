import React, {useState, useEffect, useRef } from 'react'
import styled, { css } from 'styled-components'
import Button from './Button'

const SideButton =  () => {
    const sidebutton = useRef();
    const [fixedPosition, setFixedPosition] = useState(false)
    useEffect(() => {
        const initialTop = sidebutton.current.getBoundingClientRect().top; 
        const handleScroll = () => {
            setFixedPosition(window.scrollY > initialTop);
            console.log(window.scrollY);
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])
    return (
    <MenuItem fixed = {fixedPosition} ref={sidebutton}>
        <Button>About Us</Button>
        <Button>Vision</Button>
        <Button>Mission</Button>
        <Button>Kabinet Sinergi 2020/2021</Button>
        <Button>AD / ART</Button>
    </MenuItem>
)
}

const MenuItem = styled.div`
display: flex;
flex-direction: column;
background-color: white;
${props => props.fixed && css`
position: fixed;
top: 0;
`}
`

export default SideButton;