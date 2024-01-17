export type EventType = 'warning' | 'success' | 'error';
type EventDate = {
    year: number
    month: number
    date: number
}

export type EventItem = {
    type: EventType;
    content: string;
};

export interface EventItemFromForm {
    event: EventItem,
    date: EventDate
}

type ListEventsForDate = {
    [key: number]: EventItem[];
};

type ListEventsForMonth = {
    [key: number]: ListEventsForDate;
};

type ListEventsForYear = {
    [key: number]: ListEventsForMonth;
};

export interface IAppState {
    events: ListEventsForYear
}

export enum Months {
    January = 0,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December
}