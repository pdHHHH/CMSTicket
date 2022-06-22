import Button from 'components/Button';
import { FilterIcon } from 'components/Icons';
import Search from 'components/Search';
import Table from 'layouts/components/Table';
import { IColumn } from 'layouts/components/Table/Table';
import React from 'react';
import './Ticket.scss';

const columns: IColumn[] = [
    { heading: 'Booking Code', value: 'bookingCode' },
    {
        heading: 'Số vé',
        value: 'ticketNo',
    },
    {
        heading: 'Tình trạng vé',
        value: 'status',
    },
    {
        heading: 'Ngày sử dụng',
        value: 'usageDate',
    },
    { heading: 'Ngày xuất vé', value: 'ticketOutDate' },
    { heading: 'Cổng check - in', value: 'checkInGate' },
];

const Ticket: React.FC = () => {
    return (
        <div className="app__ticket">
            <div className="label">Danh sách vé</div>
            <div className="ticket-filter">
                <Search placeHolder="Tìm bằng số vé" className="ticket-filter__search" />
                <div className="ticket-filter__buttons">
                    <Button label="Lọc vé" outlined leftIcon={<FilterIcon />} />
                    <Button label="Xuất file (.csv)" outlined />
                </div>
            </div>
            <div className="ticket-table">
                <Table displayColumns={columns} />
            </div>
        </div>
    );
};

export default Ticket;
