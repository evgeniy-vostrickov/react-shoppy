import React from 'react'
import ToolbarAccess from '../../../../entites/components/Header/ToolbarAccess'
import HamburgerMenu from '../../../../shared/ui/HamburgerMenu/HamburgerMenu'
import { Header } from 'antd/es/layout/layout'
import { IMainHeader } from '../types/IMainHeader'
import { useAppSelector } from '../../../../app/helpers/redux'
import getValueForTheme from '../../../../app/helpers/getValueForTheme'
import notificationItems from '../const/notificationItems'
import headerMenuItems from '../const/headerMenuItems'
import clsx from 'clsx'

const MainHeader: React.FC<IMainHeader> = ({collapsed, setCollapsed}) => {
    const { theme } = useAppSelector(state => state.app)
    const bgStyle = getValueForTheme(theme, "bg-white",  "bg-[#001529]")

    return (
        <Header className={clsx(bgStyle, "flex justify-between p-0")}>
            <HamburgerMenu collapsed={collapsed} setCollapsed={setCollapsed} />
            <ToolbarAccess collapsed={collapsed} menuItems={headerMenuItems} notificationItems={notificationItems} />
        </Header>
    )
}

export default MainHeader