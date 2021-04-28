import React from 'react'
import styled from 'styled-components'

const Button = ({ children }) => (
    <Container>
        {children}
    </Container>
)

const Container = styled.div
`  
border : none;
padding: 5px 10px;
`

export default Button;