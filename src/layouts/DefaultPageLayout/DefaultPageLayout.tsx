import Sidebar from 'layouts/components/Sidebar';
import React from 'react';
import Header from 'layouts/components/Header';
import './DefaultPageLayout.scss';
const DefaultPageLayout: React.FC<{ children: JSX.Element }> = ({ children }) => {
    return (
        <div className='app__wrapper'>
            <Header/>
            <div className='container'>
                <Sidebar/>
                <div className='content'>{children}</div>
            </div>
        </div>

    );
};

export default DefaultPageLayout;
