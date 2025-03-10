import React, { useEffect } from "react";
import { Box, Button, Container } from "@mui/material";
import { styled, alpha} from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import ScrollReveal from "scrollreveal";
// slider Image
import Img1 from "../images/1.jpeg";
import Img2 from "../images/2.jpeg";

import Sec2 from "../images/img.jpg";

// Slider2 images
import Sli1 from "../images/slider1.png";
import Sli2 from "../images/slider2.png";
import Sli3 from "../images/slider3.png";
import Sli4 from "../images/slider4.png";

// Card images
import Card1 from "../images/card1.png";
import Card2 from "../images/card2.png";
import Card3 from "../images/card3.png";
import Quest from "../images/Quest.png";

// slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  // autoplay: true,
  // autoplaySpeed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const settings2 = {
  dots: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 4,
  slidesToScroll: 1,
};
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Hero = () => {
  useEffect(() => {
    ScrollReveal().reveal(".whyus", {
      distance: "20px",
      opacity: 0,
    });
    ScrollReveal().reveal(".slider", {
      distance: "20px",
      delay: 200,
    });
    ScrollReveal().reveal(".slider2", {
      distance: "20px",
      delay: 300,
    });
    ScrollReveal().reveal(".card", {
      distance: "20px",
      delay: 500,
    });
    ScrollReveal().reveal(".card-sub", {
      distance: "20px",
      delay: 500,
    });
    
  }, []);

  return (
    <div style={{marginTop:'72px'}}>
      <div className="slider-container slider">
        <Slider {...settings}>
          <div className="background">
            <img src={Img1} width={"100%"} alt="" />
            <Box
              sx={{
                position: "absolute",
                top: "0px",
                height: "100%",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                px: { lg: "80px", md: "70px", sm: "60px", xs: "30px" },
                pt: { lg: "260px", md: "200px", sm: "160px", xs: "40px" },
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  fontSize: {
                    lg: "50px",
                    md: "40px",
                    sm: "30px",
                    xs: "24px",
                  },
                  fontWeight: "600",
                  color: "#0E0E7A",
                  fontFamily: '"Outfit",serif',
                }}
              >
                Initiating <span style={{ color: "#CDDFFF" }}>Your</span>{" "}
                Journey to <br />
                <b>Triumph</b>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "start",
                }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    "&:hover": { boxShadow: "3px 3px #0E0E7A" },
                    background: "#CDDFFF",
                    padding: "6px 20px",
                    borderRadius: "20px",
                    border: "1px solid #0E0E7A",
                    color: "#0E0E7A",
                    fontFamily: '"Outfit",serif',
                  }}
                >
                  Explore Skill
                </Button>
              </Box>
            </Box>
          </div>

          <div className="background">
            <img src={Img2} width={"100%"} alt="" />
            <Box
              sx={{
                position: "absolute",
                top: "0px",
                height: "100%",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                px: { lg: "80px", md: "70px", sm: "60px", xs: "30px" },
                pt: { lg: "260px", md: "200px", sm: "160px", xs: "40px" },
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  fontSize: {
                    lg: "50px",
                    md: "40px",
                    sm: "30px",
                    xs: "24px",
                  },
                  fontWeight: "600",
                  color: "#0E0E7A",
                  fontFamily: '"Outfit",serif',
                }}
              >
                If you are Confused
                <Box
                  sx={{
                    color: "#9FB5FF",
                    width: "100%",
                    fontSize: {
                      lg: "50px",
                      md: "40px",
                      sm: "30px",
                      xs: "24px",
                    },
                    fontWeight: "600",
                    fontFamily: '"Outfit",serif',
                  }}
                >
                  Go to Gemini AI
                </Box>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "start",
                }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    "&:hover": { boxShadow: "3px 3px #0E0E7A" },
                    background: "#CDDFFF",
                    padding: "6px 20px",
                    borderRadius: "20px",
                    border: "1px solid #0E0E7A",
                  }}
                >
                  <a
                    href="https://gemini.google.com/"
                    style={{
                      color: "#0E0E7A",
                      fontFamily: '"Outfit",serif',
                      textDecoration: "none",
                      display: "flex",
                    }}
                  >
                    Chat with Gemini
                    {/* <img
                        src={Star}
                        width={"20px"}
                        style={{ marginLeft: "10px" }}
                        alt=""
                      /> */}
                  </a>
                </Button>
              </Box>
            </Box>
          </div>
        </Slider>
      </div>

      <Box
        sx={{ display: { lg: "block", md: "block", sm: "none", xs: "none" }, mt:'20px' }}
        className="slider2"
      >
        <div className="slider-container">
          <Slider {...settings2}>
            <div>
              <Box sx={{ height: "150px", display: "flex", alignItems: "center" }}>
                <img src={Sli1} width={"100%"} alt="" />
              </Box>
            </div>
            <div>
              <Box sx={{ height: "100%", display: "flex", alignItems: "center" }}>
                <img src={Sli2} width={"100%"} alt="" />
              </Box>
            </div>
            <div height={"100%"}>
              <Box
                sx={{ height: "150px", display: "flex", alignItems: "center" }}
              >
                <img src={Sli3} width={"100%"} alt="" />
              </Box>
            </div>
            <div height={"100%"}>
              <Box sx={{ height: "150px", display: "flex", alignItems: "center" }}>
                <img src={Sli4} width={"100%"} alt="" />
              </Box>
            </div>
          </Slider>
        </div>
      </Box>

      <Box className="whyus">
        <Container>
          <Box
            sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
          >
            <Box
              sx={{
                width: {
                  lg: "calc(50% - 30px)",
                  md: "calc(50% - 30px)",
                  sm: "100%",
                  xs: "100%",
                },
                p: "10px",
              }}
            >
              <Box
                sx={{
                  fontSize: "30px",
                  fontFamily: '"Outfit",serif',
                  fontWeight: "500",
                }}
              >
                Why US ???
              </Box>
              <Box sx={{ pt: "10px" }}>
                At{" "}
                <span
                  style={{
                    fontFamily: '"Outfit",serif',
                    fontWeight: "600",
                    fontSize: "18px",
                  }}
                >
                   SkillSwapIndia.{" "}
                </span>
                , we empower learning through skill exchange—no money needed.
                Whether it's a new language, coding, or a creative hobby, our
                platform connects you with others to grow together. Gain new
                skills, make meaningful connections, and enjoy an accessible,
                collaborative learning experience. Join us now and start your
                skill-sharing journey!
              </Box>
              <Box>
                <ul style={{ padding: "10px 20px 0px 20px" }}>
                  <li>Get skill in exchange of Your Skill</li>
                  <li>No Monetary</li>
                  <li>Chat with Gemini</li>
                </ul>
              </Box>
              <Box sx={{ pt: "10px" }}>
                <Button
                  sx={{
                    "&:hover": { boxShadow: "3px 3px #9FB5FF" },
                    background: "#0A0A7E",
                    color: "#CDDFFF",
                    borderRadius: "50px",
                    textTransform: "capitalize",
                    padding: "5px 12px",
                    border: "1px solid #9FB5FF",
                  }}
                >
                  Explore Skills
                </Button>
              </Box>
            </Box>
            <Box
              sx={{ width: { lg: "50%", md: "50%", sm: "100%", xs: " 0%" } }}
            >
              <img src={Sec2} width={"100%"} alt="" />
            </Box>
          </Box>
        </Container>
      </Box>

      <Box sx={{ mt: "20px" }}>
        <Container>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: {
                lg:"space-between",
                md:"space-between",
                sm:"center",
                xs:"center",
              },
              flexWrap: "wrap",
            }}
          >
            {/* First card */}
            <Box
              className="card-sub"
              sx={{
                "&:hover": {
                  transform: 'scale(2, 2)',
                  boxShadow: "3px 3px 10px #888",
                  transition: "0.5s",
                },
                width: {
                  lg: "calc(33.33% - 30px)",
                  md: "calc(33.33% - 30px)",
                  sm: "calc(100% - 30px)",
                  xs: "calc(100% - 30px)",
                },
                transition: "0.5s",
                padding: "15px",
                background: "#0A0A7E",
                borderRadius: "15px",
                color: "#CDDFFF",
                mt:'20px'
              }}
            >
              {/* Heading */}
              <Box>
                <Box
                  sx={{
                    fontSize: "30px",
                    fontFamily: '"Outfit",serif',
                    fontWeight: "600",
                    px: "10px",
                  }}
                >
                  I wanna learn Skills!
                </Box>
                <Box sx={{ px: "10px" }}>Skill Course</Box>
              </Box>

              {/* Image of card */}

              <Box sx={{
                display:{
                  lg:'block',
                  md:'block',
                  sm:'block',
                  xs:'none',
                }
              }}>
                <Box sx={{ width: "100%", height: "240px" }}>
                  <img src={Card1} width={"100%"} height={"100%"} alt="" />
                </Box>
              </Box>

              {/* Description of card */}
              <Box sx={{ display: "flex" }}>
                <Box
                  sx={{
                    flexGrow: "0.5",
                    display: {
                      lg:'flex',
                      md:'flex',
                      sm:'flex',
                      xs:'none',
                    },
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Search
                </Box>
                <Box sx={{ flexGrow: "1", mt: "10px" }}>
                  <Search>
                    <SearchIconWrapper>
                      <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder="Search Skills…"
                      inputProps={{ "aria-label": "search" }}
                    />
                  </Search>
                </Box>
              </Box>
              <Box>
                <Box sx={{ padding: "0px 15px" }}>
                  <Box
                    sx={{
                      padding: "13px 0px 0px 0px ",
                      fontFamily: '"Outfit",serif',
                    }}
                  >
                    Trending Skills Like Full Stack, UI/UX...
                  </Box>
                  <Box
                    sx={{
                      padding: "5px 0px 0px 0px",
                      fontFamily: '"Outfit",serif',
                    }}
                  >
                    Explore Skills and learn
                  </Box>
                </Box>
              </Box>
            </Box>

            {/* Second card */}
            <Box
              className="card-sub"
              sx={{
                "&:hover": {
                  transform: "scale(1.04, 1.04)",
                  boxShadow: "3px 3px 10px #888",
                  transition: "0.5s",
                },
                width: {
                  lg: "calc(33.33% - 30px)",
                  md: "calc(33.33% - 30px)",
                  sm: "calc(100% - 30px)",
                  xs: "calc(100% - 30px)",
                },
                transition: "0.5s",
                padding: "15px",
                background: "#9FB5FF",
                borderRadius: "15px",
                color: "#fff",
                mt:{
                  lg:'20px',
                  md:'20px',
                  sm:'20px',
                  xs:'20px',
                },
              }}
            >
              {/* Heading */}
              <Box>
                <Box
                  sx={{
                    fontSize: "30px",
                    fontFamily: '"Outfit",serif',
                    fontWeight: "600",
                  }}
                >
                  I wanna Teach...
                </Box>
                <Box>Job Explore</Box>
              </Box>

              {/* Image of card */}

              <Box  sx={{
                display:{
                  lg:'block',
                  md:'block',
                  sm:'block',
                  xs:'none',
                }
              }}>
                <Box sx={{ width: "100%", height: "240px" }}>
                  <img src={Card2} width={"100%"} height={"100%"} alt="" />
                </Box>
              </Box>

              {/* Description of card */}
              <Box sx={{ mt: "10px" }}>
                <Box sx={{ display: "flex" }}>
                  <Box
                    sx={{
                      flexGrow: "0.5",
                      display: {
                        lg:'flex',
                        md:'flex',
                        sm:'flex',
                        xs:'none',
                      },
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    Search
                  </Box>
                  <Box sx={{ flexGrow: "1" }}>
                    <Search>
                      <SearchIconWrapper>
                        <SearchIcon />
                      </SearchIconWrapper>
                      <StyledInputBase
                        placeholder="Search Jobs"
                        inputProps={{ "aria-label": "search" }}
                      />
                    </Search>
                  </Box>
                </Box>
                <Box>
                  <Box sx={{ padding: "0px 15px" }}>
                    <Box
                      sx={{
                        padding: "13px 0px 0px 0px ",
                        fontFamily: '"Outfit",serif',
                      }}
                    >
                      Explore the Skills You have..
                    </Box>
                    <Box
                      sx={{
                        padding: "5px 0px 0px 0px",
                        fontFamily: '"Outfit",serif',
                      }}
                    >
                      Teach with us...
                    </Box>
                  </Box>
                </Box>
                {/* <Box>
                  <Box></Box>
                  <Box></Box>
                </Box> */}
              </Box>
            </Box>

            {/* Third Card */}
            <Box
              className="card-sub"
              sx={{
                "&:hover": {
                  transform: "scale(1.04, 1.04)",
                  boxShadow: "3px 3px 10px #888",
                  transition: "0.5s",
                },
                width: {
                  lg: "calc(33.33% - 30px)",
                  md: "calc(33.33% - 30px)",
                  sm: "calc(100% - 30px)",
                  xs: "calc(100% - 30px)",
                },
                transition: "0.5s",
                padding: "15px",
                background: "#CDDFFF",
                borderRadius: "15px",
                color: "#0E1C7A",
                mt:{
                  lg:'20px',
                  md:'20px',
                  sm:'20px',
                  xs:'20px',
                },
                
              }}
            >
              <Box>
                {/* Heading */}
                <Box>
                  <Box
                    sx={{
                      fontSize: "30px",
                      fontFamily: '"Outfit",serif',
                      fontWeight: "600",
                      display:'flex'
                    }}
                  >
                    <Box sx={{width:'80%',fontSize:'26px'}}>
                      I don't have Idea where to begin..
                    </Box>
                    <Box sx={{width:'20%'}}>
                      <img src={Quest} width={"100%"} alt="" />
                    </Box>
                  </Box>
                </Box>

                {/* Image of card */}

                <Box  sx={{
                display:{
                  lg:'block',
                  md:'block',
                  sm:'block',
                  xs:'none',
                }
              }}>
                  <Box sx={{ width: "100%", height: "240px" }}>
                    <img src={Card3} width={"100%"} height={"100%"} alt="" />
                  </Box>
                </Box>

                {/* Description of card */}
                <Box>
                  <Box sx={{mt:'10px'}}> 
                    <Button sx={{background:"#0A0A7E", color:'#9fb5ff', textTransform:'capitalize',borderRadius:'50PX'}}>
                      Gemini Ai
                    </Button>
                  </Box>
                  <Box sx={{fontFamily:'"Outfit",serif',fontWeight:'500',mt:'8px'}}>Start with Gemini</Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default Hero;
