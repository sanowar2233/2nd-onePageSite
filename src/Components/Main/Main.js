import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Main = () => {
    return (
        <div>
            <h1>This is common page</h1>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;