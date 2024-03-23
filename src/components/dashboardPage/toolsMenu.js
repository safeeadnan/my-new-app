import React, { useState, useCallback } from 'react';
import { Button, MenuItem, Divider } from '@mui/material';
import { StyledMenu } from '../styledMenu'; // assuming StyledMenu is a custom component
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import EditIcon from '@mui/icons-material/Edit';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ArchiveIcon from '@mui/icons-material/Archive';
import DescriptionIcon from '@mui/icons-material/Description';
import EventNoteIcon from '@mui/icons-material/EventNote';
import ClearIcon from '@mui/icons-material/Clear';
import PrintIcon from '@mui/icons-material/Print';
import DeleteIcon from '@mui/icons-material/Delete';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import StorageIcon from '@mui/icons-material/Storage';
import ScheduleIcon from '@mui/icons-material/Schedule';
import SettingsIcon from '@mui/icons-material/Settings';
import BackupIcon from '@mui/icons-material/Backup';

const menuItems = [
    { icon: <EditIcon />, text: 'Search Substitute' },
    { icon: <FileCopyIcon />, text: 'Search Product' },
    { icon: <ArchiveIcon />, text: 'Change User' },
    { icon: <EditIcon />, text: 'Calculator' },
    { icon: <DescriptionIcon />, text: 'MS-WORD' },
    { icon: <DescriptionIcon />, text: 'MS-EXCEL' },
    { icon: <EventNoteIcon />, text: 'Reminder Entry' },
    { icon: <EventNoteIcon />, text: 'Show Reminder' },
    { icon: <ClearIcon />, text: 'Clear Holded Bills' },
    { icon: <ClearIcon />, text: 'Clear Direct Sale' },
    { icon: <SettingsIcon />, text: 'Set Sale Bill Message' },
    { icon: <PrintIcon />, text: 'Sale Bill Print (Office Copy)' },
    { icon: <DeleteIcon />, text: 'RemoveSemiCash' },
    { icon: <DeleteIcon />, text: 'Off Expiry Strip' },
    { icon: <MonetizationOnIcon />, text: 'Intrest' },
    { icon: <BackupIcon />, text: 'Compact Data (Speed Up Program)' },
    { icon: <StorageIcon />, text: 'Data Import' },
];

export default function ToolsMenu() {
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
                id="tools-menu-button"
                aria-controls={open ? 'tools-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
            >
                Tools
            </Button>
            <StyledMenu
                id="tools-menu"
                MenuListProps={{ 'aria-labelledby': 'tools-menu-button' }}
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
