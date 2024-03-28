import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import EventNoteIcon from '@mui/icons-material/EventNote';
import ScheduleIcon from '@mui/icons-material/Schedule';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import ListAltIcon from '@mui/icons-material/ListAlt';
import DescriptionIcon from '@mui/icons-material/Description';

const ExpiryContent = () => {
    const handleSalesItemClick = (itemName) => {
        console.log(itemName);
    };

    const expiryItems = {
        'EXPIRY LIST ALL ITEMS': { text: 'EXPIRY LIST ALL ITEMS', icon: <EventNoteIcon /> },
        'EXPIRY LIST BETWEEN TWO DATE': { text: 'EXPIRY LIST BETWEEN TWO DATE', icon: <EventNoteIcon /> },
        'EXPIRY LIST RACK/SHELF WISE': { text: 'EXPIRY LIST RACK/SHELF WISE', icon: <EventNoteIcon /> },
        'EXPIRY LIST SUPPLIER WISE': { text: 'EXPIRY LIST SUPPLIER WISE', icon: <EventNoteIcon /> },
        'PENDING EXPIRY/PUR-RET SUMMARY': { text: 'PENDING EXPIRY/PUR-RET SUMMARY', icon: <ScheduleIcon /> },
        'PENDING EXPIRY/PUR-RET DETAILS': { text: 'PENDING EXPIRY/PUR-RET DETAILS', icon: <ScheduleIcon /> },
        'ADJUSTED EXPIRY/PUR-RET SUMMARY': { text: 'ADJUSTED EXPIRY/PUR-RET SUMMARY', icon: <ScheduleIcon /> },
        'ADJUSTED EXPIRY/PUR-RET DETAILS': { text: 'ADJUSTED EXPIRY/PUR-RET DETAILS', icon: <ScheduleIcon /> },
        'EXPIRY/PUR-RET/BREAKAGE REGISTER': { text: 'EXPIRY/PUR-RET/BREAKAGE REGISTER', icon: <DescriptionIcon /> },
    };

    return (
        <div style={{ height: 'calc(100vh - 300px)', overflow: 'auto' }}>
            <Typography variant="h5">Sales</Typography>
            <Typography paragraph>
                Click on an item below to view details:
            </Typography>
            <List>
                {Object.entries(expiryItems).map(([itemName, itemData]) => (
                    <ListItem button key={itemName} aria-setsize={'small'} onClick={() => handleSalesItemClick(itemName)}>
                        <ListItemIcon>{itemData.icon}</ListItemIcon>
                        <ListItemText primary={itemData.text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default ExpiryContent;
