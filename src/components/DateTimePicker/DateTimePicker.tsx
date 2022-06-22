import { CalendarIcon, ClockIcon } from 'components/Icons';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import './DateTimePicker.scss';

export enum EDisplayMode {
    my = 'month-year',
    dmy = 'day-month-year',
    dmyt = 'day-month-year-time',
}
const DateTimePicker: React.FC<{ displayMode?: EDisplayMode; date?: Date; setDate?: Function }> = ({
    displayMode = EDisplayMode.my,
    date,
    setDate,
}) => {
    const [selectedDateString, setSelectedDateString] = useState<string>('');
    const [selectedTimeString, setSelectedTimeString] = useState<string>('');
    const [selectedDateTime, setSelectedDateTime] = useState<Date>();

    useEffect(() => {
        if (date) {
            setSelectedDateTime(date);
        }
    }, [date]);

    useLayoutEffect(() => {
        if (selectedDateTime) {
            setDisplayDate(selectedDateTime);
        } else {
            setSelectedDateString('dd/mm/yyyy');
            setSelectedTimeString('hh:mm:ss');
        }
    }, [selectedDateTime]);

    const setDisplayDate = (date: Date): void => {
        switch (displayMode) {
            case EDisplayMode.my:
                setSelectedDateString(getMYString(date));
                break;
            case EDisplayMode.dmy:
                setSelectedDateString(getDMYString(date));
                break;
            case EDisplayMode.dmyt:
                setSelectedDateString(getDMYString(date));
                setSelectedTimeString(getTimeString(date));
                break;
            default:
                break;
        }
    };

    const getMYString = (date: Date): string => {
        const month = date.getMonth();
        const year = date.getFullYear();
        return `Tháng ${month}, ${year}`;
    };

    const getDMYString = (date: Date): string => {
        return date.toLocaleDateString();
    };

    const getTimeString = (date: Date): string => {
        const hour = date.getHours();
        const minute = date.getMinutes();
        const second = date.getSeconds();
        return `${hour}:${minute}:${second}`;
    };

    return (
        <div className="app__date-time-picker">
            <div className="app__date-time-picker__date">
                <div className="app__date-time-picker__selected">{selectedDateString}</div>
                <CalendarIcon className="app__date-time-picker__icon" size={24} />
            </div>
            {displayMode === EDisplayMode.dmyt && (
                <div className="app__date-time-picker__time">
                    <div className="app__date-time-picker__selected">{selectedTimeString}</div>
                    <ClockIcon className="app__date-time-picker__icon" size={24} />
                </div>
            )}
        </div>
    );
};

export default DateTimePicker;
