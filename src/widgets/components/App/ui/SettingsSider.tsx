import React, { useCallback } from 'react'
import ISettingsSider from '../types/ISettingsSider'
import { Modal, Radio, RadioChangeEvent } from 'antd'
import { useActions } from '../../../../app/helpers/actions'
import { useAppSelector } from '../../../../app/helpers/redux'

const SettingsSider: React.FC<ISettingsSider> = ({ isSettingsSiderOpen, setIsisSettingsSiderOpen }) => {
    const { theme } = useAppSelector(state => state.app)
    const { setTheme } = useActions()

    const handleCancel = useCallback(() => {
        setIsisSettingsSiderOpen(false)
    }, [])

    const onChangeTheme = useCallback((event: RadioChangeEvent) => {
        console.log("Theme was change!", event)
        setTheme(event.target.value)
    }, [])

    return (
        <Modal className='absolute right-0 top-0' title="Settings" open={isSettingsSiderOpen} onCancel={handleCancel} okButtonProps={{ hidden: true }}>
            <div className='h-[50vh]'>
                <h3>Theme Options</h3>
                <Radio.Group name="theme" value={theme} onChange={onChangeTheme}>
                    <Radio value="light"> Light </Radio>
                    <Radio value="dark"> Dark </Radio>
                </Radio.Group>
            </div>
        </Modal>
    )
}

export default SettingsSider