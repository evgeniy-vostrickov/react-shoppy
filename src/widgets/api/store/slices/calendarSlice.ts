import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { EventItemFromForm, IAppState, Months } from "../models/MCalendarSlice"

const initialState: IAppState = {
    events: {
        2023: {
            [Months.October]: {
                8: [
                    { type: 'warning', content: 'This is warning event.' },
                    { type: 'success', content: 'This is usual event.' },
                ],
                10: [
                    { type: 'warning', content: 'This is warning event.' },
                    { type: 'success', content: 'This is usual event.' },
                    { type: 'error', content: 'This is error event.' },
                ],
                15: [
                    { type: 'warning', content: 'This is warning event' },
                    { type: 'success', content: 'This is very long usual event......' },
                    { type: 'error', content: 'This is error event 1.' },
                    { type: 'error', content: 'This is error event 2.' },
                    { type: 'error', content: 'This is error event 3.' },
                    { type: 'error', content: 'This is error event 4.' },
                ]
            }
        }
    }
}

const calendarSlice = createSlice({
    name: 'calendar',
    initialState,
    reducers: {
        addEvent(state, action: PayloadAction<EventItemFromForm>) {
            const {year, month, date} = action.payload.date
            const event = action.payload.event
            if (state.events[year]) {
                if (state.events[year][month]) {
                    if (state.events[year][month][date]) {
                        state.events = {...state.events, [year]: {
                            ...state.events[year], [month]: {
                                ...state.events[year][month], [date]: 
                                [
                                    ...state.events[year][month][date],
                                    event
                                ]
                            }
                        }}
                    }
                    else 
                        state.events = {...state.events, [year]: {
                            ...state.events[year], [month]: {
                                ...state.events[year][month], [date]: [
                                    event
                                ]
                            }
                        }}
                }
                else
                    state.events = {...state.events, [year]: {
                        ...state.events[year], [month]: {
                            [date]: [
                                event
                            ]
                        }
                    }}
            }
            else
                state.events = {...state.events, [year]: {
                    [month]: {
                        [date]: [
                            event
                        ]
                    }
                }}
        }
    }
})

export const calendarReducer = calendarSlice.reducer
export const calendarActions = calendarSlice.actions