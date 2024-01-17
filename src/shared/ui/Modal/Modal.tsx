import { Button, Modal } from 'antd';
import React, { ReactElement, useState } from 'react'
import { IModalWindow } from '../../types/IModalWindow';

const ModalWindow: React.FC<IModalWindow> = ({ children, title, isModalOpen, handleOk, handleCancel }) => {
    return (
        <Modal title={title} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            {children}
        </Modal>
    );
}

export default ModalWindow