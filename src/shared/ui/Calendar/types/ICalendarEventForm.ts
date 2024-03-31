import type { Dayjs } from 'dayjs'

export interface ICalendarEventForm {
  isModalOpen: boolean
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  dateEvent: Dayjs | undefined
}