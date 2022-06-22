import { ETicketStatus, ITicket } from 'models/ticket';
import React from 'react';
import './Table.scss';

const dataMock: ITicket[] = [
    {
        ticketPackCode: 'PACK',
        ticketNo: 'A',
        bookingCode: 'BOOKINGCODE',
        status: ETicketStatus.used,
        usageDate: new Date(),
        ticketOutDate: new Date(),
        checkInGate: 1,
    },
    {
        ticketPackCode: 'PACK',
        ticketNo: 'A',
        bookingCode: 'BOOKINGCODE',
        status: ETicketStatus.available,
        usageDate: new Date(),
        ticketOutDate: new Date(),
        checkInGate: 1,
    },
    {
        ticketPackCode: 'PACK',
        ticketNo: 'A',
        bookingCode: 'BOOKINGCODE',
        status: ETicketStatus.available,
        usageDate: new Date(),
        ticketOutDate: new Date(),
        checkInGate: 1,
    },
    {
        ticketPackCode: 'PACK',
        ticketNo: 'A',
        bookingCode: 'BOOKINGCODE',
        status: ETicketStatus.available,
        usageDate: new Date(),
        ticketOutDate: new Date(),
        checkInGate: 1,
    },
    {
        ticketPackCode: 'PACK',
        ticketNo: 'A',
        bookingCode: 'BOOKINGCODE',
        status: ETicketStatus.available,
        usageDate: new Date(),
        ticketOutDate: new Date(),
        checkInGate: 1,
    },
    {
        ticketPackCode: 'PACK',
        ticketNo: 'A',
        bookingCode: 'BOOKINGCODE',
        status: ETicketStatus.available,
        usageDate: new Date(),
        ticketOutDate: new Date(),
        checkInGate: 1,
    },
    {
        ticketPackCode: 'PACK',
        ticketNo: 'A',
        bookingCode: 'BOOKINGCODE',
        status: ETicketStatus.used,
        usageDate: new Date(),
        ticketOutDate: new Date(),
        checkInGate: 1,
    },
];

export interface IColumn {
    heading: string;
    value: string;
}

const Table: React.FC<{ data?: Array<any>; displayColumns: Array<IColumn> }> = ({
    data = dataMock,
    displayColumns,
}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>STT</th>
                    {displayColumns.map((column, index) => (
                        <th key={index}>{column.heading}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td>{++index}</td>
                            {displayColumns.map((column, index) => (
                                <td key={index}>
                                    {Object.prototype.toString.call(item[column.value]) === '[object Date]'
                                        ? item[column.value].toLocaleDateString()
                                        : item[column.value]}
                                </td>
                            ))}
                        </tr>
                    );
                })}
                
            </tbody>
        </table>
    );
};

export default Table;
