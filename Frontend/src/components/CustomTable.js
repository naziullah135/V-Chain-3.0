import { Box, Fab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const CustomTable = ({ rows = [], headings = [] }) => {
    return (
        <TableContainer>
            <Table size='small' sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow sx={{ '& th': { border: 0, pb: 2 } }}>
                        {
                            headings.map(({ label, align }, index) => (
                                <TableCell align={align} key={index}>
                                    {label}
                                </TableCell>
                            ))
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(({ id, name, image }) => (
                        <>
                            <TableRow
                                key={id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <Box sx={{ display: "flex", alignItems: "center" }}>
                                        <img src={image} alt="" />
                                        <Box ml={1}>{name}</Box>
                                    </Box>
                                </TableCell>
                                <TableCell align="right">
                                    <Fab size='small' sx={{ boxShadow: "none", bgcolor: "transparent" }}>
                                        <ModeEditOutlineOutlinedIcon />
                                    </Fab>
                                    <Fab size='small' sx={{ boxShadow: "none", bgcolor: "transparent", ml: 1 }}>
                                        <DeleteOutlineOutlinedIcon />
                                    </Fab>
                                </TableCell>
                            </TableRow>
                        </>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default CustomTable;