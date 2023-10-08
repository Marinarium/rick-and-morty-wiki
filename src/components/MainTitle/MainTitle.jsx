import React from 'react';
import cl  from "./MainTitle.module.scss";
import classNames from 'classnames';

const MainTitle = ({left, children}) => {
    const titleStyles = {
        [cl.titleLeft]: left,
    }
    return (
        <h1 className={classNames(cl.title, titleStyles)}>
            {children}
        </h1>
    );
};

export default MainTitle;