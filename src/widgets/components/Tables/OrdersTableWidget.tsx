import React, { useState } from 'react'
import OrdersTable from '../../../shared/ui/Tables/OrdersTable/OrdersTable'
import { DataTypeTableOrder } from '../../../shared/ui/Tables/types/MOrdersTable'

const OrdersTableWidget = () => {
  const [dataOrders, setDataOrders] = useState<DataTypeTableOrder[]>([])
  return (
    <OrdersTable dataOrders={dataOrders} setDataOrders={setDataOrders} />
  )
}

export default OrdersTableWidget