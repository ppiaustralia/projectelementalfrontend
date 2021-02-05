import React from 'react'
import Footer from '../components/footer'

export function FooterContainer() {
    return(
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                <Footer.Column>
                    <Footer.Title>PPIA</Footer.Title>
                    <Footer.Link href='#'>The Biggest Overseas</Footer.Link>
                    <Footer.Link href='#'>Indonesia Student</Footer.Link>
                    <Footer.Link href='#'>Association</Footer.Link>
                </Footer.Column> 
                <Footer.Column>
                    <Footer.Title>Membership App</Footer.Title>
                    <Footer.Link href='#'>Google Play</Footer.Link>
                    <Footer.Link href='#'>App Store</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Useful Links</Footer.Title>
                    <Footer.Link href='#'>Kabinet Sinergi 2020-2021</Footer.Link>
                    <Footer.Link href='#'>AD / ART</Footer.Link>
                    <Footer.Link href='#'>Konsulate Indonesia</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Social Media</Footer.Title>
                    <Footer.Link href='#'>Facebook</Footer.Link>
                    <Footer.Link href='#'>Instagram</Footer.Link>
                    <Footer.Link href='#'>Youtube</Footer.Link>
                    <Footer.Link href='#'>Twitter</Footer.Link>
                </Footer.Column>  
                </Footer.Row> 
            </Footer.Wrapper>
        </Footer>

    )
}