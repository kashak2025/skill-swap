import { Box, Button, Container } from "@mui/material";
import React from "react";
import { NavLink } from "react-router";

const Explore = () => {
  return (
    <div>
      <Box sx={{ mt: "30px", background: "#0A0A7E" }}>
        <Container>
          <Box sx={{ py: "50px" }}>
            <Box sx={{ width: "100%", textAlign: "center" }}>
              <Box
                sx={{
                  fontFamily: '"Outfit",serif',
                  fontSize: "34px",
                  fontWeight: "500",
                  color: "#CDDFFF",
                }}
              >
                Discover the Trending classes that can expand your knowledge.
              </Box>
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                py: "40px",
                px: "15px",
              }}
            >
              <Box sx={{ width: "25%" }}>
                <Box
                  sx={{
                    width: "100%",
                    display: "block",
                    height: "160px",
                    position: "relative",
                  }}
                >
                  <img
                    src="https://static.skillshare.com/uploads/video/thumbnails/1da178031336067d3c47955c08f397f8/448-252"
                    style={{
                      backgroundSize: "cover",
                      position: "absolute",
                      borderRadius: "10px 10px 0px 0px",
                    }}
                    width={"100%"}
                    height={"100%"}
                    alt=""
                  />
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    background: "#fff",
                    borderRadius: "0px 0px 10px 10px",
                  }}
                >
                  <Box sx={{ p: "10px 10px 0px 10px", fontSize: "14px" }}>
                    Enrolled Students{" "}
                    <span
                      style={{
                        fontFamily: '"Outfit",serif',
                        fontWeight: "600",
                      }}
                    >
                      1200
                    </span>
                  </Box>
                  <Box
                    sx={{
                      fontSize: "20px",
                      p: "0px 10px 10px 10px",
                      fontFamily: '"Outfit",serif',
                    }}
                  >
                    Publish your website on Github...
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box>Miss. Eda</Box>
                    <Box>
                      <Button>
                        <NavLink>
                          <Box
                            sx={{
                              color: "#0A0A7E",
                              textTransform: "capitalize",
                            }}
                          >
                            Enroll Now
                          </Box>
                        </NavLink>
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ width: "25%" }}>Box1</Box>
              <Box sx={{ width: "25%" }}>Box1</Box>
              <Box sx={{ width: "25%" }}>Box1</Box>
              <Box sx={{ width: "25%" }}>Box1</Box>
              <Box sx={{ width: "25%" }}>Box1</Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default Explore;
