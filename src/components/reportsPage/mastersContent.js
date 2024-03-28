import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PersonIcon from '@mui/icons-material/Person';
import ListAltIcon from '@mui/icons-material/ListAlt';
import DescriptionIcon from '@mui/icons-material/Description';
import CategoryIcon from '@mui/icons-material/Category';
import ScheduleIcon from '@mui/icons-material/Schedule';
import EventNoteIcon from '@mui/icons-material/EventNote';
import ReceiptIcon from '@mui/icons-material/Receipt';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DoneAllIcon from '@mui/icons-material/DoneAll';

const MastersContent = () => {
    const handleSalesItemClick = (itemName) => {
        console.log(itemName);
    };

    const MastersItems = {
        'CUSTOMERS LIST': { text: 'CUSTOMERS LIST', icon: <PersonIcon /> },
        'SUPPLIERS LIST': { text: 'SUPPLIERS LIST', icon: <ListAltIcon /> },
        'ITEMS LIST': { text: 'ITEMS LIST', icon: <DescriptionIcon /> },
        'MFG WISE ITEM LIST': { text: 'MFG WISE ITEM LIST', icon: <AssignmentIcon /> },
        'MANUFACTURER LIST': { text: 'MANUFACTURER LIST', icon: <DescriptionIcon /> },
        'PRODUCT CATEGORY': { text: 'PRODUCT CATEGORY', icon: <CategoryIcon /> },
        'ITEM SUMMARY': { text: 'ITEM SUMMARY', icon: <ScheduleIcon /> },
        'CATEGORY WISE ITEM LIST': { text: 'CATEGORY WISE ITEM LIST', icon: <CategoryIcon /> },
        'NEW ITEM BETWEEN DATE': { text: 'NEW ITEM BETWEEN DATE', icon: <EventNoteIcon /> },
        'HSNCODE WISE ITEM LIST': { text: 'HSNCODE WISE ITEM LIST', icon: <DescriptionIcon /> },
        'PATIENT LIST': { text: 'PATIENT LIST', icon: <PersonIcon /> },
        'GENERIC MOLECULE LIST': { text: 'GENERIC MOLECULE LIST', icon: <ListAltIcon /> },
        'PRODUCT WISE MOLECULE LIST': { text: 'PRODUCT WISE MOLECULE LIST', icon: <AssignmentIcon /> },
        'MOLECULE WISE PRODUCT LIST': { text: 'MOLECULE WISE PRODUCT LIST', icon: <AssignmentIcon /> },
    };

    return (
        <div style={{ height: 'calc(100vh - 300px)', overflow: 'auto' }}>
            <Typography variant="h5">Sales</Typography>
            <Typography paragraph>
                Click on an item below to view details:
            </Typography>
            <List>
                {Object.entries(MastersItems).map(([itemName, itemData]) => (
                    <ListItem button key={itemName} aria-setsize={'small'} onClick={() => handleSalesItemClick(itemName)}>
                        <ListItemIcon>{itemData.icon}</ListItemIcon>
                        <ListItemText primary={itemData.text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default MastersContent;
