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
            <main className={cl.main}>
                <Outlet/>
            </main>
            <footer className={cl.footer}>&lt; &gt; by <a className={cl.link} href="https://github.com/Marinarium">Schwabauer Marina</a> 2023</footer>
        </div>
);
};

export default Layout;