import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css'


const Header = () => {
    return (
        <div className='bg-success fs-1  border border-rounded  ' >
            <NavLink className={({isActive})=>isActive ? 'active':undefined}to='/home'>Home</NavLink>
            <NavLink to='/posts'>Postttttt</NavLink>
            
            
            
        </div>
    );
};

export default Header;