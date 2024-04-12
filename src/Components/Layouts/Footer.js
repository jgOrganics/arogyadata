
import React from 'react'
import { Typography, Box } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
export const Footer = () => {
    return (
        <>
            <Box sx={{ textAlign: "center", bgcolor: 'black', color: "white", p: 3 }}>

                <Box sx={{
                    my: 3, "& svg":

                    {
                        fontSize: "60px",
                        cursor: "pointer",
                        mr: 2
                    },
                    "& svg:hover": {
                        color: 'goldenrod',
                        transform: "translateX(5px)",
                        transition: 'all 400ms'
                    }
                }}  >
                    <InstagramIcon />
                    <TwitterIcon />
                    <FacebookIcon />
                    <YouTubeIcon />

                </Box>
                <Typography variant='h5' sx={{
                    "@media (max-width:600px)":
                    {
                        fontSize: "1rem",
                    }
                }}>
                    All Rights Reserved &copy; Texiri Solutions
                </Typography>
            </Box>
        </>


    )
}

export default Footer