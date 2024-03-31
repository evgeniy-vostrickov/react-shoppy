import { Select, Space } from 'antd'
import React, { useCallback } from 'react'
import IESelectTransction from '../Tables/types/IESelectTransction'

const ESelectTransction: React.FC<IESelectTransction> = () => {
    const handleChange = useCallback((value: string) => {
        console.log(`selected ${value}`)
    }, [])

    return (
            <Space className='w-1/3 h-full mt-5' wrap>
                <Select
                    defaultValue="lucy"
                    className='w-[250px]'
                    onChange={handleChange}
                    options={[
                        { value: 'jack', label: 'Jack' },
                        { value: 'lucy', label: 'Lucy' },
                        { value: 'Yiminghe', label: 'yiminghe' },
                        { value: 'disabled', label: 'Disabled' },
                    ]}
                />
            </Space>
    )
}

export default ESelectTransction