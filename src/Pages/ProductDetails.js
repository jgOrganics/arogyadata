import React from 'react'
import { useParams } from 'react-router'
import { useState } from 'react';
import DATA from "../Data/data_trend";
import { useDispatch } from 'react-redux';
import { addItem, delItem } from '../redux/actions/index'
import { Button, Container, Grid, Typography } from '@mui/material';
import Layout from '../Components/Layouts/Layout';

const ProductDetail = () => {
    const [cartBtn, setCartBtn] = useState("Add to Cart")
    const proid = useParams();

    const proDetail = DATA.filter(x => x.id == proid.id)
    const product = proDetail[0];
    console.log(product);
    const dispatch = useDispatch()

    const handleCart = (product) => {
        if (cartBtn === "Add to Cart") {
            dispatch(addItem(product))
            setCartBtn("Remove from Cart")
        }
        else {
            dispatch(delItem(product))
            setCartBtn("Add to Cart")
        }
    }

    return (
        <Layout>
            <Container maxWidth="lg" sx={{ my: 5, py: 3 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <img src={product.image} alt={product.name} height="400px" />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Typography variant="h1" component="h1" gutterBottom fontWeight="bold">
                            {product.name}
                        </Typography>
                        <hr />
                        <Typography variant="h2" component="h2" gutterBottom>
                            ${product.price}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            {product.description}
                        </Typography>
                        <Button onClick={() => handleCart(product)} variant="outlined" color="primary" sx={{ my: 5 }}>
                            {cartBtn}
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    )
}

export default ProductDetail;
