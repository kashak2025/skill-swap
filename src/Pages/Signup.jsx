import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import { Box, Button, Container, TextField } from '@mui/material'
import { useFormik } from 'formik'
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
          <Box sx={{ width: '100%', display: 'flex' }}>
            <Box sx={{ width: '30%' }}>
                <video>
                  <source src="../images/signup.mp4" type='video/mp4' muted autoPlay loop />
                </video>
            </Box>
            <Box sx={{ width: '70%' }}>
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
