import { Select, Space } from 'antd'
import React from 'react'
import IESelectTransction from '../../model/IESelectTransction';

const ESelectTransction: React.FC<IESelectTransction> = () => {
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };
    return (
            <Space className='items-start w-1/3 h-full mt-5' wrap>
                <Select
                    defaultValue="lucy"
                    className='w-[400px]'
                    onChange={handleChange}
                    options={[
                        { value: 'jack', label: 'Jack' },
                        { value: 'lucy', label: 'Lucy' },
                        { value: 'Yiminghe', label: 'yiminghe' },
                        { value: 'disabled', label: 'Disabled' },
                    ]}
                />
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