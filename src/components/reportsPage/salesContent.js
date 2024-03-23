import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import AssignmentIcon from '@mui/icons-material/Assignment';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import PersonIcon from '@mui/icons-material/Person';
import BusinessIcon from '@mui/icons-material/Business';
import ListAltIcon from '@mui/icons-material/ListAlt';
import DescriptionIcon from '@mui/icons-material/Description';
import CategoryIcon from '@mui/icons-material/Category';
import ScheduleIcon from '@mui/icons-material/Schedule';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import EventNoteIcon from '@mui/icons-material/EventNote';
import ReceiptIcon from '@mui/icons-material/Receipt';
import DoneAllIcon from '@mui/icons-material/DoneAll';

const SalesContent = () => {
    const handleSalesItemClick = (itemName) => {
        console.log(itemName);
    };

    const salesItems = {
        'SALE REGISTER - F1': { text: 'SALE REGISTER - F1', icon: <AssignmentIcon /> },
        'SALE SUMMARY - F2': { text: 'SALE SUMMARY - F2', icon: <MonetizationOnIcon /> },
        'ITEMWISE SALE - F3': { text: 'ITEMWISE SALE - F3', icon: <LocalMallIcon /> },
        'DOCTOR WISE SALE DETAILS - X': { text: 'DOCTOR WISE SALE DETAILS - X', icon: <PersonIcon /> },
        'DOCTOR WISE SALE SUMMARY - F5': { text: 'DOCTOR WISE SALE SUMMARY - F5', icon: <PersonIcon /> },
        'COMPANY WISE SALE - F6': { text: 'COMPANY WISE SALE - F6', icon: <BusinessIcon /> },
        'PANEL/SCHEME WISE SALE - F7': { text: 'PANEL/SCHEME WISE SALE - F7', icon: <ListAltIcon /> },
        'SALE RETURN REGISTER/SUMMARY': { text: 'SALE RETURN REGISTER/SUMMARY', icon: <DescriptionIcon /> },
        'SUB CATEGORY WISE SALE - F8': { text: 'SUB CATEGORY WISE SALE - F8', icon: <CategoryIcon /> },
        'QUANTITY WISE ITEM SALE - F9': { text: 'QUANTITY WISE ITEM SALE - F9', icon: <ScheduleIcon /> },
        'SCHEDULE-H TB DRUG FORMAT - F10': { text: 'SCHEDULE-H TB DRUG FORMAT - F10', icon: <EventNoteIcon /> },
        'DAY WISE SALE-PURCHASE TOTAL - F11': { text: 'DAY WISE SALE-PURCHASE TOTAL - F11', icon: <ReceiptIcon /> },
        'MONTH WISE SALE-PURCHASE TOTAL - F12': { text: 'MONTH WISE SALE-PURCHASE TOTAL - F12', icon: <ReceiptIcon /> },
        'TB-DRUG YEARLY FORMAT': { text: 'TB-DRUG YEARLY FORMAT', icon: <DescriptionIcon /> },
        'BALANCE AMOUNT CASH BILLS - X': { text: 'BALANCE AMOUNT CASH BILLS - X', icon: <AttachMoneyIcon /> },
        'SALE SUMMARY FROM BILL TO BILL NO': { text: 'SALE SUMMARY FROM BILL TO BILL NO', icon: <DoneAllIcon /> },
        'DOCTORWISE ITEMWISE SALE': { text: 'DOCTORWISE ITEMWISE SALE', icon: <PersonIcon /> },
    };

    return (
        <div style={{ height: 'calc(100vh - 300px)', overflow: 'auto' }}>
            <Typography variant="h5">Sales</Typography>
            <Typography paragraph>
                Click on an item below to view details:
            </Typography>
            <List>
                {Object.entries(salesItems).map(([itemName, itemData]) => (
                    <ListItem button key={itemName} aria-setsize={'small'} onClick={() => handleSalesItemClick(itemName)}>
                        <ListItemIcon>{itemData.icon}</ListItemIcon>
                        <ListItemText primary={itemData.text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default SalesContent;
