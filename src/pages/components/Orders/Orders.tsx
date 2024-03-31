import React from 'react'
import { Typography } from 'antd'
import OrdersTableWidget from '../../../widgets/components/Tables/OrdersTableWidget'

const { Title } = Typography;

const Orders:React.FC = () => {
    return (
        <div>
            <Title level={2}>Orders</Title>
            <OrdersTableWidget />
        </div>
    )
}

export default Orders