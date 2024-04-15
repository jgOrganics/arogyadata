
import { AppBar, Box, Drawer, IconButton, Toolbar, Typography, Divider, TextField } from '@mui/material'
import React from 'react';
// import FastfoodIcon from "@mui/icons-material/Fastfood";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, } from 'react-router-dom';
import Logo from "../../images/arogyadata.png";
import "../../Styles/HeaderStyle.css";
import { useState } from 'react';
import CartBtn from '../CartBtn';

const Header = () => {

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", mr:8 }}>
      <Typography
        color={"goldenrod"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}
      >
        <img
          src={Logo}
          alt="logo" height={"70"} width="100" />
        <Typography color={'goldenrod'} variant='h6' component="div"
          sx={{ flexGrow: 1 }}
        >
          {/* <FastfoodIcon /> */}
           ArogyaData
         </Typography>
      </Typography>
      <TextField
        label="Search"
        variant="outlined"
        // value={searchText}
        // onChange={handleSearchChange}
        sx={{ width: '300px' }}
        InputLabelProps={{ style: { color: '#fff'  } }} // Set label color here
        style={{
          borderColor:'#fff' ,
          color:  '#fff',
          marginTop: '10px', marginLeft: "1000px",
        }}
      />
      <Divider />
      <ul className="mobile-navigation">
        <li>
          <Link
            activeClassName="active"
            to={"/"}
          >
            Home
          </Link>
        </li>
        <li>
          <Link to={"/gift"}>Gift</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
        {/* <CartBtn/> */}
      </ul>
    </Box>
  );

  return (
    <>
      <Box>
      <AppBar component={'nav'} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge="start"
              sx={{ mr: 2, display: { sm: "none" } }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography color={'goldenrod'} variant='h6' component="div"
              sx={{ flexGrow: 1 }
              }
            >

              {/* <FastfoodIcon /> */}
              <img
                src={Logo}
                alt="logo" height={"70"} width="100" />
              {/* Arogyadata */}
            </Typography>
            <TextField
              label="Search"
              variant="outlined"
              // value={searchText}
              // onChange={handleSearchChange}
              sx={{ width: '200px' }}
              InputLabelProps={{ style: { color: '#fff' } }} // Set label color here
              style={{
                borderColor: '#fff',
                color: '#fff',
                marginTop: '10px', marginLeft: "100px",
              }}
            />
             <CartBtn/>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <ul className="navigation-menu">
                <li>
                  <Link to={"/"}
                    activeClassName="active"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link to={"/gift"}>Gift a tree</Link>
                </li>
                <li>
                  <Link to={"/about"}>About</Link>
                </li>
                <li>
                  <Link to={"/contact"}>Contact</Link>
                </li>
              
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer variant='temporary'
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: 'block', sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "200px",
              },
            }}>
            {drawer}
          </Drawer>
        </Box>
        {/* <Box>
          <Toolbar />
        </Box> */}
        <Toolbar />
      </Box>
    </>
  )
}

export default Header