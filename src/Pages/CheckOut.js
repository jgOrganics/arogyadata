import { Container, Grid, Typography, Badge, List, ListItem, TextField, Button, FormControl, InputAdornment, Select, MenuItem, Checkbox, FormControlLabel, RadioGroup, Radio, FormGroup, Box } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux'
import Layout from '../Components/Layouts/Layout';

const Checkout = () => {
    const state = useSelector((state) => state.addItem)
    var total = 0;
    const itemList = (item) => {
        total = total + item.price;
        return (
            <ListItem className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                    <Typography variant="h6" component="h6" sx={{ m: 0 }}>{item.title}</Typography>
                </div>
                <Typography variant="body2" className="text-muted">₹{item.price}</Typography>
            </ListItem>
        );
    }

    return (
        <Layout>
            <Box sx={{
                m: 5
            }}>
                <Container className="my-5">
                    <Grid container spacing={5}>
                        <Grid item xs={12} md={5} lg={4} sx={{ order: { xs: 2, md: 'last' } }}>
                            <Typography variant="h4" component="h2" sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span className="text-primary">Your cart</span>
                                <Badge badgeContent={state.length} color="primary" variant="standard" sx={{ ml: 1 }} />
                            </Typography>
                            <List sx={{ mb: 3 }}>
                                {state.map(itemList)}
                                <ListItem className="list-group-item d-flex justify-content-between">
                                    <Typography variant="body1">Total (Rupees)</Typography>
                                    <Typography variant="body1">₹{total}</Typography>
                                </ListItem>
                            </List>
                            <form className="card p-2">
                                <FormControl fullWidth>
                                    {/* <InputGroup >
                                    <TextField type="text" variant="outlined" placeholder="Promo code" />
                                    <Button variant="contained" color="secondary">Redeem</Button>
                                </InputGroup> */}
                                </FormControl>
                            </form>
                        </Grid>
                        <Grid item xs={12} md={7} lg={8}>
                            <Typography variant="h4" component="h2" sx={{ mb: 3 }}>Billing address</Typography>
                            <form className="needs-validation" noValidate>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField id="firstName" label="First name" variant="outlined" fullWidth required />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField id="lastName" label="Last name" variant="outlined" fullWidth required />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField id="username" label="Username" variant="outlined" fullWidth required InputProps={{ startAdornment: <InputAdornment position="start">@</InputAdornment> }} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField id="email" label="Email" variant="outlined" placeholder="you@example.com" fullWidth />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField id="address" label="Address" variant="outlined" placeholder="1234 Main St" fullWidth required />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField id="address2" label="Address 2" variant="outlined" placeholder="Apartment or suite" fullWidth />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <FormControl fullWidth required>
                                            <Select id="country" label="Country" variant="outlined">
                                                <MenuItem value="">Choose...</MenuItem>
                                                <MenuItem value="United States">United States</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <FormControl fullWidth required>
                                            <Select id="state" label="State" variant="outlined">
                                                <MenuItem value="">Choose...</MenuItem>
                                                <MenuItem value="California">California</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField id="zip" label="Zip" variant="outlined" fullWidth required />
                                    </Grid>
                                </Grid>
                                <Grid container spacing={3} sx={{ mt: 3 }}>
                                    <Grid item xs={12}>
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox id="same-address" />} label="Shipping address is the same as my billing address" />
                                            <FormControlLabel control={<Checkbox id="save-info" />} label="Save this information for next time" />
                                        </FormGroup>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={3} sx={{ mt: 3 }}>
                                    <Grid item xs={12}>
                                        <Typography variant="h4" component="h2" sx={{ mb: 3 }}>Payment</Typography>
                                        <FormControl component="fieldset">
                                            <RadioGroup row name="paymentMethod">
                                                <FormControlLabel control={<Radio id="credit" defaultChecked />} label="Credit card" />
                                                <FormControlLabel control={<Radio id="debit" />} label="Debit card" />
                                                <FormControlLabel control={<Radio id="paypal" />} label="PayPal" />
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={3} sx={{ mt: 3 }}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField id="cc-name" label="Name on card" variant="outlined" fullWidth required />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField id="cc-number" label="Credit card number" variant="outlined" fullWidth required />
                                    </Grid>
                                    <Grid item xs={12} sm={3}>
                                        <TextField id="cc-expiration" label="Expiration" variant="outlined" fullWidth required />
                                    </Grid>
                                    <Grid item xs={12} sm={3}>
                                        <TextField id="cc-cvv" label="CVV" variant="outlined" fullWidth required />
                                    </Grid>
                                </Grid>
                                <Button variant="contained" color="primary" size="large" fullWidth sx={{ mt: 4 }}>Continue to checkout</Button>
                            </form>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Layout>
    )
}

export default Checkout