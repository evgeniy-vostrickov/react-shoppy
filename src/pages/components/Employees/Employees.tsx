import React from 'react'
import EmployeesTable from '../../../widgets/components/Tables/EmployeesTableWidget'
import { Typography } from 'antd'

const { Title } = Typography;

const Employess: React.FC = () => {
  return (
    <div>
        <Title level={2}>Employess</Title>
        <EmployeesTable />
    </div>
  )
}

export default Employess