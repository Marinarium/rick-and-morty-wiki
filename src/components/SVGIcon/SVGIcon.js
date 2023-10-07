import React from 'react';

const SvgIcon = ({idValue, width, height, className, ...props}) => {
    return (
        <svg
            width={width.toString()}
            height={height.toString()}
            className={className}
            {...props}
        >
            <use xlinkHref={`/img/sprite.svg#${idValue}`}/>
        </svg>
    );
};

export default SvgIcon;