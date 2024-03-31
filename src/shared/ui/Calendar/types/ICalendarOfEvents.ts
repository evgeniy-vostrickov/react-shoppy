import type { Dayjs } from 'dayjs'

export interface ICalendarOfEvents {
    showModal: (dateEvent: Dayjs) => void
}