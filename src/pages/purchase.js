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
import SaveIcon from '@mui/icons-material/Save';
import useRouteStore from '../store/routerStore';

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
    const setCurrentPage = useRouteStore((state) => state.setCurrentPage);
    function onCancelClick() {
        console.log("abcs")
        setCurrentPage("/main_window/Dashboard");
    }

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
            <Button onClick={onCancelClick}>Exit</Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
      <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
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
        <Box sx={{ maxHeight: '44vh', overflowY: 'auto' }}>
          <PurchaseTable data={data} handleDelete={handleDelete} />
        </Box>
        <Box />
      </Box>
      <Box sx={{ height: '29vh', width: '98vw', display: 'flex' }}>
        <Box sx={{ width: '50%' }}>
          <Box sx={{ width: '100%', height: '25%', display: 'flex' }}>

            <Box sx={{ width: '20%', height: '50%' }}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={['Option 1', 'Option 2']}
                renderInput={(params) => <TextField {...params} label="PurEntryNo" />}
                size='small'
              />
            </Box>
            <Box sx={{ width: '20%', height: '50%' }}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={['Option 1', 'Option 2']}
                renderInput={(params) => <TextField {...params} label="Rack/Shelf" />}
                size='small'
              />
            </Box>
            <Box sx={{ width: '20%', height: '50%' }}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={['Option 1', 'Option 2']}
                renderInput={(params) => <TextField {...params} label="Net Amount" />}
                size='small'
              />
            </Box>
            <Box sx={{ width: '20%', height: '50%' }}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={['Option 1', 'Option 2']}
                renderInput={(params) => <TextField {...params} label="Disc%" />}
                size='small'
              />
            </Box>
            <Box sx={{ width: '20%', height: '50%' }}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={['Option 1', 'Option 2']}
                renderInput={(params) => <TextField {...params} label="Cash/Credit" />}
                size='small'
              />
            </Box>

          </Box>
          <Box sx={{ width: '100%', height: '25%', display: 'flex' }}>

            <Box sx={{ width: '100%', height: '50%' }}>
              <TextField label="Narration" size='small' fullWidth />
            </Box>


          </Box>
          <Box sx={{
            width: '100%',
            height: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}> <Typography variant="body1" fontWeight="bold" align="center">Sale Value 0.00 0.00</Typography></Box>
        </Box>
        <Box sx={{
          width: '50%', display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gridTemplateRows: 'repeat(4, 1fr)'
        }}
        >
          <TextField label="Total Amount" size='small' />
          <TextField label="discount" size='small' />
          <TextField label="Scheme Discount" size='small' />
          <TextField label="Credit Note" size='small' />

          <TextField label="Debit Note" size='small' />
          <TextField label="S Tax Total" size='small' />
          <TextField label="Net Amount" size='small' />
            <Button
              variant="contained"
              startIcon={<SaveIcon />}
              size='small'
            >
              Save
            </Button>
        </Box>

      </Box>
    </Stack>
  );
}
