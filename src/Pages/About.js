
import React from 'react'
import Layout from '../Components/Layouts/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
    return (
        <Layout>
            <Box sx={{
                my: 15,
                textAlign: 'center',
                p: 2,
                "& h4": {
                    fontWeight: "bold",
                    my: 2,
                    fontSize: "2rem"

                },
                "& p": {
                    textAlign: "justify"
                },
                "@media (max-width:600px)": {
                    mt: 0,
                    "& h4": {
                        fontSize: "1.5rem"
                    }
                }
            }}>
                <Typography variant='h4'>
                    Welcome To Arogyadata
                </Typography>
                <p>
                orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
                <br />
                <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
            </Box>
            {/* <div>About Page</div> */}
        </Layout>

    )
}

export default About