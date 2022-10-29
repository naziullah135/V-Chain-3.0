import styled from "@emotion/styled";
import { TextField } from "@mui/material";

export const MuiTextField = styled(TextField)(() => ({
    border: 0,
    outline: 0,
    backgroundColor: "#fff",
    borderRadius: 18,
    '& .MuiOutlinedInput-root': {
        borderRadius: 8,
        '& .MuiOutlinedInput-notchedOutline': {
            border: 0
        },
        '&.Mui-focused': {
            '& .MuiOutlinedInput-notchedOutline': {
                border: 0
            }
        }
    },
}))