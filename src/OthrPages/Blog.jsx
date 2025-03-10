import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import { Box } from '@mui/material'

const Blog = () => {
  return (
    <div>
      <Header/>
      <Box sx={{mt:'90px'}}>
        Blog
      </Box>
      <Footer/>
    </div>
  )
}

export default Blog
