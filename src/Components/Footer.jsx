import { Box, Container } from "@mui/material";
import React, { useEffect } from "react";
import Logo from "../images/white-horizontal.png";
import ScrollReveal from "scrollreveal";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { CenterFocusStrong } from "@mui/icons-material";

const Footer = () => {
  useEffect(() => {
    ScrollReveal().reveal(".footer", {
      distance: "20px",
      delay: 500,
    });
  })
  return (
    <div style={{ background: "#0E0E7A", marginTop:'20px' }} class="footer">
      <Container>
        <Box sx={{ width: "100%" }}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: {
                lg: "space-between",
                md: "space-between",
                sm: "space-between",
                xs: "center",
              },
              padding: "20px 0px",
            }}
          >
            <Box class="logo">
              <Box sx={{ width: "250px" }}>
                <img src={Logo} width={"100%"} alt="" />
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                padding: "0px 35px",
                marginTop: { xs: "20px" },
              }}
            >
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  gap: "15px",
                  alignItems: "center",
                }}
              >
                <li>
                  <a href="#" style={{ color: "#fff" }}>
                    <FacebookIcon
                      sx={{
                        "&:hover": { color: "#FFE092", transition: "0.5s" },
                        transition: "0.5s",
                      }}
                    />
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: "#fff" }}>
                    <TwitterIcon
                      sx={{
                        "&:hover": { color: "#FFE092", transition: "0.5s" },
                        transition: "0.5s",
                      }}
                    />
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: "#fff" }}>
                    <InstagramIcon
                      sx={{
                        "&:hover": { color: "#FFE092", transition: "0.5s" },
                        transition: "0.5s",
                      }}
                    />
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: "#fff" }}>
                    <YouTubeIcon
                      sx={{
                        "&:hover": { color: "#FFE092", transition: "0.5s" },
                        transition: "0.5s",
                      }}
                    />
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: "#fff" }}>
                    <PinterestIcon
                      sx={{
                        "&:hover": { color: "#FFE092", transition: "0.5s" },
                        transition: "0.5s",
                      }}
                    />
                  </a>
                </li>
              </ul>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
              padding: "10px 0px 50px 0px",
              borderBottom: "1px solid #9FB5FF",
            }}
          >
            <Box
              sx={{
                color: "#fff",
                padding: "0px 30px",
                mt: { lg: "0px", md: "0px", sm: "0px", xs: "20px" },
                textAlign: {
                  lg: "start",
                  md: "start",
                  sm: "start",
                  xs: "center",
                },
              }}
            >
              <Box
                sx={{
                  fontFamily: '"Outfit", serif',
                  fontWeight: "500",
                  fontSize: "20px",
                  marginBottom: "8px",
                }}
              >
                Company
              </Box>
              <Box>
                <Box sx={{'&:hover':{color:'#FFE092',transition:'0.5s'},transition:'0.5s'}}>About</Box>
                <Box sx={{'&:hover':{color:'#FFE092',transition:'0.5s'},transition:'0.5s'}}>Carrer</Box>
                <Box sx={{'&:hover':{color:'#FFE092',transition:'0.5s'},transition:'0.5s'}}>Blog</Box>
                <Box sx={{'&:hover':{color:'#FFE092',transition:'0.5s'},transition:'0.5s'}}>Press</Box>
                <Box sx={{'&:hover':{color:'#FFE092',transition:'0.5s'},transition:'0.5s'}}>ContactUs</Box>
              </Box>
            </Box>

            <Box
              sx={{
                color: "#fff",
                padding: "0px 30px",
                mt: { lg: "0px", md: "0px", sm: "0px", xs: "20px" },
                textAlign: {
                  lg: "start",
                  md: "start",
                  sm: "start",
                  xs: "center",
                },
              }}
            >
              <Box
                sx={{
                  fontFamily: '"Outfit", serif',
                  fontWeight: "500",
                  fontSize: "20px",
                  marginBottom: "8px",
                }}
              >
                Informations
              </Box>
              <Box>
                <Box sx={{'&:hover':{color:'#FFE092',transition:'0.5s'},transition:'0.5s'}}>How it Works</Box>
                <Box sx={{'&:hover':{color:'#FFE092',transition:'0.5s'},transition:'0.5s'}}>FAQs</Box>
                <Box sx={{'&:hover':{color:'#FFE092',transition:'0.5s'},transition:'0.5s'}}>Affilate Program</Box>
                <Box sx={{'&:hover':{color:'#FFE092',transition:'0.5s'},transition:'0.5s'}}>Privacy Policy</Box>
              </Box>
            </Box>

            <Box
              sx={{
                color: "#fff",
                padding: "0px 30px",
                mt: { lg: "0px", md: "0px", sm: "0px", xs: "20px" },
                textAlign: {
                  lg: "start",
                  md: "start",
                  sm: "start",
                  xs: "center",
                },
              }}
            >
              <Box
                sx={{
                  fontFamily: '"Outfit", serif',
                  fontWeight: "500",
                  fontSize: "20px",
                  marginBottom: "8px",
                }}
              >
                Services
              </Box>
              <Box>
                <Box sx={{'&:hover':{color:'#FFE092',transition:'0.5s'},transition:'0.5s'}}>Skill Exchange</Box>
                <Box sx={{'&:hover':{color:'#FFE092',transition:'0.5s'},transition:'0.5s'}}>Get New Skills</Box>
                <Box sx={{'&:hover':{color:'#FFE092',transition:'0.5s'},transition:'0.5s'}}>Terms & Conditions</Box>
              </Box>
            </Box>

            <Box
              sx={{
                color: "#fff",
                padding: "0px 30px",
                mt: { lg: "0px", md: "0px", sm: "0px", xs: "20px" },
                textAlign: {
                  lg: "start",
                  md: "start",
                  sm: "start",
                  xs: "center",
                },
              }}
            >
              <Box
                sx={{
                  fontFamily: '"Outfit", serif',
                  fontWeight: "500",
                  fontSize: "20px",
                  marginBottom: "8px",
                }}
              >
                User
              </Box>
              <Box>
                <Box sx={{'&:hover':{color:'#FFE092',transition:'0.5s'},transition:'0.5s'}}>Login</Box>
                <Box sx={{'&:hover':{color:'#FFE092',transition:'0.5s'},transition:'0.5s'}}>Sign In</Box>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              marginTop: "10px",
              padding: "30px 0px 30px 0px",
            }}
          >
            <Box
              sx={{
                color: "rgb(14, 14, 122)",
                textAlign: {
                  lg: "start",
                  md: "start",
                  sm: "start",
                  xs: "start",
                },
                fontSize: "14px",
                background: "#CDDFFF",
                width: {
                  lg: "calc(50% - 20px)",
                  md: "calc(50% - 20px)",
                  sm: "100%",
                  xs: "100%",
                },
                margin: "0px 10px",
                borderRadius: "5px",
                padding: "5px 10px",
                fontFamily: '"Outfit", serif ',
              }}
            >
              <Box>Platform is Owned by</Box>
              <Box>Ft. K N.</Box>
            </Box>
            <Box
              sx={{
                color: "#fff",
                // textAlign: { lg: "end", md: "end", sm: "center", xs: "start" },
                fontSize: "14px",
                width: {
                  lg: "calc(50% - 20px)",
                  md: "calc(50% - 20px)",
                  sm: "100%",
                  xs: "100%",
                },
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                padding: {
                  lg: "5px 10px",
                  md: "5px 10px",
                  sm: "5px 10px",
                  xs: "5px 0px",
                },
                margin: "0px 10px",
                justifyContent: "end",
                fontFamily: '"Outfit", serif ',
              }}
            >
              <Box sx={{ width: "100%", textAlign: {lg:'end',md:'end',sm:'end',xs:'center'} }}>
                Last Modified: Wednesday, 12 Feb, 2025 | Visitor Count: 0
              </Box>
              <Box sx={{ width: "100%", textAlign: {lg:'end',md:'end',sm:'end',xs:'center'} }}>
                © Copyright 2024 - All Rights Reserved
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Footer;
