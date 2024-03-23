import React, { useState, useCallback } from 'react';
import { Button, MenuItem, Divider } from '@mui/material';
import { StyledMenu } from '../styledMenu'; // assuming StyledMenu is a custom component
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import EditIcon from '@mui/icons-material/Edit';
import PersonIcon from '@mui/icons-material/Person';
import BusinessIcon from '@mui/icons-material/Business';
import CategoryIcon from '@mui/icons-material/Category';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import KitchenIcon from '@mui/icons-material/Kitchen';
import AccountTreeIcon from '@mui/icons-material/AccountTree';

const menuItems = [
    { icon: <EditIcon />, text: 'New Form' },
    { icon: <PersonIcon />, text: 'Customer' },
    { icon: <BusinessIcon />, text: 'Supplier' },
    { icon: <CategoryIcon />, text: 'Items' },
    { icon: <LocalHospitalIcon />, text: 'Doctor' },
    { icon: <AssignmentIndIcon />, text: 'Product Type' },
    { icon: <AccountBalanceIcon />, text: 'Stockist Wise Company' },
    { icon: <HomeWorkIcon />, text: 'Company Wise Stockist' },
    { icon: <LocalPharmacyIcon />, text: 'Patient Master' },
    { icon: <MonetizationOnIcon />, text: 'Drug Master' },
    { icon: <KitchenIcon />, text: 'Tax Master' },
    { icon: <AccountTreeIcon />, text: 'Kit Definition' },
];

export default function MasterMenu() {
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
                id="master-menu-button"
                aria-controls={open ? 'master-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
            >
                Master
            </Button>
            <StyledMenu
                id="master-menu"
                MenuListProps={{ 'aria-labelledby': 'master-menu-button' }}
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
