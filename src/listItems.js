import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import useRouteStore from './store/routerStore';

export function MainListItems() {
  const setCurrentPage = useRouteStore((state) => state.setCurrentPage);

  function onSalesClick(){
    console.log("abcs")
    setCurrentPage('/main_window/SalesPage');
  }

  function onDashboardClick(){
    console.log("abcs")
    setCurrentPage("/main_window/Dashboard");
  }
  function onProductEntryClick(){
    console.log("abcs")
    setCurrentPage("/main_window/ProductEntry");
  }
  function onPurchaseClick(){
    console.log("abcs")
    setCurrentPage("/main_window/Purchase");
  }

  return (
    <React.Fragment>
      <ListItemButton onClick={onDashboardClick}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dasboard" />
      </ListItemButton>
      <ListItemButton onClick={onProductEntryClick}>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Product Entry" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Sale Record" />
      </ListItemButton>
      <ListItemButton onClick={onSalesClick}>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Sales" />
      </ListItemButton>
      <ListItemButton onClick={onPurchaseClick}>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Purchase" />
      </ListItemButton>
    </React.Fragment>
    );
};

export const secondaryListItems = (
  <React.Fragment>
    {/* <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader> */}
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="first" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="second" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="third" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="fourth" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="fifth" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="sixth" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="seventh" />
    </ListItemButton>
  </React.Fragment>
);
