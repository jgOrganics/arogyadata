
import React from 'react'
import Layout from '../Components/Layouts/Layout'
import { Typography, Box, TableContainer, TableHead, TableRow, TableCell, Table, Paper,TableBody } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
const Contact = () => {
  return (
    <Layout>
      <Box sx={{
        my: 5, ml: 10, "& h4": { fontWeight: 'bold', mb: 2 },
        "& p": { fontWeight: "1.3rem" }
      }}>
        <Typography variant='h4'>Contact Us</Typography>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </Box>
      <Box  sx={{m:3,width:"600px",ml:10,
        "@media (max-width:600px)":{
          width :"300px"
        }
    }}  >
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
          <TableHead >
              <TableRow>
                <TableCell sx={{bgcolor:'black',color:'white'}} align='center'>
                        Contact Details
                </TableCell>
              </TableRow>
              </TableHead>
              <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> 123455668(TollFree)
                </TableCell>
              </TableRow>
            
              <TableRow>
                <TableCell>
                  <MailIcon sx={{ color: "skyblue", pt: 1 }} /> help@MyRest.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "green", pt: 1 }} /> 879294768
                </TableCell>
              </TableRow>
              </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  )
}

export default Contact