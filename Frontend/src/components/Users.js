import { Box, Container, Fab, Paper, Typography } from '@mui/material';
import React from 'react';
import thumbnail from "./../assets/images/active-user.png";
import CustomTable from './CustomTable';
import AddIcon from '@mui/icons-material/Add';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { MuiTextField } from './SearchFiled';
const users = [
    {
        id: 101,
        name: "Ignacio Chandler",
        image: thumbnail
    },
    {
        id: 101,
        name: "Naziullah Shawan",
        image: thumbnail
    },
    {
        id: 101,
        name: "Tanvir Rahman",
        image: thumbnail
    },
    {
        id: 101,
        name: "Jaed al zaber",
        image: thumbnail
    },
    {
        id: 101,
        name: "Al Amin Howlader",
        image: thumbnail
    },
    {
        id: 101,
        name: "Ahmed ali",
        image: thumbnail
    },
    {
        id: 101,
        name: "Sajeeb Hossain",
        image: thumbnail
    },
    {
        id: 101,
        name: "Zulkarnine Mahmud",
        image: thumbnail
    },
]
const headings = [
    {
        label: <Box ml={5}>
            Owner
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

const Users = () => {
    return (
        <Container>
            <Box p={4}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
                    <Typography sx={{ fontSize: 20, fontWeight: 700, color: "primary.main" }}>Verified Users</Typography>
                    <Fab size="small" color="primary" aria-label="add" sx={{ ml: 3 }}>
                        <AddIcon />
                    </Fab>
                </Box>
                <Box sx={{ mb: 6, p: "3px", display: "flex", alignItems: "center", bgcolor: "#445FEB3B", borderRadius: "12px" }}>
                    <SearchOutlinedIcon sx={{ mx: 2 }} />
                    <MuiTextField size='small' fullWidth placeholder='Search...' />
                </Box>
                <Paper variant='outlined' sx={{ borderRadius: "15px", px: 4, py: 2 }}>
                    <CustomTable rows={users} headings={headings} />
                </Paper>
            </Box>
        </Container>
    );
};

export default Users;