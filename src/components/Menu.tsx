import React from 'react'
import Avatar from '@mui/material/Avatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Divider from '@mui/material/Divider';

import AvatarIcon from '@mui/icons-material/Person';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';

import { store } from "../store";
import { NavLink } from 'react-router-dom';
import { RouterPathEnum } from '../enums/RouterPathEnum';

function Menu(props: any) {
  const aMenu = [
    {
      'title': 'Usuarios',
      'icon': <AvatarIcon/>,
      'padre': null
    }
  ]


  return (
    <>
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main', alignContent: 'center' }} style={{marginLeft:'40%'}}>
        <AvatarIcon />
      </Avatar>
      <ListSubheader component="div" inset>
        Usuario: {props.user}
      </ListSubheader>
      
      <Divider sx={{ my: 1 }} />
      <ListSubheader component="div" inset>
        Administración
      </ListSubheader>
      <NavLink to={RouterPathEnum.HOME} 
       className={isActive =>
        "menu" + (!isActive ? "-active" : "")}
        style={isActive => ({
          color: isActive ? "red" : "blue"
        })}>
        <ListItemButton>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
      </NavLink>
      <Divider sx={{ my: 1 }} />
      <NavLink to={RouterPathEnum.ABOUT}  style={isActive => ({
          color: isActive ? "green" : "blue"
        })}>
        <ListItemButton>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItemButton>
      </NavLink>
      <NavLink
              to={RouterPathEnum.HOME}
              onSelect={(prop)=>{console.log(prop)}}
            >            
        <ListItemButton>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Customers" />
        </ListItemButton>
      </NavLink>
      <ListItemButton>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Reports" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Integrations" />
      </ListItemButton>
    </>
  )
}

function SecondMenu() {
  return (
    <>
      <ListSubheader component="div" inset>
        Saved reports
      </ListSubheader>
      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Current month" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Last quarter" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Year-end sale" />
      </ListItemButton>
    </>
  )
}

export { Menu, SecondMenu }
