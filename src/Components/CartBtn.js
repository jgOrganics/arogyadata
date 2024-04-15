import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box, Typography } from '@mui/material';
const CartBtn = () => {
    // We get a state of addItems
    // Write the name of the file not the function
    const state = useSelector((state) => state.addItem)
    return (
        <Box sx={{ml:3}}>
            <NavLink to="/cart" >
                <Typography style={{
                    color: "red"
                }}>
                    {state.length}
                </Typography>
                <ShoppingCartIcon
                    color='primary'
                />
            </NavLink>
        </Box>
    )
}

export default CartBtn