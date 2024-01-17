import { ReactElement } from 'react';

export interface IModalWindow {
    children: ReactElement
    title: string
    isModalOpen: boolean
    handleOk: () => void
    handleCancel: () => void
}