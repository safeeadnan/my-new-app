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
import MastersContent from '../components/reportsPage/mastersContent';
import ExpiryContent from '../components/reportsPage/expiryContent';
import PurchaseContent from '../components/reportsPage/purchaseContent';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import useRouteStore from '../store/routerStore'; // Import Zustand store for routing
const drawerWidth = 240;

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
const setCurrentPage = useRouteStore((state) => state.setCurrentPage);
    // Click handler for each item
    function handleItemClick(itemText) {
        setSelectedItem(itemText);
    }
    function onClickClose(){
        setCurrentPage("/main_window/DashBoard");
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Clipped drawer
                    </Typography>
                    <Button variant='secondary' onClick={onClickClose}>Close</Button>
                </Toolbar>
                
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{

                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', height: '100vh', },
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
            <Box
                sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100vh', // Full viewport height
                }}
            >
                <Box
                    component="main"

                    sx={{ flex: '1 1 auto', overflowY: 'auto' }}
                    id="reportsListCompo"
                >
                    <Toolbar />
                    {selectedItem ? combinedItems.find(item => item.text === selectedItem).content : <Typography>Select an item from the sidebar</Typography>}
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, p: 2 }}>
                    {/* Second Content */}
                    <TextField
                        label="From Date"
                        type="date"
                        defaultValue="2024-03-25"
                        sx={{ width: 'calc(30.33% - 8px)' }} // Three items in a row
                        InputLabelProps={{
                            shrink: true,
                        }}
                        size='small'
                    />
                    <TextField
                        label="To Date"
                        type="date"
                        defaultValue="2024-03-25"
                        sx={{ width: 'calc(30.33% - 8px)' }} // Three items in a row
                        InputLabelProps={{
                            shrink: true,
                        }}
                        size='small'
                    />
                    
                    <Autocomplete
                        options={['Option 1', 'Option 2', 'Option 3']}
                        renderInput={(params) => (
                            <TextField {...params} label="Shelf/Rack" sx={{ width: '20vh' }} /> // Three items in a row
                        )}
                        size='small'
                    />
                    
                    <Autocomplete
                        options={['Option 1', 'Option 2', 'Option 3']}
                        renderInput={(params) => (
                            <TextField {...params} label="Sub Category" sx={{ width: '20vh' }} /> // Three items in a row
                        )}
                        size='small'
                    />
                    <TextField
                        label="A/C Head"
                        sx={{ width: 'calc(30.33% - 8px)' }} // Three items in a row
                        size='small'
                    />
                    <TextField
                        label="Manufacturer"
                        sx={{ width: 'calc(30.33% - 8px)' }} // Three items in a row
                        size='small'
                    />
                    <TextField
                        label="Product"
                        sx={{ width: 'calc(33.33% - 8px)' }} // Three items in a row
                        size='small'
                    />
                    <Autocomplete
                        options={['Option 1', 'Option 2', 'Option 3']}
                        renderInput={(params) => (
                            <TextField {...params} label="Item Type" sx={{ width: '20vh' }} /> // Three items in a row
                        )}
                        size='small'
                    />
                    <Button variant="outlined" color="secondary" style={{ marginLeft: '32vw' }} onClick={onClickClose}>
                            Cancel
                        </Button>
                     <Button type="submit" variant="contained" color="primary">
                            Show
                        </Button>
                        <Button variant="contained" color="secondary" style={{ marginLeft: 8 }}  >
                            Print
                        </Button>
                        <Button variant="outlined" color="primary" style={{ marginLeft: 8 }} onClick={onClickClose}>
                            Exit
                        </Button>
                </Box>
                
            </Box>
        </Box>
    );

}
