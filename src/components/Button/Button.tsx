import React from 'react';
import './Button.scss';

const Button: React.FC<{ onClick?: Function; label?: string; outlined?: boolean; leftIcon?: JSX.Element, className?: string}> = ({
    onClick = () => {},
    label = 'Label',
    outlined = false,
    leftIcon,
    className
}) => {
    return (
        <button className={`app__button--${outlined ? `outlined` : `filled`} ${className}`} onClick={() => onClick()}>
            {leftIcon && leftIcon}
            {label}
        </button>
    );
};

export default Button;
