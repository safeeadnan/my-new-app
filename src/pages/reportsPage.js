import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import EventNoteIcon from '@mui/icons-material/EventNote';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LayersIcon from '@mui/icons-material/Layers';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import DescriptionIcon from '@mui/icons-material/Description';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import SalesContent from '../components/reportsPage/salesContent';

import TextField from '@mui/material/TextField';
const drawerWidth = 240;

// Component for Masters
const MastersContent = () => (
    <div>
        <Typography variant="h5">Masters</Typography>
        <Typography paragraph>
            This is the content for Masters.
        </Typography>
    </div>
);


// Component for Purchase
const PurchaseContent = () => (
    <div>
        <Typography variant="h5">Purchase</Typography>
        <Typography paragraph>
            This is the content for Purchase.
        </Typography>
    </div>
);

// Component for Expiry
const ExpiryContent = () => (
    <div>
        <Typography variant="h5">Expiry</Typography>
        <Typography paragraph>
            This is the content for Expiry.
        </Typography>
    </div>
);

// Component for Purchase Order
const PurchaseOrderContent = () => (
    <div>
        <Typography variant="h5">Purchase Order</Typography>
        <Typography paragraph>
            This is the content for Purchase Order.
        </Typography>
    </div>
);

// Component for Stock
const StockContent = () => (
    <div>
        <Typography variant="h5">Stock</Typography>
        <Typography paragraph>
            This is the content for Stock.
        </Typography>
    </div>
);

// Component for Accounts
const AccountsContent = () => (
    <div>
        <Typography variant="h5">Accounts</Typography>
        <Typography paragraph>
            This is the content for Accounts.
        </Typography>
    </div>
);

// Component for LBT Reports
const LbtReportsContent = () => (
    <div>
        <Typography variant="h5">LBT Reports</Typography>
        <Typography paragraph>
            This is the content for LBT Reports.
        </Typography>
    </div>
);

// Component for VAT Reports
const VatReportsContent = () => (
    <div>
        <Typography variant="h5">VAT Reports</Typography>
        <Typography paragraph>
            This is the content for VAT Reports.
        </Typography>
    </div>
);

// Component for GST Reports
const GstReportsContent = () => (
    <div>
        <Typography variant="h5">GST Reports</Typography>
        <Typography paragraph>
            This is the content for GST Reports.
        </Typography>
    </div>
);

const combinedItems = [
    { text: 'Masters', icon: <HomeIcon />, content: <MastersContent /> },
    { text: 'Sales', icon: <StorefrontIcon />, content: <SalesContent /> },
    { text: 'Purchase', icon: <ShoppingBasketIcon />, content: <PurchaseContent /> },
    { text: 'Expiry', icon: <EventNoteIcon />, content: <ExpiryContent /> },
    { text: 'Purchase Order', icon: <AssignmentIcon />, content: <PurchaseOrderContent /> },
    { text: 'Stock', icon: <LayersIcon />, content: <StockContent /> },
    { text: 'Accounts', icon: <AccountBalanceIcon />, content: <AccountsContent /> },
    { text: 'LBT Reports', icon: <DescriptionIcon />, content: <LbtReportsContent /> },
    { text: 'VAT Reports', icon: <AssessmentIcon />, content: <VatReportsContent /> },
    { text: 'GST Reports', icon: <AssignmentTurnedInIcon />, content: <GstReportsContent /> },
];

export default function ReportsPage() {
    const [selectedItem, setSelectedItem] = useState(null);

    // Click handler for each item
    function handleItemClick(itemText) {
        setSelectedItem(itemText);
    }

    // Combined list of items with icons


    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Clipped drawer
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto', backgroundColor: '#f0f0f0' }}>
                    <List>
                        {combinedItems.map((item) => (
                            <ListItem key={item.text} disablePadding onClick={() => handleItemClick(item.text)} sx={{ '&:hover': { backgroundColor: '#e0e0e0' } }}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
<>
            <Box
                component="main"
                sx={{
                    height: '35vw',
                    width: '80vw',
                    backgroundColor: '#ffffff',
                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                }}
                id="reportsListCompo"
            >
                <Toolbar />
                {selectedItem ? combinedItems.find(item => item.text === selectedItem).content : <Typography>Select an item from the sidebar</Typography>}
            </Box>
            </>
        </Box>
    );

}
