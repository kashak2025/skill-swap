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
                  <Typography sx={{fontSize:'20px'}}>How does Skill Swap India work?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  Once you sign up on our platform, you can create a profile highlighting the skills you are willing to offer and the skills you'd like to learn. Browse other users' profiles, connect with those whose skills align with what you're looking to learn, and start a conversation to arrange a skill exchange.
                </AccordionDetails>
              </Accordion>
              <Accordion defaultExpanded sx={{background:'transparent', color:'#fff'}}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3-content"
                  id="panel3-header"
                >
                  <Typography sx={{fontSize:'20px'}}>Is it completely free to use?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  Yes! Skill Swap India is 100% free. There are no hidden charges or fees for signing up or using the platform. The goal is to encourage learning and sharing knowledge without any monetary transactions.
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{background:'transparent', color:'#fff'}}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4-content"
                  id="panel4-header"
                >
                  <Typography sx={{fontSize:'20px'}}>Do I have to be an expert in my skill to offer it?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                Not at all! Whether you're a beginner or an advanced learner, you can offer your skills. The platform is designed to help people at all levels share and learn from each other.
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{background:'transparent', color:'#fff'}}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel5-content"
                  id="panel5-header"
                >
                  <Typography sx={{fontSize:'20px'}}>What kind of skills can I offer or request?</Typography>
                </AccordionSummary>
                <AccordionDetails>You can offer or request a wide range of skills, such as language learning, coding, cooking, photography, art, music, writing, digital marketing, gardening, public speaking, and much more! If you have a skill to share, there’s likely someone looking to learn it.</AccordionDetails>
              </Accordion>
              <Accordion sx={{background:'transparent', color:'#fff'}}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel6-content"
                  id="panel6-header"
                >
                  <Typography sx={{fontSize:'20px'}}>What kind of skills can I offer or request?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                You can offer or request a wide range of skills, such as language learning, coding, cooking, photography, art, music, writing, digital marketing, gardening, public speaking, and much more! If you have a skill to share, there’s likely someone looking to learn it.
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
