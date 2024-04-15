
import React from 'react'
import Layout from '../Components/Layouts/Layout'
import { Box, FormControlLabel, Typography, RadioGroup, Radio } from '@mui/material';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const Gift = () => {

    const [selectedValue, setSelectedValue] = React.useState('female');
    const [selectedItem, setSelectedItem] = React.useState('');


    const handleChange = (event) => {
        setSelectedItem(event.target.value);
    };
    const handleChange1 = (event) => {
        setSelectedItem(event.target.value);
    };

    const handleSelect = (event) => {
        setSelectedValue(event.target.value);
    };
    const handleClearSelection = () => {
        setSelectedValue('');
    };

    return (
        <Layout>
            <Box sx={{
                my: 7,
                ml: 5,
                textAlign: 'left',
                mx:15,
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
                <Box sx={{
                    backgroundColor:"lightgray"
                }}>
                    <Typography variant='h4' align='center'>
                    Tree Registration Form
                    </Typography>
                </Box>
                <form
                //  onSubmit={handleSubmit}
                >
                    <TextField
                        name="Name"
                        label="Name on certificate"
                        type="name"
                        // value={formData.email}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        name="email"
                        label="Email"
                        type="email"
                        // value={formData.email}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />

                    <FormControl fullWidth margin="normal">
                        <InputLabel>State</InputLabel>
                        <Select
                            value={selectedItem}
                            onChange={handleChange1}
                        >
                            <MenuItem value="item1">Karnataka</MenuItem>
                            <MenuItem value="item2">Maharastra</MenuItem>
                            <MenuItem value="item3">Gujarath</MenuItem>
                            <MenuItem value="item4">Kashimair</MenuItem>
                        </Select>
                    </FormControl>

                    <TextField
                        name="city"
                        label="City"
                        type="city"
                        // value={formData.email}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        name="area"
                        label="Area"
                        type="area"
                        // value={formData.email}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        name="location"
                        label="Location"
                        type="email"
                        // value={formData.email}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        name="no_trees"
                        label="Enter no of trees"
                        type="no_tree"
                        // value={formData.email}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />

                    <div>
                        <Typography>Mode of Payment</Typography>
                        <FormControl component="fieldset" >
                            <RadioGroup value={selectedValue} onChange={() => { }} onMouseDown={handleSelect}>
                                <FormControlLabel value="option1" control={<Radio />} label="Cash" />
                                <FormControlLabel value="option2" control={<Radio />} label="Online" />
                                <FormControlLabel value="option3" control={<Radio />} label="Cheque" />
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <Box sx={{
                        my: 4
                    }}>
                        <Button type="submit" variant="outlined" color="primary">
                            Submit
                        </Button>
                        <Button sx={{ ml: 5 }} type="submit" variant="outlined" color="error">
                            Cancel
                        </Button>
                    </Box>
                </form>
            </Box>
        </Layout>
    )
}

export default Gift