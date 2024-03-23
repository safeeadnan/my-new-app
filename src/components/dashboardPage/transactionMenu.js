import React, { useState, useCallback } from 'react';
import { Button, MenuItem, Divider } from '@mui/material';
import { StyledMenu } from '../styledMenu'; // assuming StyledMenu is a custom component
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ListAltIcon from '@mui/icons-material/ListAlt';

const menuItems = [
    { icon: <CreditCardIcon />, text: 'Cash / Credit Menu' },
    { icon: <AssignmentIcon />, text: 'Purchase Invoice' },
    { icon: <LocalShippingIcon />, text: 'Pur Return / Expiry' },
    { icon: <LocalMallIcon />, text: 'Purchase Order' },
    { icon: <ListAltIcon />, text: 'Day Book' },
];

export default function TransactionMenu() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = useCallback((event) => {
        setAnchorEl(event.currentTarget);
    }, []);

    const handleClose = useCallback(() => {
        setAnchorEl(null);
    }, []);

    return (
        <>
            <Button
                id="transaction-menu-button"
                aria-controls={open ? 'transaction-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
            >
                Transaction
            </Button>
            <StyledMenu
                id="transaction-menu"
                MenuListProps={{ 'aria-labelledby': 'transaction-menu-button' }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                {menuItems.map((item, index) => (
                    <MenuItem key={index} onClick={handleClose} disableRipple>
                        {item.icon}
                        {item.text}
                    </MenuItem>
                ))}
            </StyledMenu>
        </>
    );
}
