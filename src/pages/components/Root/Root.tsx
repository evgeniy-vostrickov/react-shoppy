import React, { useState, useEffect } from 'react'
import { Layout, MenuProps } from 'antd'
import { Content } from 'antd/es/layout/layout'
import MainSider from '../../../widgets/components/App/MainSider'
import MainHeader from '../../../widgets/components/App/MainHeader'
import IconAvatar from '../../../shared/ui/IconAvatar/IconAvatar'
import ToolbarAccess from '../../../entites/components/Header/ToolbarAccess'
import { getItem } from '../../../widgets/const/dataProcessingFunctions'
import useResize from '../../helpers/useResize'
import { Outlet } from 'react-router-dom'
import SettingsSider from '../../../widgets/components/App/SettingsSider'
import ButtonSettings from '../../../shared/ui/ButtonSettings/ButtonSettings'

const Root: React.FC = () => {
    const [collapsedMainSider, setCollapsedMainSider] = useState(false)
    const [isSettingsSiderOpen, setIsisSettingsSiderOpen] = useState(false);

    const showSettingsSider = () => {
        setIsisSettingsSiderOpen(true);
    };

    const windowSize = useResize()

    return (
        <Layout>
            <MainSider collapsed={collapsedMainSider} setCollapsed={setCollapsedMainSider} windowSize={windowSize} />
            <Layout className="site-layout">
                <MainHeader collapsed={collapsedMainSider} setCollapsed={setCollapsedMainSider} />
                <Content className='m-4 p-6 min-h-screen'
                    style={{
                        // background: '#f3f2f2',
                    }}
                >
                    <Outlet />
                </Content>
                <ButtonSettings showSettingsSider={showSettingsSider} />
            </Layout>

            <SettingsSider isSettingsSiderOpen={isSettingsSiderOpen} setIsisSettingsSiderOpen={setIsisSettingsSiderOpen} />
        </Layout>
    )
}

export default Root