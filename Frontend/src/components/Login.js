import { Box, Button, Container, Divider, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import logo from "./../assets/images/logo.png";
import carImg from "./../assets/images/car.jpg";
const Login = () => {
    return (
        <Box sx={{ backgroundImage: `url("${carImg}")`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
            <Container>
                <Box>
                    <Grid container spacing={3}>
                        <Grid item md={7} xs={12} sx={{ display: "flex" }}>
                            <Box px={4}>
                                <Typography variant='h1' sx={{ fontSize: 46, color: "#fff", mt: 10 }}>Never buy a <br />
                                    <strong>BUSTED</strong> car... <strong>Again!</strong></Typography>
                            </Box>
                        </Grid>
                        <Grid item md={5} xs={12} >
                            <Box sx={{ display: "flex", alignItems: "center", height: "100vh" }}>
                                <Box sx={{ bgcolor: "#fff", px: 6, py: 2, borderRadius: "15px", height: "80%" }}>
                                    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%" }}>
                                        <Box sx={{ "& img": { maxWidth: 300 }, textAlign: "center" }}>
                                            <img src={logo} alt="" />
                                        </Box>
                                        <form>
                                            <TextField
                                                fullWidth
                                                variant='outlined'
                                                required
                                                label="Email"
                                                margin='normal'
                                            />
                                            <TextField
                                                fullWidth
                                                variant='outlined'
                                                required
                                                label="Password"
                                                margin='normal'
                                            />
                                            <Button sx={{ py: 2, mt: 2 }} fullWidth variant="contained" color="primary">Sign In</Button>
                                        </form>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container >
        </Box >
    );
};

export default Login;