import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import useRouteStore from '../store/routerStore'; // Import Zustand store for routing

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
import { top100Films } from '../components/combobox';
import EnhancedTable from '../components/enhancedTable';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DenseTable from '../components/denseTable';
import Autocomplete from '@mui/material/Autocomplete';



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
            Expiry / Purchase Return / Breakage
          </Typography>
          <ButtonGroup variant="secondary" aria-label="Small button group">
            <Button onClick={onCancelClick}>Cancel</Button>
            <Button>Show Items</Button>
            <Button>Expiry</Button>
            <Button>Delete</Button>
            <Button>Modify</Button>
            <Button>RePrn</Button>
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
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={top100Films}
                  sx={{ width: 300 }}
                  renderInput={(params) => <TextField {...params} label="Supplier Name"
                    size='small'
                  />}
                />
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={top100Films}
                  sx={{ width: '40vh' }}
                  renderInput={(params) => <TextField {...params} label="Product Name"
                    size='small'
                  />}
                />
                <Autocomplete
                  options={['Expiry', 'Option 2', 'Option 3']}
                  renderInput={(params) => (
                    <TextField {...params} label="Item Type" sx={{ width: '20vh' }} /> // Three items in a row
                  )}
                  size='small'
                />
                <TextField
                  label="Loss %"
                  sx={{ width: '10vh' }} // Three items in a row
                  size='small'
                  type="number"
                />
                <TextField
                  label="Inv No"
                  sx={{ width: '10vh' }} // Three items in a row
                  size='small'
                  type="number"
                />
                <TextField
                  label="Date"
                  type="date"
                  defaultValue="2024-03-25"
                  sx={{ width: '25vh' }} // Three items in a row
                  InputLabelProps={{
                    shrink: true,
                  }}
                  size='small'
                />
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
            <Grid container spacing={1}>
              <Grid item xs={12} md={8} lg={6}>
                <TextField
                  id="outlined-read-only-naration"
                  label="Narration"
                  defaultValue = "ABC"
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                <FormControl fullWidth size="small" variant="outlined">
                  <InputLabel id="demo-simple-select-label">Status</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Status"
                    onChange={handleChange}
                  >
                    <MenuItem value={"Cash"}>Cash</MenuItem>
                    <MenuItem value={"UPI"}>UPI</MenuItem>
                    <MenuItem value={"Credit"}>Credit</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                <TextField
                  id="outlined-read-only-amount"
                  label="Amount"
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
      </Grid>

    </Stack>
  );
}