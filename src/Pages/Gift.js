
import React from 'react'
import Layout from '../Components/Layouts/Layout'
import { Box, FormControlLabel, Typography, RadioGroup, Radio } from '@mui/material';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const Gift = () => {
    const [checked, setChecked] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState('female');
    const [selectedItem, setSelectedItem] = React.useState('');
    // const [selectedItems, setSelectedItems] = React.useState([]);
    const handleChange = (event) => {
        setChecked(event.target.checked);
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
                <Typography variant='h4' align='center'>
                    Order Trees
                </Typography>
                <form
                //  onSubmit={handleSubmit}
                >
                    <TextField
                        name="name"
                        label="Name"
                        value={checked}
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
                    <div>
                        <FormControl component="fieldset">
                            <RadioGroup value={selectedValue} onChange={() => { }} onMouseDown={handleSelect}>
                                <FormControlLabel value="option1" control={<Radio />} label="1 Tree" />
                                <FormControlLabel value="option2" control={<Radio />} label="5 Tree" />
                                <FormControlLabel value="option3" control={<Radio />} label="10 Tree" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <Button onClick={handleClearSelection} variant="contained" color="secondary">
                        Clear Selection
                    </Button>
                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                </form>
            </Box>
        </Layout>
    )
}

export default Gift