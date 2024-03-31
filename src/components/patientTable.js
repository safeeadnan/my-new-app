import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

//.js extension to de deta bhai 


export function generateRandomData() {
  const data = [];
  for (let i = 1; i <= 20; i++) {
    const randomQty = Math.floor(Math.random() * 100) + 1;
    const randomPrate = Math.floor(Math.random() * 1000) + 100;
    const randomDisc = Math.floor(Math.random() * 20) + 1;
    const randomAmount = Math.floor(randomQty * randomPrate * (1 - randomDisc / 100));
    data.push({
      id: i,
      user: `ADMIN`,
      patient: `Patient ${i}`,
      bt: `C`,
      billNo: `Bill no. ${i}`,
      amount: randomAmount
    });
  }
  return data;
}

export default function PatientTable() {
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
     <TableCell>user </TableCell> 
     < TableCell > patient </TableCell>
     < TableCell > bt </TableCell>
     < TableCell > billNo </TableCell>
     < TableCell > amount </TableCell>
     </TableRow>
     </TableHead>
     <TableBody>
   {
    data.map((row) => (
      <TableRow key= { row.id } >
      <TableCell>{ row.user } </TableCell>
      < TableCell > { row.patient } </TableCell>
      < TableCell > { row.bt } </TableCell>
      < TableCell > { row.billNo } </TableCell>
      < TableCell > { row.amount } </TableCell>
      < TableCell >
      <IconButton aria-label="delete" color = "secondary" onClick = {() => handleDelete(row.id)}>
        <DeleteOutlineIcon />
        </IconButton>
        </TableCell>
        </TableRow>
          ))
}
</TableBody>
  </Table>
  </TableContainer>
  );
}


