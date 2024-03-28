import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import AssignmentIcon from '@mui/icons-material/Assignment';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import DescriptionIcon from '@mui/icons-material/Description';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import BusinessIcon from '@mui/icons-material/Business';
import CategoryIcon from '@mui/icons-material/Category';
import CompareIcon from '@mui/icons-material/Compare';
import ReceiptIcon from '@mui/icons-material/Receipt';

const PurchaseContent = () => {
    const handleSalesItemClick = (itemName) => {
        console.log(itemName);
    };

    const purchaseItems = {
        'PURCHASE REGISTER': { text: 'PURCHASE REGISTER', icon: <AssignmentIcon /> },
        'PURCHASE SUMMARY': { text: 'PURCHASE SUMMARY', icon: <MonetizationOnIcon /> },
        'PURCHASE SUMMARY -2': { text: 'PURCHASE SUMMARY -2', icon: <MonetizationOnIcon /> },
        'ITEMWISE PARTYWISE PURCHASE': { text: 'ITEMWISE PARTYWISE PURCHASE', icon: <LocalMallIcon /> },
        'PARTYWISE ITEMWISE PURCHASE': { text: 'PARTYWISE ITEMWISE PURCHASE', icon: <LocalMallIcon /> },
        'COMPANY WISE PURCHASE': { text: 'COMPANY WISE PURCHASE', icon: <BusinessIcon /> },
        'RATE DIFFERENCE IN PURCHASE': { text: 'RATE DIFFERENCE IN PURCHASE', icon: <CompareIcon /> },
        'PURCHASE RETURN REGISTER': { text: 'PURCHASE RETURN REGISTER', icon: <DescriptionIcon /> },
        'PURCHASE PROFIT MARGIN': { text: 'PURCHASE PROFIT MARGIN', icon: <MonetizationOnIcon /> },
        'PURCHASE SCHEEM DIFFERENCE': { text: 'PURCHASE SCHEEM DIFFERENCE', icon: <CompareIcon /> },
        'SUB CATEGORY WISE PURCHASE': { text: 'SUB CATEGORY WISE PURCHASE', icon: <CategoryIcon /> },
    };

    return (
        <div style={{ height: 'calc(100vh - 300px)', overflow: 'auto' }}>
            <Typography variant="h5">Sales</Typography>
            <Typography paragraph>
                Click on an item below to view details:
            </Typography>
            <List>
                {Object.entries(purchaseItems).map(([itemName, itemData]) => (
                    <ListItem button key={itemName} aria-setsize={'small'} onClick={() => handleSalesItemClick(itemName)}>
                        <ListItemIcon>{itemData.icon}</ListItemIcon>
                        <ListItemText primary={itemData.text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default PurchaseContent;
