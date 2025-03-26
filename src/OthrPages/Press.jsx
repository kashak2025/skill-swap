import React, { useEffect } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { Box, Button, Container } from "@mui/material";
import press from "../images/press-1.png";
import Press3 from "../images/press-3.jpg";
import magazine from "../images/press-magazine-1.jpg";
import ScrollReveal from "scrollreveal";
import { NavLink } from "react-router";

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
    // ScrollReveal().reveal(".head-content", {
    //   distance: "100px",
    //   opacity: 0,
    //   origin: "left",
    //   delay: 1000,
    //   transition: "5000",
    // });
    // ScrollReveal().reveal(".image", {
    //   distance: "100px",
    //   opacity: 0,
    //   origin: "right",
    //   delay: 1000,
    //   transition: "5000",
    // });
  }, []);
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
        <Box sx={{ m: "20px 0px", borderBottom: "1px solid #888" }}>
          <Container>
            <Box sx={{ width: "100%", display: "flex", alignItems:"center" }}>
              <Box
                class="head-content"
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
                  <Box sx={{ fontSize: "20px" }}>
                    The latest news, announcements, and future of work insights
                    from SkillSwapIndia, the world’s work marketplace.
                  </Box>
                </Box>
              </Box>
              <Box
                className="image"
                sx={{ width: "50%", display: "flex", justifyContent: "center" }}
              >
                <Box sx={{ height: "90%%", width: "50%" }}>
                  <img src={press} height={"100%"} width={"100%"} alt="" />
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
        <Box sx={{ m: "20px 0px", borderBottom: "1px solid #888" }}>
          <Container>
            <Box sx={{ width: "100%", display: "flex" }}>
              <Box sx={{ width: "70%",}}>
                <Box sx={{ width: "100%" }}>
                  <img src={magazine} width={"100%"} alt="" />
                </Box>
                <Box sx={{width:'100%', padding:'0px 0px 20px 0px', display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                  <NavLink to={'/press-2'}>
                    <Box sx={{color:'#000',padding:'0px 10px',fontSize:'30px'}}>
                      Read Top most indian Website in which...
                    </Box>
                  </NavLink>
                  <Box sx={{display:'flex',alignItems:'center',padding:'0px 10px'}}>
                    <Box sx={{padding:'0px 10px'}}>24. Feb</Box>
                    <Box sx={{padding:'0px 10px'}}>Isha Jain</Box>
                  </Box>
                </Box>
                <Box sx={{width:'100%', display:'flex',justifyContent:'center',padding:'10px 0px'}}>
                  <Button varient="Outlined" sx={{'&:hover':{boxShadow:'2px 2px 4px #0A0A7E', transition:'0.5s'},transition:'0.5s',background:'#CDDFFF',color:'#0A0A7E',borderRadius:'50px',border:'1px solid #0A0a7E'}}>
                    <NavLink to={'/press-2'}>
                      <Box sx={{color:'#0A0A7E',textTransform:'capitalize',}}>
                        Read More
                      </Box>
                    </NavLink>
                  </Button>
                </Box>
              </Box>
              <Box sx={{ width: "30%" }}>
                <Box sx={{width:'100%'}}>
                  <Box>
                    <img src={Press3} width={"100%"} alt="" />
                  </Box>
                  <Box sx={{fontSize:'20px',fontFamily:'"Outfit",serif'}}>
                    Live Podcast By WVM to know that How we works.
                  </Box>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
        <Box>
          <Container>
            <Box>
              
            </Box>
          </Container>
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default Press;
