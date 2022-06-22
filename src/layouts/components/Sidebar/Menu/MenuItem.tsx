import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './MenuItem.scss';

const MenuItem: React.FC<{ name: string; to: string; icon?: JSX.Element }> = ({ name, to, icon }) => {
    const path = useLocation();
    return (
        <NavLink to={to} className={`sidebar__menu__menu-item ${path.pathname.includes(to) && `active`}`}>
            <div className="sidebar__menu__menu-item__icon">{icon}</div>
            <div className="sidebar__menu__menu-item__name">{name}</div>
        </NavLink>
    );
};

export default MenuItem;
