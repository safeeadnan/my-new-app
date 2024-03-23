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
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ComboBox from '../components/combobox';
import EnhancedTable from '../components/enhancedTable';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DenseTable from '../components/denseTable';

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

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function SalesPage() {
    const navigate = useNavigate();


    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <Stack spacing={1}>
            <ButtonAppBar />
            {/* For variant="text", adjust the height via font-size */}
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={1} md={12}>
                    </Grid>
                    <Grid item xs={5} md={12}>
                        <Item>
                            <Grid container spacing={2} justifyContent={'space-between'} >
                                <ComboBox />
                                <Button variant="text">MEMO No : C 1234</Button>
                                <Button variant="text">Cash ₹ 0.00</Button>
                                <Button variant="text">Date: 23/03/2024</Button>
                                <ButtonGroup variant="secondary" aria-label="Small button group">
                                    <Button variant="text">Stock</Button>
                                    <Button variant="outlined">0</Button>
                                    <Button variant="contained">0</Button>
                                </ButtonGroup>
                            </Grid>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
            <EnhancedTable />
            <Grid container spacing={0}>
                <Grid item xs={4} md={6} >
                <Grid container spacing={1}>
                    <Item>
                        <TextField
                            required
                            id="outlined-required"
                            label="Patient Name"
                            size="small"
                            fullWidth
                        />
                    </Item>
                    <Item>
                        <TextField
                            id="outlined-required"
                            label="Patient Address"
                            size="small"
                            fullWidth
                        />
                    </Item>
                    <Item  >
                        <TextField
                            id="outlined-required"
                            label="Phone No"
                            size="small"
                        />
                        <TextField
                            id="outlined-required"
                            label="Patient City"
                            size="small"
                            defaultValue="Amravati"
                        />
                    </Item>
                    <Item>
                        <TextField
                            id="outlined-required"
                            label="Doctor Name"
                            size="small"
                        />
                        <TextField
                            id="outlined-required"
                            label="Docter City"
                            size="small"
                            defaultValue="Amravati"
                        />
                            <FormControl  sx={{ minWidth: 120 }}>
                                <InputLabel id="demo-simple-select-label">MOP</InputLabel> 
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="MOP"
                                    size="small"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={"Cash"}>Cash</MenuItem>
                                    <MenuItem value={"UPI"}>UPI</MenuItem>
                                    <MenuItem value={"Credit"}>Credit</MenuItem>
                                </Select>
                            </FormControl>
                    </Item>
                </Grid></Grid>
                <Grid item xs={6} md={6}>
                    <Item>
                    <DenseTable />
                    </Item>
                </Grid>
            </Grid>

        </Stack>
    );
}