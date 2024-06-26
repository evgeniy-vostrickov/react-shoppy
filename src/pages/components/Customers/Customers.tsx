import React from 'react'
import CustomersTable from '../../../widgets/components/Tables/CustomersTableWidget'
import { Typography } from 'antd'

const { Title } = Typography;

const Customers: React.FC = () => {
  return (
    <div>
        <Title level={2}>Customers</Title>
        <CustomersTable />
    </div>
  )
}

export default Customers