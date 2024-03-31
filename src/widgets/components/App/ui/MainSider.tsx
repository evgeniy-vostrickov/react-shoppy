import React, {useCallback, useEffect} from 'react'
import { MenuProps } from 'antd'
import SMenu from '../../../../shared/ui/Navbar/Navbar'
import Sider from 'antd/es/layout/Sider'
import IMainSider from '../types/IMainSider'
import { useAppSelector } from '../../../../app/helpers/redux'
import siderMenuItems from '../const/siderMenuItems'

const MainSider: React.FC<IMainSider> = ({collapsed, setCollapsed, windowSize}) => {
  const { theme } = useAppSelector(state => state.app)

  const onClick = useCallback<NonNullable<MenuProps['onClick']>>((event) => {
    if (windowSize < 768)
      setCollapsed(true)
    console.log('click ', event)
    // document.querySelector('.ant-menu-item-selected')?.classList.add('light')
    // console.log(document.querySelector('.ant-menu-item-selected')?.classList)
    // document.querySelector('.ant-menu-item-selected')?.classList.add(theme === 'dark' ? 'bg-[#64748b]!' : 'bg-[#cbd5e1]!')
    // document.querySelector('.ant-menu-item-selected')?.setAttribute('style', 'background-color: #64748b !important')
  }, [windowSize])

  useEffect(() => {
    console.log(windowSize)
  }, [windowSize])

  return (
    <Sider trigger={null} theme={theme} collapsible collapsed={collapsed}>
      <div className="h-12 m-3 bg-zinc-500" />
      <SMenu items={siderMenuItems} onClick={onClick} theme={theme} />
    </Sider>
  )
}

export default MainSider