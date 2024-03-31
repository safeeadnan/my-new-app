import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


export default function PurchaseTable({ data, handleDelete }) {
    return (
      <TableContainer component={Paper} sx={{ padding: 0, width: '98vw' }}>
        <Table  size="small">
          <TableHead  >
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell>Qty</TableCell>
              <TableCell>Free</TableCell>
              <TableCell>PrSz</TableCell>
              <TableCell>T Qty</TableCell>
              <TableCell>Batch No</TableCell>
              <TableCell>Exp</TableCell>
              <TableCell>PRate</TableCell>
              <TableCell>IDisc</TableCell>
              <TableCell>SDisc</TableCell>
              <TableCell>STAmt</TableCell>
              <TableCell>%</TableCell>
              <TableCell>MRP</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell>{row.productName}</TableCell>
                <TableCell>{row.qty}</TableCell>
                <TableCell>{row.free}</TableCell>
                <TableCell>{row.prsz}</TableCell>
                <TableCell>{row.tqty}</TableCell>
                <TableCell>{row.batchNo}</TableCell>
                <TableCell>{row.exp}</TableCell>
                <TableCell>{row.prate}</TableCell>
                <TableCell>{row.idisc}</TableCell>
                <TableCell>{row.sdisc}</TableCell>
                <TableCell>{row.stamt}</TableCell>
                <TableCell>{row.percentage}</TableCell>
                <TableCell>{row.mrp}</TableCell>
                <TableCell>
                  <IconButton aria-label="delete" color="secondary" onClick={() => handleDelete(row.id)} sx={{ height: 20 }}>
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