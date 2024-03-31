import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import useRouteStore from '../store/routerStore'; // Import Zustand store for routing

import SaveIcon from '@mui/icons-material/Save';
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
import MyTable from '../components/myTable';
import ExpiryTable from '../components/expiryPage/expiryTable';



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
            <Button onClick={onCancelClick}>Exit</Button>
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

export default function ExpiryPage() {
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Stack spacing={1}>
      <ButtonAppBar />
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
      <div style={{ height: '65vh', overflow: 'auto' }}>
        <ExpiryTable />
      </div>
      <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} justifyContent="center" alignItems="center" spacing={0}>
        <Box  sx={{ width: '98vw', display: 'flex' }}>
          <Box width={{ xs: 1, md: 1 / 2 }} marginRight={{ md: 1 }}>
            <TextField
              id="outlined-read-only-narration"
              label="Narration"
              defaultValue="ABC"
              variant="outlined"
              size="small"
              fullWidth
              InputProps={{
                // readOnly: true,
              }}
            />
          </Box>
          <Box width={{ xs: 1, md: 1 / 4 }} marginRight={{ md: 1 }}>
            <FormControl fullWidth size="small" variant="outlined">
              <InputLabel id="demo-simple-select-label">Status</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={status}
                label="Status"
                // onChange={handleStatusChange}
              >
                <MenuItem value={"Cash"}>Cash</MenuItem>
                <MenuItem value={"UPI"}>UPI</MenuItem>
                <MenuItem value={"Credit"}>Credit</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box width={{ xs: 1, md: 1 / 4 }}>
            <TextField
              id="outlined-read-only-amount"
              label="Amount"
              defaultValue="0.00"
              variant="outlined"
              size="small"
              fullWidth
              InputProps={{
                readOnly: true,
              }}
            />
          </Box>
          <Button
              variant="contained"
              startIcon={<SaveIcon/>}
              size='small'
            >
              Save
            </Button>
        </Box>
      </Box>


    </Stack>
  );
}