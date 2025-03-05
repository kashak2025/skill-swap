import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import { Box, Button, Container, TextField } from '@mui/material'
import { useFormik } from 'formik'
import VDO1 from '../images/signup.mp4'
const Signup = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      contact: '',
    },
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      resetForm()
    },
  });
  return (
    <div>
      <Header />
      <Box>
        <Container>
          <Box sx={{ width: '100%', display: 'flex',mt:'60px',px:{lg:'180px',md:'90px', sm:'0px'},justifyContent:'center' }}>
            <Box sx={{ width: '40%', height:{lg:'500px',md:'500px',sm:"454px",xs:'0'},display:{lg:"block",md:'block',sm:"block",xs:'none'}}}>
                <video width={"100%"} style={{borderRadius:'50px 0px 0px 50px'}} height={"100%"} autoPlay loop muted>
                  <source src={VDO1} width={"100%"} height={"100%"} type='video/mp4' muted autoPlay loop />
                </video>
            </Box>
            <Box sx={{ width: '60%', background:'#97C0F1',display:'flex',alignItems:'center', borderRadius:{lg:"0px 50px 50px 0px",md:"0px 50px 50px 0px",sm:'0px 50px 50px 0px',xs:'10px'},borderLeft:'1px solid #0A0A7E'}}>
              <Box sx={{ width: '100%' }}>
                <form onSubmit={formik.handleSubmit}>
                  <Box sx={{ width: '100%', padding: '30px 15px', display: 'flex', justifyContent: 'center' }}>
                    <Box sx={{width:'250px', padding:'20px 15px',display:'flex',justifyContent:'center',flexWrap:'wrap'}}>
                      <TextField
                        variant='standard'
                        label='First Name'
                        name="firstName"
                        type="text"
                        sx={{borderBottom:'1px solid #ffffff',color:'#ffffff'}}
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                      />
                      <TextField
                        variant='standard'
                        label='Last Name'
                        name="lastName"
                        type="text"
                        sx={{borderBottom:'1px solid #ffffff'}}
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                      />
                      <TextField
                        variant='standard'
                        label='Email'
                        name="email"
                        type="email"
                        sx={{borderBottom:'1px solid #ffffff'}}
                        onChange={formik.handleChange}
                        value={formik.values.email}
                      />
                      <TextField
                        variant='standard'
                        label='Contact'
                        name="contact"
                        type="number"
                        sx={{borderBottom:'1px solid #ffffff'}}
                        onChange={formik.handleChange}
                        value={formik.values.contact}
                      />
                      <TextField
                        variant='standard'
                        label='Skills'
                        name="skills"
                        type="text"
                        sx={{borderBottom:'1px solid #ffffff'}}
                        onChange={formik.handleChange}
                        value={formik.values.contact}
                      />
                      <Box sx={{display:'flex',justifyContent:'center',width:'100%'}}>
                        <Button variant="contained" type='submit' sx={{'&:hover':{boxShadow:'2px 2px #905A63'},mt:'10px',textTransform:'capitalize',background:'#0A0A7E',borderRadius:"20px",fontFamily:'"Outfit",serif',fontSize:"15px"}}>
                          Submit
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </form>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <Footer />
    </div>
  )
}

export default Signup
