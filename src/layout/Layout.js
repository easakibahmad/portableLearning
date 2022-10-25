import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SharedLeftSide from '../components/SharedLeftSide';

const Layout = () => {
    return (
        <div>
            <div>
                <Header></Header>
            </div>
            <div className='lg:grid lg:grid-cols-4'>
                <div className='lg:col-span-1'>
                    <SharedLeftSide></SharedLeftSide>
                </div>
                <div className='lg:col-span-3'>
                    <Outlet></Outlet>
                </div>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Layout;