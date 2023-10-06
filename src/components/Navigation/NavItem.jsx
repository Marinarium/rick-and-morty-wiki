import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import cl from './Navigation.module.scss';

const NavItem = ({children, path, isActive}) => {
    const appearances = {
        [cl["link--active"]]: isActive,
    };

    return (
        <li className={cl.item}>
            <Link to={path} className={classNames(cl.link, appearances)}>{children}</Link>
        </li>
    );
};

export default NavItem;