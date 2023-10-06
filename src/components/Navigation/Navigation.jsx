import React from 'react';
import NavItem from './NavItem';
import { menu } from '../../constants/menu';
import { useLocation } from 'react-router-dom';
import cl from './Navigation.module.scss'

const Navigation = () => {
    const currentPath = useLocation().pathname;

    return (
        <nav className={cl.nav}>
            <ul className={cl.list}>
                {menu.map(({ path, content }) =>
                    <NavItem
                        key={path}
                        path={path}
                        isActive={currentPath === path}>
                        {content}
                    </NavItem>
                )}
            </ul>
        </nav>
    );
};

export default Navigation;