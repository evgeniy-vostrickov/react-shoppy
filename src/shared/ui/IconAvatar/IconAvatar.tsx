import React from 'react'
import IIconAvatar from './types/IIconAvatar'
import { Avatar, Dropdown, Space } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { UserOutlined } from '@ant-design/icons'

const IconAvatar: React.FC<IIconAvatar> = ({ imgUrl, nameUser, items, hidden }) => {
    return (
        <div className={hidden ? "mx-5 max-sm:hidden" : 'mx-5'}>
            {imgUrl ? <Avatar src={imgUrl} /> : <Avatar icon={<UserOutlined />} />}
            <Dropdown menu={{ items }}>
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        Hi, <b>{nameUser}</b>
                        <DownOutlined />
                    </Space>
                </a>
            </Dropdown>
        </div>
    )
}

export default IconAvatar