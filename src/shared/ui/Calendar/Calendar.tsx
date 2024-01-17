import React from 'react'
import type { Dayjs } from 'dayjs';
import type { BadgeProps, CalendarProps } from 'antd';
import { Badge, Calendar, ConfigProvider } from 'antd';
import ruRU from 'antd/lib/calendar/locale/ru_RU';
import local_ruRU from 'antd/lib/locale/ru_RU';
import moment from 'moment';
import 'moment/locale/ru';
import { useAppSelector } from '../../../app/helpers/redux';
import { SelectInfo } from 'antd/es/calendar/generateCalendar';
import { ICalendarOfEvents } from '../../types/ICalendarOfEvents';

const edit_ruRU = { ...ruRU, "lang": { ...ruRU.lang, "shortWeekDays": ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"] } }

// import dayjs from 'dayjs';
// import 'dayjs/locale/ru';
// dayjs.locale('ru');

const getMonthData = (value: Dayjs) => {
    if (value.month() === 9) {
        return 1394;
    }
};

const CalendarOfEvents: React.FC<ICalendarOfEvents> = ({ showModal }) => {
    const { events } = useAppSelector(state => state.calendar)

    const monthCellRender = (value: Dayjs) => {
        const num = getMonthData(value);
        return num ? (
            <div className="notes-month">
                <section>{num}</section>
                <span>Backlog number</span>
            </div>
        ) : null;
    };

    const dateCellRender = (value: Dayjs) => {
        const listEventsForYear = events[value.year()] || {}
        const listEventsForMonth = listEventsForYear[value.month()] || {}
        const listEventsForDay = listEventsForMonth[value.date()] || []
        return (
            <ul className="events">
                {listEventsForDay.map((item) => (
                    <li key={item.content}>
                        <Badge status={item.type as BadgeProps['status']} text={item.content} />
                    </li>
                ))}
            </ul>
        );
    };

    const onSelect = (newValue: Dayjs, selectInfo: SelectInfo) => {
        if (selectInfo.source === 'date')
            showModal(newValue)
    }

    const cellRender: CalendarProps<Dayjs>['cellRender'] = (current, info) => {
        if (info.type === 'date') return dateCellRender(current);
        if (info.type === 'month') return monthCellRender(current);
        return info.originNode;
    };

    return <Calendar cellRender={cellRender} onSelect={onSelect} locale={edit_ruRU} />;
}

export default CalendarOfEvents