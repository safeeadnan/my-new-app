import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ButtonGroup from '@mui/material/ButtonGroup';

export function ButtonAppBar() {
    
    const navigate = useNavigate();
    function onCancelClick() {
        console.log("abcs")
        navigate("/main_window/Dashboard");
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Cash / Credit Memo
                    </Typography>
                    <ButtonGroup variant="secondary" aria-label="Small button group">
                        <Button onClick={onCancelClick}>Cancel</Button>
                        <Button>Event</Button>
                        <Button>Search</Button>
                        <Button>Todays</Button>
                        <Button>RePrn</Button>
                        <Button>Hold</Button>
                        <Button>Pat Kit</Button>
                        <Button>Doct Kit</Button>
                        <Button>D to C</Button>
                        <Button>Scan</Button>
                        <Button>Save</Button>
                        <Button>Exit</Button>
                    </ButtonGroup>

                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default function SalesPage() {
    const navigate = useNavigate();

   
    return (
        <Stack spacing={1}>
            <ButtonAppBar />
            {/* For variant="text", adjust the height via font-size */}
        <div>
            hii
        </div>


            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
            {/* For other variants, adjust the size with `width` and `height` */}
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="rectangular" width={210} height={60} />
            <Skeleton variant="rounded" width={210} height={60} />

        </Stack>
    );
}