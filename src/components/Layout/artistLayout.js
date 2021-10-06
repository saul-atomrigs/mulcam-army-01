import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Box from '../components/Box1'
import Container from '@mui/material/Container';


const artistLayout = () => {
    return (
        <>
            <Header />
            <Container className='dataBoard'>
                <Box />
            </Container>
            <Footer />
        </>
    )
}

export default artistLayout