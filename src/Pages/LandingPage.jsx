import React from "react";
import { Box, Button, Container } from "@mui/material";
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Hero from '../Landing/Hero'
import Explore from '../Landing/Explore'

const LandingPage = () => {
  return (
    <div>
      <Header/>
        <Hero/>
        <Explore/>
      <Footer/>
    </div>
  );
};

export default LandingPage;