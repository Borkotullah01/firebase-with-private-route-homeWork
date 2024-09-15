import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';

const Root = () => {
    return (
        <div className='grid justify-center mx-w-[1200px]'>
            <Navbar></Navbar>
            <div className="h-[71px]"></div>
            <Outlet></Outlet>
        </div> 
    );
};

export default Root;