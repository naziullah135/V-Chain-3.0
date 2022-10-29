import { Box, Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react'

import Blockchain from '../utils/blockchain';

const cardStyle = {
    height: 210,
    borderRadius: "9px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    '& svg': {
        ml: 3,
        mb: 3
    },
    bgcolor: "#445FEB2B"
}
const Home = () => {

    const [account, setAccount] = useState(null);
    const [contract, setContract] = useState(null);

    useEffect(() => {
        console.log('block start');
        Blockchain.getWeb3Client().eth.requestAccounts()
            .then(accounts => {
                setContract(Blockchain.getContract(Blockchain.getWeb3Client()));
                setAccount(accounts[0]);
                console.log(account);
                contract.methods.isAuthorRegistered().call({
                    from: account,
                }).then(result => {
                    // this.isLoading = false;
                    console.log(result);
                    if (!result) {
                        console.log('profile');
                    }
                }).catch(console.log)
            }).catch(console.log);
    }, [account])


    return (
        <Container maxWidth="md">
            <Typography variant='h1' sx={{ fontSize: 64, fontWeight: 600, mt: 4 }}>Hi, Shoaib!</Typography>
            <Typography variant='body1' sx={{ fontSize: 19 }}>Let’s start from here</Typography>
            <Grid container spacing={4} mt={6} sx={{ "& a": { textDecoration: "none" } }}>
                <Grid item md={6} xs={12}>
                    <Link to="/add-vehicles">
                        <Box sx={{ ...cardStyle, bgcolor: "primary.main" }}>
                            <svg width="79" height="54" viewBox="0 0 79 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M45.002 15.4779H0.815918V23.0527H45.002V15.4779ZM45.002 0.3284H0.815918V7.90316H45.002V0.3284ZM0.815918 38.2022H30.2733V30.6274H0.815918V38.2022ZM72.6183 21.159L78.1416 26.8401L52.4032 53.3517L35.7966 36.3085L41.3198 30.6274L52.4032 41.9896L72.6183 21.159Z" fill="#fff" />
                            </svg>
                            <Typography variant='body1' sx={{ color: "#fff" }}>Add Vehicle</Typography>
                        </Box>
                    </Link>
                </Grid>
                <Grid item md={6} xs={12}>
                    <Box sx={cardStyle}>
                        <svg width="79" height="54" viewBox="0 0 79 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M45.002 15.4779H0.815918V23.0527H45.002V15.4779ZM45.002 0.3284H0.815918V7.90316H45.002V0.3284ZM0.815918 38.2022H30.2733V30.6274H0.815918V38.2022ZM72.6183 21.159L78.1416 26.8401L52.4032 53.3517L35.7966 36.3085L41.3198 30.6274L52.4032 41.9896L72.6183 21.159Z" fill="#424242" />
                        </svg>
                        <Typography variant='body1' sx={{ color: "#424242" }}>Add Owner</Typography>
                    </Box>
                </Grid>
                <Grid item md={6} xs={12}>
                    <Box sx={cardStyle}>
                        <svg width="79" height="54" viewBox="0 0 79 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M45.002 15.4779H0.815918V23.0527H45.002V15.4779ZM45.002 0.3284H0.815918V7.90316H45.002V0.3284ZM0.815918 38.2022H30.2733V30.6274H0.815918V38.2022ZM72.6183 21.159L78.1416 26.8401L52.4032 53.3517L35.7966 36.3085L41.3198 30.6274L52.4032 41.9896L72.6183 21.159Z" fill="#424242" />
                        </svg>
                        <Typography variant='body1' sx={{ color: "#424242" }}>Add MSP</Typography>
                    </Box>
                </Grid>
                <Grid item md={6} xs={12}>
                    <Box sx={cardStyle}>
                        <svg width="79" height="54" viewBox="0 0 79 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M45.002 15.4779H0.815918V23.0527H45.002V15.4779ZM45.002 0.3284H0.815918V7.90316H45.002V0.3284ZM0.815918 38.2022H30.2733V30.6274H0.815918V38.2022ZM72.6183 21.159L78.1416 26.8401L52.4032 53.3517L35.7966 36.3085L41.3198 30.6274L52.4032 41.9896L72.6183 21.159Z" fill="#424242" />
                        </svg>
                        <Typography variant='body1' sx={{ color: "#424242" }}>Contracts</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Home;