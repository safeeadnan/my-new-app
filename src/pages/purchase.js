import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ButtonGroup from '@mui/material/ButtonGroup';
import Grid from '@mui/material/Grid';
import { Autocomplete, FormControl, IconButton, TextField, InputLabel, Select, MenuItem } from '@mui/material';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import PurchaseTable from '../components/purchasePage/purchaseTable';
import { generateRandomData } from '../components/purchasePage/utils';

export default function PurchasePage() {
  const [type, setType] = React.useState('');
  const [invDmNo, setInvDmNo] = React.useState('');
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [data, setData] = useState(generateRandomData());
  const [formData, setFormData] = useState({
    productName: '',
    qty: 0,
    free: 0,
    prsz: '',
    tqty: 0,
    batchNo: '',
    exp: '',
    prate: 0,
    idisc: 0,
    sdisc: 0,
    stamt: 0,
    percentage: 0,
    mrp: 0,
    rack: '',
  });
 
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    let formattedValue = value;
    if (name === 'exp' && value.length === 2 && !value.includes('/')) {
      // Automatically add "/" after two numerical digits
      formattedValue += '/';
    }
    setFormData({ ...formData, [name]: formattedValue });
  };
  const handleAddRow = () => {
    const newRow = { id: data.length + 1, ...formData };
    setData([...data, newRow]);
    // Clear form data after adding row
    setFormData({
      productName: '',
      qty: 0,
      free: 0,
      prsz: '',
      tqty: 0,
      batchNo: '',
      exp: '',
      prate: 0,
      idisc: 0,
      sdisc: 0,
      stamt: 0,
      percentage: 0,
      mrp: 0,
      rack: '',
    });
  };

  const handleDelete = (id) => {
    const updatedData = data.filter(item => item.id !== id);
    setData(updatedData);
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
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Purchase Invoice / Delivery Memo
          </Typography>
          <ButtonGroup variant="contained" color="primary" aria-label="Small button group">
            <Button>Imp Bill</Button>
            <Button>Pending DM</Button>
            <Button>ConvDM</Button>
            <Button>Save</Button>
            <Button>Exit</Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={3}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={['Option 1', 'Option 2']}
              renderInput={(params) => <TextField {...params} label="Supplier" />}
              size='small'
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography variant="body1" fontWeight="bold">13200.00₹</Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <FormControl sx={{ minWidth: 120 }} size='small'>
              <InputLabel>Type</InputLabel>
              <Select
                value={type}
                label="Type"
                onChange={handleTypeChange}
                size='small'
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
              options={['Option 1', 'Option 2']}
              renderInput={(params) => <TextField {...params} label="Inv/Dm No" />}
              onChange={(event, value) => handleInvDmNoChange(value)}
              size='small'
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
              size='small'
            />
          </Grid>
        </Grid>

        <Grid container spacing={0}>
          <Grid item xs={24} md={'auto'}>
            <TextField label="Product Name" name="productName" value={formData.productName} onChange={handleInputChange} size='small' sx={{ width: 300 }} />
          </Grid>
          <Grid item xs={24} md={'auto'}>
            <TextField label="Qty" type="number" name="qty" value={formData.qty} onChange={handleInputChange} size='small' sx={{ width: 80 }} />
          </Grid>
          <Grid item xs={24} md={'auto'}>
            <TextField label="Free" type="number" name="free" value={formData.free} onChange={handleInputChange} size='small' sx={{ width: 80 }} />
          </Grid>
          <Grid item xs={24} md={'auto'}>
            <TextField label="PrSz" name="prsz" value={formData.prsz} onChange={handleInputChange} size='small' sx={{ width: 80 }} />
          </Grid>
          <Grid item xs={24} md={'auto'}>
            <TextField label="TQty" type="number" name="tqty" value={formData.tqty} onChange={handleInputChange} size='small' sx={{ width: 80 }} />
          </Grid>
          <Grid item xs={24} md={'auto'}>
            <TextField label="Batch No" name="batchNo" value={formData.batchNo} onChange={handleInputChange} size='small' sx={{ width: 80 }} />
          </Grid>
          <Grid item xs={24} md={'auto'}>
            <TextField
              label="Exp"
              name="exp"
              value={formData.exp}
              onChange={handleInputChange}
              placeholder="MM/YY"
              inputProps={{
                maxLength: 5,
                pattern: "(0[1-9]|1[0-2])\/([0-9]{2})"
              }}
              size="small"
              sx={{ width: '7vw' }}
            />
          </Grid>
          <Grid item xs={24} md={'auto'}>
            <TextField label="PRate" type="number" name="prate" value={formData.prate} onChange={handleInputChange} size='small' sx={{ width: 80 }} />
          </Grid>
          <Grid item xs={24} md={'auto'}>
            <TextField type="number" label="IDisc" name="idisc" value={formData.idisc} onChange={handleInputChange} size='small' sx={{ width: '6vw' }} />
          </Grid>
          <Grid item xs={24} md={'auto'}>
            <TextField label="SDisc" type="number" name="sdisc" value={formData.sdisc} onChange={handleInputChange} size='small' sx={{ width: '6vw' }} />
          </Grid>
          <Grid item xs={24} md={'auto'}>
            <TextField label="STAmt" type="number" name="stamt" value={formData.stamt} onChange={handleInputChange} size='small' sx={{ width: '7vw' }} />
          </Grid>
          <Grid item xs={24} md={'auto'}>
            <TextField label="%" type="number" name="percentage" onChange={handleInputChange} size='small' sx={{ width: 80 }} value={formData.percentage} />
          </Grid>
          <Grid item xs={24} md={'auto'}>
            <TextField label="MRP" type="number" name="mrp" value={formData.mrp} onChange={handleInputChange} size='small' sx={{ width: 88 }} />
          </Grid>
          <Grid item xs={24} md={'auto'}>
            <IconButton variant="contained" color="primary" onClick={handleAddRow} sx={{ width: '3vw' }}>
              <AddIcon />
            </IconButton>
          </Grid>
        </Grid>

        <Grid item xs={24}>
          <PurchaseTable data={data} handleDelete={handleDelete} />
        </Grid>

      </Box>
      
    </Stack>
  );
}
