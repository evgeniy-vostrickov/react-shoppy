import { Button } from 'antd'
import React from 'react'
import { MenuFoldOutlined, MenuUnfoldOutlined, } from '@ant-design/icons'
import IHamburgerMenu from './types/IHamburgerMenu'

const HamburgerMenu: React.FC<IHamburgerMenu> = ({ collapsed, setCollapsed }) => {
    return (
        <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
                fontSize: '16px',
                width: 64,
                height: 64,
            }}
        />
    )
}

export default HamburgerMenu