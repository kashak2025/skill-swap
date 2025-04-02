import React, { useEffect } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { Box, Container } from "@mui/material";
import ScrollReveal from "scrollreveal";
const About = () => {
  useEffect(() => {
    ScrollReveal().reveal(".Aboutfir", {
      distance: "100px",
      opacity: 0,
      origin: "left",
      delay: 1000,
      transition: "5000",
    });
    ScrollReveal().reveal(".vision", {
      distance: "100px",
      opacity: 0,
      origin: "right",
      delay: 2000,
      transition: "5000",
    });
  }, []);
  
  return (
    <div>
      <Header />
      <Box sx={{ mt: "90px" }}>
        <Container>
          <Box
            sx={{ width: "100%", mb:"20px", mt: "20px", padding: "10px 10px" }}
            className="Aboutfir"
          >
            <Box sx={{ fontFamily: '"Outfit",serif', fontSize: "30px", fontWeight:'500' }}>
              About Us
            </Box>
            <Box>
              <Box sx={{fontSize:'18px'}}>
                Welcome to <span style={{fontWeight:"500",fontFamily:'"Outfit",serif'}}>SkillSwap. </span>, the ultimate platform for skill exchange! We believe thateveryone has something valuable to teach and something new tolearn. Our mission is to create a community where people can sharetheir skills, learn from others, and grow together—without theneed for money. Whether you're a seasoned expert or a curiousbeginner, this is the place to connect, collaborate, and exchangeknowledge.
              </Box>
            </Box>
          </Box>
          <Box
            sx={{ width: "100%", mb:"20px", mt: "20px", padding: "10px 10px" }}
            className="vision"
          >
            <Box sx={{ fontFamily: '"Outfit",serif', fontSize: "30px", fontWeight:'500' }}>
              Our Vision
            </Box>
            <Box>
              <Box sx={{fontSize:'18px'}}>
                Welcome to <span style={{fontWeight:"500",fontFamily:'"Outfit",serif'}}>SkillSwap. </span>, the ultimate platform for skill exchange! We believe thateveryone has something valuable to teach and something new tolearn. Our mission is to create a community where people can sharetheir skills, learn from others, and grow together—without theneed for money. Whether you're a seasoned expert or a curiousbeginner, this is the place to connect, collaborate, and exchangeknowledge.
              </Box>
            </Box>
          </Box>
        </Container>

        {/* <Box className="text-container">
          <div>Hello, This is First Comments</div>
          <div>Hello, This is Second Comments</div>
          <div>Hello, This is Third Comments</div>
          <div>Hello, This is Fourth Comments</div>
          <div>Hello, This is Fifth Comments</div>
          <div>Hello, This is Sixth Comments</div>
          <div>Hello, This is Seventh Comments</div>
          <div>Hello, This is Eight Comments</div>
        </Box> */}

        {/* <Box>
          <div className="content v2">
            <p>
              Lorem ipsum dolor sit amet. Qui recusandae itaque et suscipit neque et corrupti beatae aut quas officia quo placeat nobis eos expedita odit est vitae culpa? Et porro consequatur id culpa iusto ut architecto nesciunt.
            </p>
          </div>
        </Box> */}

        
      </Box>
      <Footer />
    </div>
  );
};

export default About;
