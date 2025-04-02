import React from "react";
import { useEffect } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Img1 from "../images/4.jpeg";
import { Box, Button, Container, TextField } from "@mui/material";
import ScrollReveal from "scrollreveal";
import { useFormik } from "formik";
const Contact = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
    },
  });
  useEffect(() => {
    ScrollReveal().reveal(".right", {
      distance: "200px",
      opacity: 0,
      origin: "right",
      delay: 1000,
      transition: "5000",
    });
  }, []);
  return (
    <div>
      <Header />
      <Box sx={{ mt: "74px", position: "relative" }}>
        <Box>
          <img src={Img1} width={"100%"} alt="" />
        </Box>
        <Box
          sx={{
            width: "100%",
            height:"100%",
            display:'flex',
            flexDirection:'column',
            alignItems:"center",
            justifyContent:'start',
            position: "absolute",
            background: "#ffffff4d",
            backdropFilter: "blur(5px)",
            color: "#0A0A7E",
            fontSize: "40px",
            fontFamily: '"Outfit",serif',
            fontWeight: "600",
            top: "0px",
          }}
        >
          <Box>Contact Us</Box>
          <Box sx={{padding:"0px 10px"}}>
            <Box sx={{ width: "100%" }}>
              <form onSubmit={formik.handleSubmit}>
                <Box
                  sx={{
                    width: "100%",
                    padding: "0px 15px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: "250px",
                      padding: "20px 15px",
                      display: "flex",
                      justifyContent: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <TextField
                      variant="standard"
                      label="Email"
                      name="email"
                      type="text"
                      sx={{
                        borderBottom: "1px solid #ffffff",
                        color: "#ffffff",
                      }}
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                    <TextField
                      variant="standard"
                      label="Password"
                      name="password"
                      type="text"
                      sx={{ borderBottom: "1px solid #ffffff" }}
                      onChange={formik.handleChange}
                      value={formik.values.password}
                    />
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <Button
                        variant="contained"
                        type="submit"
                        sx={{
                          "&:hover": { boxShadow: "2px 2px #905A63" },
                          mt: "20px",
                          ml:"10px",
                          textTransform: "capitalize",
                          background: "#0A0A7E",
                          borderRadius: "20px",
                          fontFamily: '"Outfit",serif',
                          fontSize: "15px",
                        }}
                      >
                        Submit
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </form>
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default Contact;
