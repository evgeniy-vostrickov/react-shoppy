import { ColumnsType } from "antd/es/table"
import { DataTypeTableOrder, OrderStatusColor, OrderStatusType } from "../types/MOrdersTable"
import { Badge } from "antd"

const OrderStatus: OrderStatusColor = {
  Active: '#67e8f9',
  Canceled: '#f43f5e',
  Complete: '#22c55e',
  Pending: '#f97316',
  Rejected: '#dc2626',
}

export const columnsOrdersTable: ColumnsType<DataTypeTableOrder> = [
  {
      title: 'Image',
      dataIndex: 'image',
      align: 'center',
      width: '160px',
      render: (url) => <div className='w-28 h-28 m-auto flex justify-center items-center'><img className='w-full h-full object-contain' src={url} /></div>,
  },
  {
      title: 'Item',
      dataIndex: 'group',
      align: 'center',
      className: 'text-center',
      filters: [
          {
              text: 'Shoes',
              value: 'Shoes',
          },
          {
              text: 'Clothes',
              value: 'Clothes',
          },
      ],
      onFilter: (value, record) => record.group.indexOf(value.toString()) === 0,
  },
  {
      title: 'Customer Name',
      dataIndex: 'name',
      // sorter: (a, b) => Number(a.name < b.name),
      sorter: true,
      sortDirections: ['descend'],
  },
  {
      title: 'Total Amount',
      dataIndex: 'amount',
      sorter: (a, b) => a.amount - b.amount,
  },
  {
      title: 'Status',
      dataIndex: 'status',
      render: (status: OrderStatusType) => <Badge count={status} color={OrderStatus[status]} />
  },
  {
      title: 'Order ID',
      dataIndex: 'order_id',
  },
  {
      title: 'Location',
      dataIndex: 'location',
  },
]