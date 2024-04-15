import React, { useEffect, useState } from 'react'
import {
  Link, Button, Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Paper,
  Rating
} from '@mui/material';
import Banner from "../images/banner.jpg";
import '../Styles/HomeStyle.css';
import Layout from '../Components/Layouts/Layout';
import { MenuList } from "../Data/data";
import { GodMenuList } from "../Data/data_god";
import DATA from "../Data/data_trend";
import SwipeableViews from 'react-swipeable-views';
// import { Paper } from '@material-ui/core';
import { useTheme } from '@mui/material/styles';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { autoPlay } from 'react-swipeable-views-utils';
import MobileStepper from '@mui/material/MobileStepper';
// import { Rating } from '@material-ui/lab';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'Ayush K',
    rewiew: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Akshya K',
    rewiew: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",

    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'John Gorge',
    rewiew: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",

    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
  },
  {
    label: 'Michael Goerge',
    rewiew: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",

    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];
const Home = () => {

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  const [value, setValue] = React.useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const navigate = useNavigate();


  const handleClick = () => {
    // Navigate to the desired route when the button is clicked
    navigate('/products');
  };

  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  // const api = "http://localhost:3000/data";

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(api);
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       const jsonData = await response.json();
  //       setData(jsonData);
  //     } catch (error) {
  //       setError(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);
  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }


  return (
    <Layout>
      <Box
        className="home"
        style={{
          backgroundImage: `url(${Banner})`,
        }}
      >
        <Box className='headerContainer'>
          <Typography
            variant='h1'
            color={"white"}
            sx={
              {
                ml: 2
              }
            }
          >
            Grow Together
          </Typography >
          <Typography
            sx={{
              ml: 2,
              marginBlock: 2,
            }}
            variant='h4' color={"white"}

          >It is always available to anyone, but the majority have suffered alteration in some form by  humour.</Typography>
          {/* <Link to="/gift" > */}
          <Button
            sx={
              {
                ml: 2
              }
            }
            variant='contained' size='large'
            onClick={handleClick}
          >
            GIFT NOW
          </Button>

          {/* </Link> */}
        </Box>
      </Box>
      <Box sx={{
        my: 7,
        ml: 13,
        textAlign: 'left',
        p: 2,
        "& h4": {
          fontWeight: "bold",
          my: 2,
          fontSize: "2rem"

        },

        "@media (max-width:600px)": {
          mt: 0,
          mb: 2,
          ml: 18,
          "& h4": {
            fontSize: "1.5rem",

          }
        }
      }}>
        <Typography variant='h4'>
          Categories
        </Typography>
      </Box>

      <Box sx={{
        display: "flex", flexWrap: "wrap", justifyContent: "center",
        "@media (max-width:600px)": {
          mt: 0,
          "& h4": {
            fontSize: "1.5rem"
          }
        }
      }}>
        {MenuList.map((menu) => (
          <Card sx={{
            // border: 1,
            // borderRadius: 5,
            maxWidth: "300px", display: "flex", m: 2,
          }}>
            <CardActionArea>
              <CardMedia
                sx={{
                  minHeight: "100px",
                  alignContent: "center",
                }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {menu.name}
                </Typography>
                <Typography variant="body2">{menu.description}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>

      <Box sx={{
        my: 7,
        ml: 12,
        textAlign: 'left',
        p: 2,
        "& h4": {
          fontWeight: "bold",
          my: 2,
          fontSize: "2rem"

        },

        "@media (max-width:600px)": {
          mt: 0,
          "& h4": {
            fontSize: "1.5rem"
          }
        }
      }}>
        <Typography variant='h4'>
          Trending Trees
        </Typography>
      </Box>

      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {DATA.map((menu) => (
          <Link to="/products">
            <Card sx={{
              // border: 1,
              // borderRadius: 5,
              maxWidth: "300px", display: "flex", m: 2,
            }}>
              <CardActionArea>
                <CardMedia
                  sx={{
                    minHeight: "100px",
                    alignContent: "center",
                  }}
                  component={"img"}
                  onClick={handleClick}
                  src={menu.image}
                  alt={menu.name}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom component={"div"}>
                    {menu.name}
                  </Typography>
                  <Typography variant="h5" gutterBottom component={"div"}>
                    ₹{menu.price}
                  </Typography>
                  <Typography variant="h6" gutterBottom component={"div"}>
                    {menu.ratings}
                  </Typography>
                  <Typography variant="body2">{menu.description}</Typography>

                  <NavLink to={`/products/${menu.id}`}

                  >
                    <Button variant='outlined'>Buy Now
                    </Button>
                  </NavLink>

                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        ))}
      </Box>

      <Box sx={{
        my: 7,
        ml: 12,
        textAlign: 'left',
        p: 2,
        "& h4": {
          fontWeight: "bold",
          my: 2,
          fontSize: "2rem"

        },

        "@media (max-width:600px)": {
          mt: 0,
          my: 2,
          m: 2,
          "& h4": {
            fontSize: "1.5rem"
          }
        }
      }}>
        <Typography variant='h4'>
          Tree Plantaion Gift for God(hike)
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {GodMenuList.map((menu) => (
          <Link to="/products">
            <Card sx={{
              // border: 1,
              // borderRadius: 5,
              maxWidth: "400px", display: "flex", m: 2,
            }}>
              <CardActionArea>
                <CardMedia
                  sx={{
                    minHeight: "100px",
                    alignContent: "center",
                  }}
                  component={"img"}
                  onClick={handleClick}
                  src={menu.image}
                  alt={menu.name}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom component={"div"}>
                    {menu.name}
                  </Typography>
                  <Typography variant="h5" gutterBottom component={"div"}>
                    ₹{menu.price}
                  </Typography>
                  <Typography variant="h6" gutterBottom component={"div"}>
                    {menu.ratings}
                  </Typography>
                  <Typography variant="body2">{menu.description}</Typography>
                  <NavLink to={`/products/${menu.id}`} >
                    <Button variant='outlined'>Buy Now
                    </Button>
                  </NavLink>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        ))}
      </Box>

      <Box sx={{
        my: 7,
        // ml: 25,
        textAlign: 'center',
        p: 2,
        "& h4": {
          fontWeight: "bold",
          my: 2,
          fontSize: "2rem"
        },
        "@media (max-width:600px)": {
          mt: 0,
          mb: 2,
          // ml:10,
          "& h4": {
            fontSize: "1.5rem",

          }
        }
      }}
      >
        <Typography variant='h4'>
          Let customers speak for us
        </Typography>
      </Box>
      <Box sx={{
        maxWidth: 400, flexGrow: 1,
        my: 7,
        ml: 70,
        textAlign: 'center',
        p: 2,
        "& h4": {
          fontWeight: "bold",
          my: 2,
          fontSize: "2rem"

        },
        "@media (max-width:600px)": {
          mt: 0,
          mb: 2,
          ml: 2,
          "& h4": {
            fontSize: "1.5rem",

          }
        }

      }}>
        <Paper
          square
          elevation={0}
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: 50,
            pl: 2,
            bgcolor: 'background.default',
          }}
        >
          <Typography>{images[activeStep].label}</Typography>
          <Typography>{images[activeStep].rewiew}</Typography>

        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (

                <Rating
                  name="rating-bar"
                  value={value}
                  onChange={handleChange}
                  precision={0.5} // Allow half star rating
                />
                // </Box>
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Box>
    </Layout>
  )
}

export default Home;


// 32464 2448