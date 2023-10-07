import React from 'react';
import cl  from "./MainTitle.module.scss";

const MainTitle = ({children}) => {
    return (
        <h1 className={cl.title}>
            {children}
        </h1>
    );
};

export default MainTitle;