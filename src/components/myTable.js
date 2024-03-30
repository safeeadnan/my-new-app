import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export function generateRandomData() {
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

function MyTable() {
  const [data, setData] = useState(generateRandomData());

  const handleDelete = (id) => {
    const updatedData = data.filter(item => item.id !== id);
    setData(updatedData);
  };

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

export default MyTable;
