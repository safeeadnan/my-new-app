import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Button, Typography } from '@mui/material';

const PurchaseInvoiceComponent = () => {
  // You might want to handle state and functions here
  
  return (
    <Paper elevation={3} sx={{ padding: 2 }}>
      <Typography variant="h6">Purchase Invoice / Delivery Memo</Typography>
      <TableContainer component={Paper}>
        <Table aria-label="invoice table">
          <TableHead>
            <TableRow>
              <TableCell>PRODUCT NAME</TableCell>
              <TableCell align="right">QTY</TableCell>
              <TableCell align="right">RATE</TableCell>
              <TableCell align="right">DISC %</TableCell>
              <TableCell align="right">BATCH NO</TableCell>
              <TableCell align="right">EXP</TableCell>
              <TableCell align="right">MRP</TableCell>
              {/* Add other headers as needed */}
            </TableRow>
          </TableHead>
          <TableBody>

                      {/* Rows can be dynamically created based on state or props */}
          <TableRow>
            <TableCell component="th" scope="row">
              <TextField size="small" />
            </TableCell>
            <TableCell align="right">
              <TextField size="small" type="number" />
            </TableCell>
            <TableCell align="right">
              <TextField size="small" type="number" />
            </TableCell>
            <TableCell align="right">
              <TextField size="small" type="number" />
            </TableCell>
            <TableCell align="right">
              <TextField size="small" />
            </TableCell>
            <TableCell align="right">
              <TextField size="small" type="date" />
            </TableCell>
            <TableCell align="right">
              <TextField size="small" type="number" />
            </TableCell>
            {/* Add other cells as needed */}
          </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ marginTop: 20 }}>
        <TextField
          label="Narration / Particulars"
          multiline
          rows={4}
          fullWidth
          margin="normal"
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 20 }}>
        <div>
          <Typography variant="subtitle1">Net Amount</Typography>
          <TextField
            label="Net Amount"
            size="small"
            type="number"
            margin="normal"
          />
        </div>
        <div>
          <Typography variant="subtitle1">Discount</Typography>
          <TextField
            label="Discount"
            size="small"
            type="number"
            margin="normal"
          />
        </div>
        {/* Add other summary fields as needed */}
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 20 }}>
        <Button variant="contained" color="primary">
          Save Invoice
        </Button>
      </div>
    </Paper>
  );
};

export default PurchaseInvoiceComponent;

          


