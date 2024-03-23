import React, { useState, useCallback } from 'react';
import { Button, MenuItem } from '@mui/material';
import { StyledMenu } from '../styledMenu'; // assuming StyledMenu is a custom component
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PaymentIcon from '@mui/icons-material/Payment';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import ListAltIcon from '@mui/icons-material/ListAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import EventNoteIcon from '@mui/icons-material/EventNote';

const menuItems = [
    { icon: <ReceiptIcon />, text: 'Cash Receipt' },
    { icon: <PaymentIcon />, text: 'Cash Payments' },
    { icon: <AccountBalanceIcon />, text: 'Bank Cash Deposit Voucher' },
    { icon: <LibraryBooksIcon />, text: 'Bank Receipt (Chq. Deposit)' },
    { icon: <MonetizationOnIcon />, text: 'Bank Payment (Chq. Issue)' },
    { icon: <AccountCircleIcon />, text: 'Supplier Payment' },
    { icon: <MenuBookIcon />, text: 'Journal Entry' },
    { icon: <SwapVertIcon />, text: 'Multiple Entry Window' },
    { icon: <ListAltIcon />, text: 'Cr/Dr Note' },
    { icon: <SettingsIcon />, text: 'Rearrange VouNo' },
    { icon: <EventNoteIcon />, text: 'Daily Note' },
];

export default function AccountsMenu() {
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
                id="demo-customized-button"
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
            >
                Accounts
            </Button>
            <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{ 'aria-labelledby': 'demo-customized-button' }}
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
