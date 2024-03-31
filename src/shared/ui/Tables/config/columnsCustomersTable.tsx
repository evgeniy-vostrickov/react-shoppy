import { Badge } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { CustomersStatusType, CustomerField, DataTypeTableCustomers } from '../types/MCustomersTable'
import OrderStatus from './OrderStatus'

const columnsCustomersTable: ColumnsType<DataTypeTableCustomers> = [
  {
      title: 'ID',
      dataIndex: 'customerId',
      width: 50
  },
  {
      title: 'Name',
      dataIndex: 'customer',
      align: 'center',
      render: ({ image, name, email }: CustomerField) => <div className='w-28 h-28 m-auto flex justify-center items-center'><img className='w-full h-full object-contain' src={image} alt='Картинка' /><div><div>{name}</div><div>{email}</div></div></div>,
  },
  {
      title: 'Project Name',
      dataIndex: 'projectName',
  },
  {
      title: 'Status',
      dataIndex: 'status',
      render: (status: CustomersStatusType) => <Badge text={status} color={OrderStatus[status]} size="small" />
  },
  {
      title: 'Weeks',
      dataIndex: 'weeks',
  },
  {
      title: 'Budget',
      dataIndex: 'budget',
  },
  {
      title: 'Location',
      dataIndex: 'location',
  },
]

export default columnsCustomersTable