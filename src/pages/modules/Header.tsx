import * as React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { RouterPathEnum } from '../../enums/RouterPathEnum';


function Header() {
    return (
      <ul className='ulContainer'>
        <li><Link to={ RouterPathEnum.HOME }>Home</Link></li>
        <li><Link to={ RouterPathEnum.ABOUT }>about</Link></li>
        <li><Link to={ RouterPathEnum.MEMBER }>member</Link></li>
        <li><Link to={ RouterPathEnum.LOGIN }>login</Link></li>
        <li><Link to={ RouterPathEnum.DASHBOARD }>Dashboard</Link></li>
      </ul>
    );
  }

export default Header;
