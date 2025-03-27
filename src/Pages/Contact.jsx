import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Img1 from '../images/Contact.jpg'
import { Box, Container } from '@mui/material'
import { ContactMail } from '@mui/icons-material'
const Contact = () => {
  return (
    <div>
      <Header/>
        <Box sx={{mt:'74px',position:'relative'}}>
          <Box>
            <img src={Img1} width={"100%"} alt="" />
          </Box>
          <Box sx={{width:'100%', padding:'100px 0px', position:'absolute', background:'#ffffff94', backdropFilter:'blur("50px") !important', color:'#fff', top:'0px'}}>
            <Container>
            <Box>
              Content
            </Box>
           </Container>
          </Box>
        </Box>
      <Footer/>
    </div>
  )
}

export default Contact
