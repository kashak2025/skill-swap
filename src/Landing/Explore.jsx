import { Box, Button, Container, dialogClasses } from "@mui/material";
import React, { useEffect } from "react";
import { NavLink } from "react-router";
import ScrollReveal from "scrollreveal";
import img1 from "../images/explore1.webp";
import img2 from "../images/explore2.webp";
import img3 from "../images/explore3.webp";
import img4 from "../images/explore4.webp";
const Explore = () => {
  useEffect(() => {
    ScrollReveal().reveal(".explore", {
      distance: "20px",
      delay: 500,
    });
  }, []);
  let data = [
    {
      image: img1,
      enrolled: "1200",
      title: "publish your Website on Github....",
      teacher: "Miss. Eda",
      path: "/market",
    },
    {
      image: img2,
      enrolled: "1800",
      title: "Beginners Guide to Adobe After Effects: Learn Motion Graphics",
      teacher: "Hongshu Guo",
      path: "/market",
    },
    {
      image: img3,
      enrolled: "2000",
      title: "Learn Guitar: The Complete Beginners Guide",
      teacher: "Marc Barnacle",
      path: "/market",
    },
    {
      image: img4,
      enrolled: "3600",
      title:
        "Social Media Content Creation in Canva: From Beginner to Advanced",
      teacher: "Maggie Stara",
      path: "/market",
    },
  ];
  return (
    <div className="explore">
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
              {data.map((el, i) => {
                return (
                  // <div style={{color:'#000'}}> {el.title} </div>
                  <Box
                    sx={{
                      width: {
                        lg: "calc(25% - 10px)",
                        md: "calc(25% - 10px)",
                        sm: "calc(50% - 10px)",
                        xs: "calc(100% - 10px)",
                      },
                      padding: "10px 5px 0px 5px",
                    }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        display: "block",
                        height: "160px",
                        position: "relative",
                      }}
                    >
                      <img
                        src={el.image}
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
                          {el.enrolled}
                        </span>
                      </Box>
                      <Box
                        sx={{
                          fontSize: "20px",
                          p: "0px 10px 10px 10px",
                          fontFamily: '"Outfit",serif',
                        }}
                      >
                        y
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          width: "100%",
                          padding: "0px 10px 10px 10px",
                        }}
                      >
                        <Box sx={{ fontSize: "14px" }}>Miss. Eda</Box>
                        <Box
                          sx={{
                            "&:hover": {
                              transform: "rotateY(360deg)",
                              transition: "0.5s",
                            },
                          }}
                        >
                          <Button
                            sx={{
                              "&:hover": { boxShadow: "3px 3px #CDDFFF" },
                              padding: "5px 10px",
                              background: "#0A0A7E",
                              borderRadius: "50px",
                              transition: "0.5s",
                            }}
                          >
                            <NavLink to={"/market"}>
                              <Box
                                sx={{
                                  color: "#fff",
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
                );
              })}
              {/* <Box
                sx={{
                  width: {
                    lg: "calc(25% - 10px)",
                    md: "calc(25% - 10px)",
                    sm: "calc(50% - 10px)",
                    xs: "calc(100% - 10px)",
                  },
                  padding: "10px 5px 0px 5px",
                }}
              >
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
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      padding: "0px 10px 10px 10px",
                    }}
                  >
                    <Box sx={{ fontSize: "14px" }}>Miss. Eda</Box>
                    <Box sx={{'&:hover':{transform:'rotateY(360deg)',transition:'0.5s'}}}>
                      <Button
                        sx={{
                          "&:hover": { boxShadow: "3px 3px #CDDFFF" },
                          padding: "5px 10px",
                          background: "#0A0A7E",
                          borderRadius: "50px",
                          transition: "0.5s",
                        }}
                      >
                        <NavLink to={'/market'}>
                          <Box
                            sx={{
                              color: "#fff",
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
              </Box> */}
              {/* <Box
                sx={{
                  width: {
                    lg: "calc(25% - 10px)",
                    md: "calc(25% - 10px)",
                    sm: "calc(50% - 10px)",
                    xs: "calc(100% - 10px)",
                  },
                  padding: "10px 5px 0px 5px",
                }}
              >
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
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      padding: "0px 10px 10px 10px",
                    }}
                  >
                    <Box sx={{ fontSize: "14px" }}>Miss. Eda</Box>
                    <Box>
                      <Button
                        sx={{
                          "&:hover": { boxShadow: "3px 3px #CDDFFF" },
                          padding: "5px 10px",
                          background: "#0A0A7E",
                          borderRadius: "50px",
                          transition: "0.5s",
                        }}
                      >
                        <NavLink to={'/market'}>
                          <Box
                            sx={{
                              color: "#fff",
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
              <Box
                sx={{
                  width: {
                    lg: "calc(25% - 10px)",
                    md: "calc(25% - 10px)",
                    sm: "calc(50% - 10px)",
                    xs: "calc(100% - 10px)",
                  },
                  padding: "10px 5px 0px 5px",
                }}
              >
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
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      padding: "0px 10px 10px 10px",
                    }}
                  >
                    <Box sx={{ fontSize: "14px" }}>Miss. Eda</Box>
                    <Box>
                      <Button
                        sx={{
                          "&:hover": { boxShadow: "3px 3px #CDDFFF" },
                          padding: "5px 10px",
                          background: "#0A0A7E",
                          borderRadius: "50px",
                          transition: "0.5s",
                        }}
                      >
                        <NavLink to={'/market'}>
                          <Box
                            sx={{
                              color: "#fff",
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
              <Box
                sx={{
                  width: {
                    lg: "calc(25% - 10px)",
                    md: "calc(25% - 10px)",
                    sm: "calc(50% - 10px)",
                    xs: "calc(100% - 10px)",
                  },
                  padding: "10px 5px 0px 5px",
                }}
              >
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
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      padding: "0px 10px 10px 10px",
                    }}
                  >
                    <Box sx={{ fontSize: "14px" }}>Miss. Eda</Box>
                    <Box>
                      <Button
                        sx={{
                          "&:hover": { boxShadow: "3px 3px #CDDFFF" },
                          padding: "5px 10px",
                          background: "#0A0A7E",
                          borderRadius: "50px",
                          transition: "0.5s",
                        }}
                      >
                        <NavLink to={'/market'}>
                          <Box
                            sx={{
                              color: "#fff",
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
              <Box
                sx={{
                  width: {
                    lg: "calc(25% - 10px)",
                    md: "calc(25% - 10px)",
                    sm: "calc(50% - 10px)",
                    xs: "calc(100% - 10px)",
                  },
                  padding: "10px 5px 0px 5px",
                }}
              >
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
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      padding: "0px 10px 10px 10px",
                    }}
                  >
                    <Box sx={{ fontSize: "14px" }}>Miss. Eda</Box>
                    <Box>
                      <Button
                        sx={{
                          "&:hover": { boxShadow: "3px 3px #CDDFFF" },
                          padding: "5px 10px",
                          background: "#0A0A7E",
                          borderRadius: "50px",
                          transition: "0.5s",
                        }}
                      >
                        <NavLink to={'/market'}>
                          <Box
                            sx={{
                              color: "#fff",
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
              <Box
                sx={{
                  width: {
                    lg: "calc(25% - 10px)",
                    md: "calc(25% - 10px)",
                    sm: "calc(50% - 10px)",
                    xs: "calc(100% - 10px)",
                  },
                  padding: "10px 5px 0px 5px",
                }}
              >
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
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      padding: "0px 10px 10px 10px",
                    }}
                  >
                    <Box sx={{ fontSize: "14px" }}>Miss. Eda</Box>
                    <Box>
                      <Button
                        sx={{
                          "&:hover": { boxShadow: "3px 3px #CDDFFF" },
                          padding: "5px 10px",
                          background: "#0A0A7E",
                          borderRadius: "50px",
                          transition: "0.5s",
                        }}
                      >
                        <NavLink to={'/market'}>
                          <Box
                            sx={{
                              color: "#fff",
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
              <Box
                sx={{
                  width: {
                    lg: "calc(25% - 10px)",
                    md: "calc(25% - 10px)",
                    sm: "calc(50% - 10px)",
                    xs: "calc(100% - 10px)",
                  },
                  padding: "10px 5px 0px 5px",
                }}
              >
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
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      padding: "0px 10px 10px 10px",
                    }}
                  >
                    <Box sx={{ fontSize: "14px" }}>Miss. Eda</Box>
                    <Box>
                      <Button
                        sx={{
                          "&:hover": { boxShadow: "3px 3px #CDDFFF" },
                          padding: "5px 10px",
                          background: "#0A0A7E",
                          borderRadius: "50px",
                          transition: "0.5s",
                        }}
                      >
                        <NavLink to={'/market'}>
                          <Box
                            sx={{
                              color: "#fff",
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
              <Box
                sx={{
                  width: {
                    lg: "calc(25% - 10px)",
                    md: "calc(25% - 10px)",
                    sm: "calc(50% - 10px)",
                    xs: "calc(100% - 10px)",
                  },
                  padding: "10px 5px 0px 5px",
                }}
              >
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
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      padding: "0px 10px 10px 10px",
                    }}
                  >
                    <Box sx={{ fontSize: "14px" }}>Miss. Eda</Box>
                    <Box>
                      <Button
                        sx={{
                          "&:hover": { boxShadow: "3px 3px #CDDFFF" },
                          padding: "5px 10px",
                          background: "#0A0A7E",
                          borderRadius: "50px",
                          transition: "0.5s",
                        }}
                      >
                        <NavLink to={'/market'}>
                          <Box
                            sx={{
                              color: "#fff",
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
              </Box> */}
            </Box>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default Explore;
