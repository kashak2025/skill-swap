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
          <Box sx={{ width: '100%', display: 'flex',mt:'20px' }}>
            <Box sx={{ width: '40%'}}>
                <video width={"100%"} style={{borderRadius:'50px 0px 0px 50px'}} height={"100%"} autoPlay loop muted>
                  <source src={VDO1} width={"100%"} height={"100%"} type='video/mp4' muted autoPlay loop />
                </video>
            </Box>
            <Box sx={{ width: '60%', background:'#0A0A7E', borderRadius:'0px 50px 50px 0px' }}>
              <Box sx={{ width: '100%' }}>
                <form onSubmit={formik.handleSubmit}>
                  <Box sx={{ width: '100%', padding: '30px 15px', display: 'flex', justifyContent: 'center' }}>
                    <Box sx={{width:'250px', padding:'0px 15px'}}>
                      <TextField
                        variant='standard'
                        label='First Name'
                        name="firstName"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                      />
                      <TextField
                        variant='standard'
                        label='Last Name'
                        name="lastName"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                      />
                      <TextField
                        variant='standard'
                        label='Email'
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                      />
                      <Button variant="contained" type='submit'>
                        Submit
                      </Button>
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
