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
    });
  }, []);
  return (
    <div>
      <Header />
      <Box>
        <Container>
          <Box
            sx={{ width: "100%", mt: "20px", padding: "10px 10px" }}
            className="Aboutfir"
          >
            <Box sx={{ fontFamily: '"Outfit",serif', fontSize: "29px" }}>
              About Us
            </Box>
            <Box className="content v2">
              <p>
                Welcome to Skill Swap India, the ultimate platform for skill exchange! We believe thateveryone has something valuable to teach and something new tolearn. Our mission is to create a community where people can sharetheir skills, learn from others, and grow together—without theneed for money. Whether you're a seasoned expert or a curiousbeginner, this is the place to connect, collaborate, and exchangeknowledge.
              </p>
            </Box>
          </Box>
        </Container>

        <Box className="text-container">
          <div>Hello, This is First Comments</div>
          <div>Hello, This is Second Comments</div>
          <div>Hello, This is Third Comments</div>
          <div>Hello, This is Fourth Comments</div>
          <div>Hello, This is Fifth Comments</div>
          <div>Hello, This is Sixth Comments</div>
          <div>Hello, This is Seventh Comments</div>
          <div>Hello, This is Eight Comments</div>
        </Box>

        <Box>
          <div className="content v2">
            <p>
              Lorem ipsum dolor sit amet. Qui recusandae itaque et suscipit neque et corrupti beatae aut quas officia quo placeat nobis eos expedita odit est vitae culpa? Et porro consequatur id culpa iusto ut architecto nesciunt.
            </p>
          </div>
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default About;
