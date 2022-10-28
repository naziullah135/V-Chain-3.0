import { Box, Button, Container, Divider, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import logo from "./../assets/images/logo.png";
const Login = () => {
    return (
        <Container maxWidth="xl">
            <Box sx={{ height: "100vh", }}>
                <Grid container spacing={3} columns={{ xs: 12, sm: 12, md: 24 }}>
                    <Grid item md={13} xs={12} sx={{ display: "flex", alignItems: "flex-end", height: "100vh" }}>
                        <Box px={4}>
                            <Typography variant='h1' sx={{ fontSize: 59 }}>Never buy a <br />
                                <strong>BUSTED</strong> car... <strong>Again!</strong></Typography>
                            <Typography sx={{ my: 12 }} variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare egestas semper sem magna sit turpis consectetur.</Typography>
                        </Box>
                    </Grid>
                    <Grid item md={1} xs={0}>
                        <Divider orientation='vertical' />
                    </Grid>
                    <Grid item md={10} xs={12} >
                        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: "100vh", px: 4 }}>
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
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Login;