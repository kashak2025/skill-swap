import React, { useEffect } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { Box, Container } from "@mui/material";
import press from "../images/press-1.png";
import magazine from "../images/press-magazine-1.jpg";
import ScrollReveal from "scrollreveal";

const Press = () => {
  let data = [
    {
      p: "Our News and Articles",
    },
    {
      p: "Our News and Articles",
    },
    {
      p: "Our News and Articles",
    },
    {
      p: "Our News and Articles",
    },
    {
      p: "Our News and Articles",
    },
    {
      p: "Our News and Articles",
    },
    {
      p: "Our News and Articles",
    },
    {
      p: "Our News and Articles",
    },
    {
      p: "Our News and Articles",
    },
    {
      p: "Our News and Articles",
    },
    {
      p: "Our News and Articles",
    },
    {
      p: "Our News and Articles",
    },
    {
      p: "Our News and Articles",
    },
    {
      p: "Our News and Articles",
    },
  ];
  useEffect(() => {
    ScrollReveal().reveal(".content",{
      distance: "100px",
      opacity: 0,
      origin: "left",
      delay: 1000,
      transition: "5000",
    })
    ScrollReveal().reveal(".image",{
      distance: "100px",
      opacity: 0,
      origin: "right",
      delay: 1000,
      transition: "5000",
    })
  },[])
  return (
    <div>
      <Header />
      <Box sx={{ mt: "90px" }}>
        <Box>
          <div class="slider23">
            <div class="slide-track">
              {data.map((el, i) => {
                return (
                  <div class="slide">
                    <p>{el.p}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Box>
        <Box sx={{m:'20px 0px',borderBottom:'1px solid #888'}}>
        <Container>
          <Box sx={{ width: "100%", display: "flex" }}>
            <Box
            class="content"
              sx={{
                width: "50%",
                display: "flex",
                alignItems: "center",
                p: "20px 30px",
              }}
            >
              <Box sx={{ width: "100%" }}>
                <Box
                  sx={{
                    fontSize: "40px",
                    fontFamily: '"Outfit",serif',
                    fontWeight: "500",
                  }}
                >
                  Skill Swap Newsroom
                </Box>
                <Box sx={{fontSize:'20px'}}>
                  The latest news, announcements, and future of work insights
                  from SkillSwapIndia, the world’s work marketplace.
                </Box>
              </Box>
            </Box>
            <Box className="image" sx={{ width: "50%", display:'flex',justifyContent:'center' }}>
              <Box sx={{ height: "90%%", width:'50%' }}>
                <img src={press} height={"100%"} width={"100%"} alt="" />
              </Box>
            </Box>
          </Box>
        </Container>
        </Box>
        <Box sx={{m:'20px 0px',borderBottom:'1px solid #888'}}>
          <Container>
            <Box sx={{width:'100%',display:'flex'}}>
              <Box sx={{width:'70%'}}>
                <Box>
                  <img src={magazine} width={"100%"} alt="" />
                </Box>
                <Box></Box>
              </Box>
              <Box sx={{width:'30%'}}>Hello</Box>
            </Box>
          </Container>
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default Press;
