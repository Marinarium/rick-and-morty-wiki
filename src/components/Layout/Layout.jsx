import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import cl from './Layout.module.scss';

const Layout = () => {
    return (
        <div>
            <header className={cl.header}>
                <Link to="/">
                    <img className={cl.logo}  src="/img/logo.png" alt="logotype" />
                </Link>
                <Navigation/>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
);
};

export default Layout;