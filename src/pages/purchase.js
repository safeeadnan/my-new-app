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
import { top100Films } from '../components/combobox';
import EnhancedTable from '../components/enhancedTable';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Autocomplete, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useState } from 'react';

function generateRandomData() {
  const data = [];
  for (let i = 1; i <= 20; i++) {
    const randomQty = Math.floor(Math.random() * 100) + 1;
    const randomPrate = Math.floor(Math.random() * 1000) + 100;
    const randomMrp = randomPrate + Math.floor(Math.random() * 200) + 50;
    const randomDisc = Math.floor(Math.random() * 20) + 1;
    const randomAmount = Math.floor(randomQty * randomPrate * (1 - randomDisc / 100));
    const randomGst = Math.floor(randomAmount * (Math.random() * 0.1 + 0.05));
    const randomGstPercentage = Math.floor(Math.random() * 10) + 5;
    data.push({
      id: i,
      mfg: `Manufacturer ${i}`,
      productName: `Product ${i}`,
      pack: `Pack ${i}`,
      batchNo: `Batch ${i}`,
      qty: randomQty,
      prate: randomPrate,
      mrp: randomMrp,
      exp: `Exp ${i}`,
      disc: randomDisc,
      amount: randomAmount,
      gst: randomGst,
      gstPercentage: randomGstPercentage,
      rack: `Rack ${i}`
    });
  }
  return data;
}

function MyTable({ data, handleDelete }) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>MFG</TableCell>
            <TableCell>Product Name</TableCell>
            <TableCell>Pack</TableCell>
            <TableCell>Batch No</TableCell>
            <TableCell>Qty</TableCell>
            <TableCell>PRate</TableCell>
            <TableCell>MRP</TableCell>
            <TableCell>Exp</TableCell>
            <TableCell>Disc%</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>GST</TableCell>
            <TableCell>GST%</TableCell>
            <TableCell>Rack</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.mfg}</TableCell>
              <TableCell>{row.productName}</TableCell>
              <TableCell>{row.pack}</TableCell>
              <TableCell>{row.batchNo}</TableCell>
              <TableCell>{row.qty}</TableCell>
              <TableCell>{row.prate}</TableCell>
              <TableCell>{row.mrp}</TableCell>
              <TableCell>{row.exp}</TableCell>
              <TableCell>{row.disc}</TableCell>
              <TableCell>{row.amount}</TableCell>
              <TableCell>{row.gst}</TableCell>
              <TableCell>{row.gstPercentage}</TableCell>
              <TableCell>{row.rack}</TableCell>
              <TableCell>
                <IconButton aria-label="delete" color="secondary" onClick={() => handleDelete(row.id)}>
                  <DeleteOutlineIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}




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
            Purchase Invoice / Delivery Memo
          </Typography>
          <ButtonGroup variant="secondary" aria-label="Small button group">
            <Button onClick={onCancelClick}>Cancel</Button>
            <Button>Imp Bill</Button>
            <Button>Pending DM</Button>
            <Button>ConvDM</Button>
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



export default function SalesPage() {
  const [age, setAge] = React.useState('');
  const [type, setType] = React.useState('');
  const [invDmNo, setInvDmNo] = React.useState('');
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [data, setData] = useState(generateRandomData());
  const [formData, setFormData] = useState({
    mfg: '',
    productName: '',
    pack: '',
    batchNo: '',
    qty: '',
    prate: '',
    mrp: '',
    exp: '',
    disc: '',
    amount: '',
    gst: '',
    gstPercentage: '',
    rack: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleAddRow = () => {
    const newRow = { id: data.length + 1, ...formData };
    setData([...data, newRow]);
    // Clear form data after adding row
    setFormData({
      mfg: '',
      productName: '',
      pack: '',
      batchNo: '',
      qty: '',
      prate: '',
      mrp: '',
      exp: '',
      disc: '',
      amount: '',
      gst: '',
      gstPercentage: '',
      rack: ''
    });
  };

  const handleDelete = (id) => {
    const updatedData = data.filter(item => item.id !== id);
    setData(updatedData);
  };


  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleInvDmNoChange = (event) => {
    setInvDmNo(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };



  return (
    <Stack spacing={2}>
      <ButtonAppBar />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={3}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={top100Films}
              sx={{ width: 250 }}
              renderInput={(params) => <TextField {...params} label="Supplier" />}
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography variant="body1" fontWeight="bold">13200.00₹</Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <FormControl sx={{ minWidth: 120 }}>
              <InputLabel id="demo-simple-select-label">Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={type}
                label="Type"
                onChange={handleTypeChange}
              >
                <MenuItem value={"inv"}>INV</MenuItem>
                <MenuItem value={"dm"}>DM</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={3}>
            <Autocomplete
              disablePortal
              id="inv-dm-no"
              options={top100Films}
              sx={{ width: 250 }}
              renderInput={(params) => <TextField {...params} label="Inv/Dm No" />}
              onChange={(event, value) => handleInvDmNoChange(value)}
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <TextField
              id="date"
              label="Date"
              type="date"
              value={selectedDate}
              onChange={handleDateChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>


          
          <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <TextField label="MFG" name="mfg" value={formData.mfg} onChange={handleInputChange} />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField label="Product Name" name="productName" value={formData.productName} onChange={handleInputChange} />
        </Grid>
        <Grid item xs={12} md={2}>
          <TextField label="Pack" name="pack" value={formData.pack} onChange={handleInputChange} />
        </Grid>
        <Grid item xs={12} md={2}>
          <TextField label="Batch No" name="batchNo" value={formData.batchNo} onChange={handleInputChange} />
        </Grid>
        <Grid item xs={12} md={1}>
          <TextField label="Qty" name="qty" value={formData.qty} onChange={handleInputChange} />
        </Grid>
        <Grid item xs={12} md={1}>
          <TextField label="PRate" name="prate" value={formData.prate} onChange={handleInputChange} />
        </Grid>
        <Grid item xs={12} md={1}>
          <TextField label="MRP" name="mrp" value={formData.mrp} onChange={handleInputChange} />
        </Grid>
        <Grid item xs={12} md={2}>
          <TextField label="Exp" name="exp" value={formData.exp} onChange={handleInputChange} />
        </Grid>
        <Grid item xs={12} md={1}>
          <TextField label="Disc%" name="disc" value={formData.disc} onChange={handleInputChange} />
        </Grid>
        <Grid item xs={12} md={2}>
          <TextField label="Amount" name="amount" value={formData.amount} onChange={handleInputChange} />
        </Grid>
        <Grid item xs={12} md={1}>
          <TextField label="GST" name="gst" value={formData.gst} onChange={handleInputChange} />
        </Grid>
        <Grid item xs={12} md={1}>
          <TextField label="GST%" name="gstPercentage" value={formData.gstPercentage} onChange={handleInputChange} />
        </Grid>
        <Grid item xs={12} md={1}>
          <TextField label="Rack" name="rack" value={formData.rack} onChange={handleInputChange} />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleAddRow}>Add Row</Button>
        </Grid>
      </Grid>

          <Grid item xs={12}>
            <MyTable data={data} handleDelete={handleDelete} />
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
}
