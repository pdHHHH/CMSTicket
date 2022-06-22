import React from 'react';
import './Menu.scss';

const Menu: React.FC<{ children: JSX.Element }> = ({ children }) => {
    return <nav>{children}</nav>;
};

export default Menu;
