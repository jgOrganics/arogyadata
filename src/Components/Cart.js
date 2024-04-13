import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { delItem } from '../redux/actions/index'
import { NavLink } from 'react-router-dom'
import { Box, Button, Container, IconButton, Typography } from '@mui/material'
import CloseIcon from "@mui/icons-material/Close";
import Layout from './Layouts/Layout'

const Cart = () => {
    const state = useSelector((state) => state.addItem)
    const dispatch = useDispatch()

    const handleClose = (item) => {
        dispatch(delItem(item))
    }

    const cartItems = (cartItem) => {
        return (
            <Box
                sx={{ px: 4, my: 5, bgcolor: "lightgrey", borderRadius: 3 }}
                key={cartItem.id}
            >
                <Box sx={{ py: 4 }}>
                    <IconButton
                        sx={{ float: "right" }}
                        onClick={() => handleClose(cartItem)}
                        aria-label="Close"
                    >
                        <CloseIcon />
                    </IconButton>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Box sx={{ width: 180 }}>
                            <img
                                src={cartItem.image}
                                alt={cartItem.name}
                                height="200px"
                                width="180px"
                            />
                        </Box>
                        <Box sx={{ flexGrow: 1, ml: 5 }}>
                            <Typography variant="h3" gutterBottom>
                                {cartItem.name}
                            </Typography>
                            <Typography variant="body1" gutterBottom fontWeight="bold">
                                ${cartItem.price}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        );
    }

    const emptyCart = () => {
        return (
            // <div className="px-4 my-5 bg-light rounded-3 py-5">
            //     <div className="container py-4">
            //         <div className="row">
            //             <h3>Your Cart is Empty</h3>
            //         </div>
            //         </div>
            //     </div>
            <Box
                sx={{
                    px: 4,
                    my: 5,

                    bgcolor: "background.paper",
                    borderRadius: 3,
                    py: 5,
                }}
            >
                <Box sx={{ container: true, py: 4 }}>
                    <Typography variant="h3" gutterBottom>
                        Your Cart is Empty
                    </Typography>
                </Box>
            </Box>
        );
    }

    const button = () => {
        return (

            <Container>
                <div className="row">
                    <Button
                        to="/checkout" variant="outlined" color="primary" sx={{ mb: 5, width: '25%', mx: 'auto', ml:50 }}>
                        Proceed To Checkout
                    </Button>
                </div>
            </Container>
        );
    }

    return (
        <>
            <Layout>
                {state.length === 0 && emptyCart()}
                {state.length !== 0 && state.map(cartItems)}
                {state.length !== 0 && button()}
            </Layout>
        </>
    )
}

export default Cart
