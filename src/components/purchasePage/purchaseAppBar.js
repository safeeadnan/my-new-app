// AppBar.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

function PurchaseAppBar({ onCancelClick }) {
  return (
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
  );
}

export default PurchaseAppBar;
