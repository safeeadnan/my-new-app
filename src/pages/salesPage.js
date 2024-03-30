import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import useRouteStore from '../store/routerStore';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
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

export function ButtonAppBar() {

    const setCurrentPage = useRouteStore((state) => state.setCurrentPage);
    function onCancelClick() {
        console.log("abcs")
        setCurrentPage("/main_window/Dashboard");
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
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <Stack spacing={2}>
            <ButtonAppBar />
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} md={4}>
                            <ComboBox /> {/* Assume this is a styled select component */}
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <Button variant="text" fullWidth>MEMO No : C 1234</Button>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <Button variant="text" fullWidth>Cash ₹ 0.00</Button>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <Button variant="text" fullWidth>Date: 23/03/2024</Button>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <ButtonGroup variant="secondary" aria-label="Small button group" fullWidth>
                            <Button variant="text">Stock</Button>
                            <Button variant="outlined">0</Button>
                            <Button variant="contained">0</Button>
                        </ButtonGroup>
                    </Grid>
                </Grid>
            </Box>
            <EnhancedTable />
            <Grid container spacing={1}> {/* Adjusted spacing for outer Grid container */}
                <Grid item xs={12} md={11} > {/* Adjusted for responsiveness */}
                    <Grid container spacing={2} >                        
                        <Grid item xs={6} > {/* Each form field is a Grid item for better control */}
                            <TextField
                                required
                                id="outlined-required-patient-name"
                                label="Patient Name"
                                size="small"
                                fullWidth
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                id="outlined-required-patient-address"
                                label="Patient Address"
                                size="small"
                                fullWidth
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                id="outlined-required-phone-no"
                                label="Phone No"
                                size="small"
                                fullWidth
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                id="outlined-required-patient-city"
                                label="Patient City"
                                size="small"
                                fullWidth
                                defaultValue="Amravati"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                id="outlined-required-doctor-name"
                                label="Doctor Name"
                                size="small"
                                fullWidth
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                id="outlined-required-doctor-city"
                                label="Doctor City"
                                size="small"
                                fullWidth
                                defaultValue="Amravati"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl fullWidth size="small" variant="outlined">
                                <InputLabel id="demo-simple-select-label">Payment Mode</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Payment Mode"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={"Cash"}>Cash</MenuItem>
                                    <MenuItem value={"UPI"}>UPI</MenuItem>
                                    <MenuItem value={"Credit"}>Credit</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                id="outlined-read-only-total-items"
                                label="Total Items"
                                defaultValue="0"
                                InputProps={{
                                    readOnly: true,
                                }}
                                variant="outlined"
                                size="small"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                id="outlined-read-only-total-amount"
                                label="Total Amount"
                                defaultValue="0.00"
                                InputProps={{
                                    readOnly: true,
                                }}
                                variant="outlined"
                                size="small"
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </Stack>
    );
}