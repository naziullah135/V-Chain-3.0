import AddIcon from '@mui/icons-material/Add';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Box, Container, Fab, Paper, Typography } from '@mui/material';
import React from 'react';
import thumbnail from "./../assets/images/c2.png";
import CustomTable from './CustomTable';
import { MuiTextField } from './SearchFiled';
const vehicles = [
    {
        id: 101,
        name: "BMW",
        image: thumbnail
    },
    {
        id: 102,
        name: "Mercedes",
        image: thumbnail
    },
    {
        id: 103,
        name: "Ferrari",
        image: thumbnail
    },
    {
        id: 104,
        name: "Jaguar",
        image: thumbnail
    },
    {
        id: 105,
        name: "Toyota",
        image: thumbnail
    },
    {
        id: 106,
        name: "Mazda",
        image: thumbnail
    },
    {
        id: 107,
        name: "Nissan",
        image: thumbnail
    },
    {
        id: 108,
        name: "Audi",
        image: thumbnail
    },
]
const headings = [
    {
        label: <Box ml={5}>
            Vehicles
        </Box>,
        align: "left",
    }
    ,
    {
        label: <Box mr={2}>
            Actions
        </Box>,
        align: "right"
    }
]

const Vehicles = () => {
    return (
        <Container>
            <Box p={4}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
                    <Typography sx={{ fontSize: 20, fontWeight: 700, color: "primary.main" }}>Vehicles</Typography>
                    <Fab size="small" color="primary" aria-label="add" sx={{ ml: 3 }}>
                        <AddIcon />
                    </Fab>
                </Box>
                <Box sx={{ mb: 6, p: "3px", display: "flex", alignItems: "center", bgcolor: "#445FEB3B", borderRadius: "12px" }}>
                    <SearchOutlinedIcon sx={{ mx: 2 }} />
                    <MuiTextField size='small' fullWidth placeholder='Search...' />
                </Box>
                <Paper variant='outlined' sx={{ borderRadius: "15px", px: 4, py: 2 }}>
                    <CustomTable rows={vehicles} headings={headings} />
                </Paper>
            </Box>
        </Container>
    );
};

export default Vehicles;