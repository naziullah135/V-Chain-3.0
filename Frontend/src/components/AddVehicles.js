import { AppBar, Button, Container, Divider, Grid, MenuItem, TextField, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { styled } from '@mui/material/styles';
import { drawerWidth } from '../theme/theme';
import useScrollspy from '../hooks/useScrollSpy';
import carImage from "./../assets/images/preview-car.jpeg";
import userImage from "./../assets/images/preview-user.png";
const MenuButton = styled(Button)(({ theme }) => ({
    fontWeight: 600,
    textTransform: "capitalize",
    padding: "21px 20px 22px",
    marginInline: 10,
    display: "inline-block",
    color: theme.palette.text.primary
}));




const AddVehicles = () => {
    const ids = ["vehicles", "specs", "owner"];
    const activeId = useScrollspy(ids, 200);

    const handleClick = (event, id) => {
        const anchor = (event.target.ownerDocument || document).querySelector(
            "#" + id,
        );

        if (anchor) {
            anchor.scrollIntoView({
                behavior: "smooth",
                block: "center",

            });
        }
    };
    return (
        <>
            <Container >
                <AppBar
                    position="fixed"
                    sx={{
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` },
                        bgcolor: "#fff",
                        boxShadow: "none",
                        borderBottom: "1px solid rgba(0, 0, 0, 0.12)"
                    }}
                >
                    <Grid container spacing={3} sx={{ mt: 1, }}>
                        <Grid item md={7} xs={12}>
                            <Box sx={{ textAlign: "center", fontWeight: 600 }}>
                                <MenuButton onClick={(e) => handleClick(e, ids[0])} sx={{ borderBottom: `4px solid ${activeId === ids[0] ? "#5A5F72" : "transparent"}` }}>Vehicle</MenuButton>
                                <MenuButton onClick={(e) => handleClick(e, ids[1])} sx={{ borderBottom: `4px solid ${activeId === ids[1] ? "#5A5F72" : "transparent"}` }}>Specs</MenuButton>
                                <MenuButton onClick={(e) => handleClick(e, ids[2])} sx={{ borderBottom: `4px solid ${activeId === ids[2] ? "#5A5F72" : "transparent"}` }}>Owner</MenuButton>
                            </Box>
                        </Grid>
                        <Grid item md={5} xs={12}>
                            <Box sx={{ textAlign: "center" }}>
                                <MenuButton>Preview</MenuButton>
                            </Box>
                        </Grid>
                    </Grid>
                </AppBar>
                <Toolbar />
            </Container>
            <Container>
                <Grid container spacing={3}>
                    <Grid item md={6} xs={12}>
                        <Box sx={{ p: 3, mt: 5 }}>
                            <form>
                                <Box mb={10} id="vehicles">
                                    <TextField
                                        fullWidth
                                        variant='outlined'
                                        label="Brand"
                                        margin='normal'
                                    />
                                    <TextField
                                        fullWidth
                                        variant='outlined'
                                        label="Type"
                                        margin='normal'
                                    />
                                    <TextField
                                        fullWidth
                                        variant='outlined'
                                        label="Model"
                                        margin='normal'
                                    />
                                    <TextField
                                        fullWidth
                                        variant='outlined'
                                        label="Registration Number"
                                        margin='normal'
                                    />
                                    <TextField
                                        fullWidth
                                        variant='outlined'
                                        label="VIN"
                                        margin='normal'
                                    />
                                    <Box sx={{ display: "flex" }}>
                                        <TextField
                                            fullWidth
                                            variant='outlined'
                                            label="Price"
                                            margin='normal'
                                        />
                                        <TextField
                                            sx={{ width: 100, ml: 1 }}
                                            select
                                            variant='outlined'
                                            margin='normal'
                                            value={"bdt"}
                                        >
                                            <MenuItem value="bdt">BDT</MenuItem>
                                            <MenuItem value="usd">USD</MenuItem>
                                        </TextField>
                                    </Box>
                                    <Box sx={{ display: "flex" }}>
                                        <TextField
                                            fullWidth
                                            variant='outlined'
                                            label="Mileage"
                                            margin='normal'
                                        />
                                        <TextField
                                            sx={{ width: 100, ml: 1 }}
                                            select
                                            variant='outlined'
                                            margin='normal'
                                            value={"km"}
                                        >
                                            <MenuItem value="km">Km</MenuItem>
                                            <MenuItem value="meter">Meter</MenuItem>
                                        </TextField>
                                    </Box>
                                </Box>
                                <Box mb={10} id='specs'>
                                    <TextField
                                        fullWidth
                                        select
                                        variant='outlined'
                                        margin='normal'
                                        label="Body Type"
                                    >
                                        <MenuItem value="1">option 1</MenuItem>
                                        <MenuItem value="2">option 2</MenuItem>
                                    </TextField>
                                    <TextField
                                        fullWidth
                                        select
                                        variant='outlined'
                                        margin='normal'
                                        label="Engine"
                                    >
                                        <MenuItem value="1">option 1</MenuItem>
                                        <MenuItem value="2">option 2</MenuItem>
                                    </TextField>
                                    <TextField
                                        fullWidth
                                        select
                                        variant='outlined'
                                        margin='normal'
                                        label="Fuel"
                                    >
                                        <MenuItem value="1">option 1</MenuItem>
                                        <MenuItem value="2">option 2</MenuItem>
                                    </TextField>
                                    <TextField
                                        fullWidth
                                        select
                                        variant='outlined'
                                        margin='normal'
                                        label="Transmission"
                                    >
                                        <MenuItem value="1">option 1</MenuItem>
                                        <MenuItem value="2">option 2</MenuItem>
                                    </TextField>
                                    <TextField
                                        fullWidth
                                        select
                                        variant='outlined'
                                        margin='normal'
                                        label="Color"
                                    >
                                        <MenuItem value="1">option 1</MenuItem>
                                        <MenuItem value="2">option 2</MenuItem>
                                    </TextField>
                                </Box>
                                <Box mb={3} id="owner">
                                    <TextField
                                        fullWidth
                                        variant='outlined'
                                        label="Name"
                                        margin='normal'
                                    />
                                    <TextField
                                        fullWidth
                                        variant='outlined'
                                        label="NID"
                                        margin='normal'
                                    />
                                    <TextField
                                        fullWidth
                                        variant='outlined'
                                        label="Permanent Residence"
                                        margin='normal'
                                    />
                                    <TextField
                                        fullWidth
                                        variant='outlined'
                                        label="Email"
                                        margin='normal'
                                    />
                                </Box>
                                <Toolbar />
                                <Toolbar />
                                <Toolbar />
                                <Toolbar />
                            </form>
                        </Box>

                    </Grid>
                    <Grid item md={1} xs={0}>
                        <Divider orientation='vertical' />
                    </Grid>
                    <Grid item md={5} xs={12}>
                        <Box sx={{ p: 6, mt: 4, position: "sticky", top: 80 }}>
                            <Typography variant='h3' sx={{ fontSize: 28, fontWeight: 700 }}>Mercedes-Benz</Typography>
                            <Typography variant='h3' sx={{ fontSize: 15, fontWeight: 700, mt: 2 }}>E 220 4-matic 2.1 125kW</Typography>

                            <Box sx={{ my: 4, "& img": { maxWidth: "100%", filter: "drop-shadow(0px 36px 68px rgba(33, 54, 159, 0.29))", borderRadius: "14px" } }}>
                                <img src={carImage} alt="" />
                            </Box>
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <img src={userImage} alt="" />
                                <Box ml={2}>
                                    <Typography sx={{ fontSize: 23 }}>Vincent Mendoza</Typography>
                                    <Typography sx={{ fontSize: 15, fontWeight: 700 }}>1920-200-300</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ mt: 5, textAlign: "center" }}>
                                <Button sx={{ px: 7, py: 2 }} variant="contained" color='primary' size='large'>Create</Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>

    );
};

export default AddVehicles;