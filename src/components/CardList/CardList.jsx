import React from 'react';
import cl from './CardList.module.scss';

const CardList = ({children}) => {
    return (
        <ul className={cl.list}>
            {children}
        </ul>
    );
};

export default CardList;