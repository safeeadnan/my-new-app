import React, { useState, useCallback } from 'react';
import { Button, MenuItem, Divider } from '@mui/material';
import { StyledMenu } from '../styledMenu'; // assuming StyledMenu is a custom component

import EditIcon from '@mui/icons-material/Edit'; // Import necessary icons

import FileCopyIcon from '@mui/icons-material/FileCopy';
import ArchiveIcon from '@mui/icons-material/Archive';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import StorageIcon from '@mui/icons-material/Storage';
import BusinessIcon from '@mui/icons-material/Business';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const menuItems = [
    { text: 'Select Financial Year', icon: <EditIcon /> },
    { text: 'Set A/C Opening Balance', icon: <FileCopyIcon /> },
    { text: 'Account Reconciliation', icon: <ArchiveIcon /> },
    { text: 'Users Management', icon: <PersonIcon /> },
    { text: 'Patient Master Setting', icon: <GroupIcon /> },
    { text: 'Item Master Setting', icon: <SettingsIcon /> },
    { text: 'Set Item Status', icon: <AccountBalanceIcon /> },
    { text: 'Set Drug Formula', icon: <PlaylistAddCheckIcon /> },
    { text: 'Software Parameter Setting', icon: <PersonAddIcon /> },
    { text: 'Remove Duplicate', icon: <LibraryAddIcon /> },
    { text: 'Registration', icon: <PlaylistAddIcon /> },
    { text: 'Import Last Year Purchase Stock', icon: <StorageIcon /> },
    { text: 'Transfer OP Balances from Last FA', icon: <BusinessIcon /> },
    { text: 'End Financial Year', icon: <ExitToAppIcon /> },
    { text: 'Exit', icon: <ExitToAppIcon /> },
];

export default function AdministrationMenu() {
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
                Administration
            </Button>
            <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{ 'aria-labelledby': 'demo-customized-button' }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                {menuItems.map((item, index) => (
                    [
                        <MenuItem key={index} onClick={handleClose} disableRipple>
                            {item.icon}
                            {item.text}
                        </MenuItem>,
                    ]
                ))}
            </StyledMenu>
        </>
    );
}
