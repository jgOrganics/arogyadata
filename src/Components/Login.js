import React from 'react';
import { Button, Modal, FormControl, InputLabel, Input, Checkbox, FormGroup, FormControlLabel } from '@mui/material';

const Login = () => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your form submission logic here
    };

    return (
        <>
            <Button variant="outlined" className="btn btn-outline-primary ms-auto" onClick={handleOpen}>
                <span className="fa fa-sign-in me-1"></span> Login
            </Button>

            <Modal open={open} onClose={handleClose}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Login</h5>
                        <Button onClick={handleClose}>Close</Button>
                    </div>
                    <div className="modal-body">
                        <Button variant="contained" color="primary" className="btn btn-primary w-100 mb-4">
                            <span className="fa fa-google me-2"></span> Sign in With Google
                        </Button>
                        <Button variant="contained" color="primary" className="btn btn-primary w-100 mb-4">
                            <span className="fa fa-facebook me-2"></span> Sign in With Facebook
                        </Button>
                        <form onSubmit={handleSubmit}>
                            <FormControl fullWidth margin="normal">
                                <InputLabel htmlFor="email">Email address</InputLabel>
                                <Input id="email" type="email" />
                                <div className="form-text">We'll never share your email with anyone else.</div>
                            </FormControl>
                            <FormControl fullWidth margin="normal">
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input id="password" type="password" />
                            </FormControl>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox id="exampleCheck1" />} label="Check me out" />
                            </FormGroup>
                            <Button type="submit" variant="outlined" color="primary" fullWidth className="btn btn-outline-primary w-100 mt-5">Submit</Button>
                        </form>
                    </div>
                </div>
            </Modal>
        </>
    );
}
export default Login;
