import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Container } from '@mui/material'

const Faqs = () => {
  return (
    <div>
      <Header />
      <Box sx={{ mt: '74px', background:'#0A0A7E' }}>
        <Container>
          <Box sx={{width:'100%', padding:'0px 15px'}}>
            <Box sx={{color:'#fff',mb:'20px', pt:"20px",fontSize:'30px',fontFamily:'"Outfit",serif',fontWeight:'700'}}>
              Frequenty Asked Questions
            </Box>
            <Box sx={{pb:"20px"}}>
              <Accordion sx={{background:'transparent', color:'#fff'}}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography sx={{fontSize:'20px'}} >What is Skill Swap India?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                Skill Swap India is a platform where individuals can exchange their skills for free. Instead of paying money for learning or teaching, users can offer their expertise in one area and receive expertise in another. It’s all about community collaboration, learning, and sharing!
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{background:'transparent', color:'#fff'}}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <Typography sx={{fontSize:'20px'}}>Accordion 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
              </Accordion>
              <Accordion defaultExpanded sx={{background:'transparent', color:'#fff'}}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3-content"
                  id="panel3-header"
                >
                  <Typography sx={{fontSize:'20px'}}>Accordion 3</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{background:'transparent', color:'#fff'}}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4-content"
                  id="panel4-header"
                >
                  <Typography sx={{fontSize:'20px'}}>Accordion 4</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
              </Accordion>
            </Box>
          </Box>
        </Container>
      </Box>
      <Footer />
    </div>
  )
}

export default Faqs
