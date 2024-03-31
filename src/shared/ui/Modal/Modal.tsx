import { Modal } from 'antd'
import React, { memo } from 'react'
import { IModalWindow } from './types/IModalWindow'

const ModalWindow: React.FC<IModalWindow> = memo(({ children, title, isModalOpen, handleOk, handleCancel }) => {
    return (
        <Modal title={title} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            {children}
        </Modal>
    )
})

export default ModalWindow