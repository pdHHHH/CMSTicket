import AccountItem from 'components/AccountItem';
import React from 'react';
import { Link } from 'react-router-dom';
import Search from 'components/Search';
import './Header.scss';
const Header: React.FC = () => {
    return (
        <header className="header__wrapper">
            <div className="header__container">
                <Link className="header__logo" to={"/dashboard"}>
                    <img src={require("assets/App.png")} alt="" />
                </Link>
                <div className="header__search">
                    <Search/>
                </div>
                <div className="header__account-item">
                    <AccountItem/>
                </div>
            </div>
        </header>
    );
};

export default Header;
