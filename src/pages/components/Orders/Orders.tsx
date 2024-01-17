import React from 'react'
import OrderTable from '../../../shared/ui/OrderTable/OrderTable'
import { Typography } from 'antd';

const { Title } = Typography;

const Orders:React.FC = () => {
    return (
        <div>
            <Title level={2}>Orders</Title>
            <OrderTable />
        </div>
    )
}

export default Orders