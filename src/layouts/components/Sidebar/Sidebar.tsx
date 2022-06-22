import { HomeIcon, InvoiceIcon, SettingIcon, TicketIcon } from 'components/Icons';
import React from 'react';
import Menu, { MenuItem } from './Menu';
import './Sidebar.scss';
import config from 'config/index';

const Sidebar: React.FC = () => {
    return (
        <div className="app__sidebar">
            <div className="app__sidebar__wrapper">
                <Menu>
                    <>
                        <MenuItem name="Trang chủ" icon={<HomeIcon size={24} />} to={config.routes.dashboard} />
                        <MenuItem name="Quản lý vé" icon={<TicketIcon size={24} />} to={config.routes.ticket} />
                        <MenuItem name="Đối soát vé" icon={<InvoiceIcon size={24} />} to={config.routes.check} />
                        <MenuItem name="Cài đặt" icon={<SettingIcon size={24} />} to={config.routes.setting} />
                    </>
                </Menu>
            </div>
        </div>
    );
};

export default Sidebar;
