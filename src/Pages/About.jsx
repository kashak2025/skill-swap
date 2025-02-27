import React, { useEffect } from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import { Box, Container } from '@mui/material'
import ScrollReveal from 'scrollreveal'
const About = () => {
  useEffect(() => {
    ScrollReveal().reveal(".Aboutfir", {
      distance: "100px",
      opacity: 0,
    })
  },[])
  return (
    <div>
        <Header/>
            <Box>
              <Container>
                <Box sx={{width:'100%',mt:'20px',padding:'10px 10px'}} className="Aboutfir" >
                  <Box sx={{fontFamily:'"Outfit",serif', fontSize:'29px'}}>About Us</Box>
                  <Box>Welcome to <span style={{fontFamily:'"Outfit",serif'}}>Skill Swap India</span>, the ultimate platform for skill exchange! We believe that everyone has something valuable to teach and something new to learn. Our mission is to create a community where people can share their skills, learn from others, and grow together—without the need for money. Whether you're a seasoned expert or a curious beginner, this is the place to connect, collaborate, and exchange knowledge.</Box>
                </Box>
              </Container>
            </Box>
        <Footer/>
    </div>
  )
}

export default About
