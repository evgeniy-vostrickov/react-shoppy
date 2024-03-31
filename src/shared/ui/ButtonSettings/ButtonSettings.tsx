import React, { memo } from 'react'
import { SettingOutlined } from '@ant-design/icons'
import { Button, Tooltip } from 'antd'
import IButtonSettings from './types/IButtonSettings'

const ButtonSettings: React.FC<IButtonSettings> = memo(({ showSettingsSider }) => {
    return (
        <Tooltip title="Settings">
            <Button type="primary" size='large' className='fixed right-7 bottom-7' shape="circle" icon={<SettingOutlined />} onClick={showSettingsSider} />
        </Tooltip>
    )
})

export default ButtonSettings