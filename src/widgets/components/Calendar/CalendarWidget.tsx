import React, { useCallback, useState } from 'react'
import CalendarOfEvents from '../../../shared/ui/Calendar/components/Calendar'
import type { Dayjs } from 'dayjs'
import CalendarEventForm from '../../../shared/ui/Calendar/components/CalendarEventForm'

const CalendarWidget = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [dateEvent, setDateEvent] = useState<Dayjs>()


    const showModal = useCallback((dateEvent: Dayjs) => {
        setDateEvent(dateEvent)
        setIsModalOpen(true)
    }, [])

    return (
        <>
            <CalendarOfEvents showModal={showModal} />
            <CalendarEventForm dateEvent={dateEvent} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        </>
    )
}

export default CalendarWidget