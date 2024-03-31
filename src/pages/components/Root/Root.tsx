import React, { useCallback, useState } from 'react'
import { Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'
import MainSider from '../../../widgets/components/App/ui/MainSider'
import MainHeader from '../../../widgets/components/App/ui/MainHeader'
import useResize from '../../helpers/useResize'
import { Outlet } from 'react-router-dom'
import SettingsSider from '../../../widgets/components/App/ui/SettingsSider'
import ButtonSettings from '../../../shared/ui/ButtonSettings/ButtonSettings'

const Root: React.FC = () => {
    const [collapsedMainSider, setCollapsedMainSider] = useState(false)
    const [isSettingsSiderOpen, setIsisSettingsSiderOpen] = useState(false)

    const showSettingsSider = useCallback(() => setIsisSettingsSiderOpen(true), [])

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