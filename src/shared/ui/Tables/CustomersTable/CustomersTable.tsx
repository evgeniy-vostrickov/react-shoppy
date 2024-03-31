import React, { useEffect, useState } from 'react'
import columnsCustomersTable from '../config/columnsCustomersTable'
import { TableRowSelection } from 'antd/es/table/interface'
import { DataTypeTableCustomers, ICustomersTable } from '../types/MCustomersTable'
import { Table } from 'antd'
import { IHandleTableChange, TableParams } from '../types/MTable'
import { useSearchParamsState } from '../../../../app/helpers/use-searchParamsState'
import { useGetCustomersQuery } from '../../../api/store/slices/organization.api'

const CustomersTable: React.FC<ICustomersTable> = ({ dataCustomers, setListRecordsSelected, setDataCustomers }) => {
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 3,
    },
  })
  const { isLoading, isFetching, isError, error, data: customersWithQuery } = useGetCustomersQuery()

  const [value, updateValue] = useSearchParamsState('b')

  useEffect(() => {
    // updateValue('23', {})
    // updateValue((prev: string) => (String(+prev + 1)), {})
  }, [])

  const rowSelection: TableRowSelection<DataTypeTableCustomers> = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
    },
    onSelect: (record, selected, selectedRows) => {
      setListRecordsSelected(selectedRows)
      console.log(record, selected, selectedRows)
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      console.log(selected, selectedRows, changeRows)
    },
  }

  const handleTableChange: IHandleTableChange<DataTypeTableCustomers> = (pagination, filters, sorter, extra) => {
    setTableParams({ pagination })
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setDataCustomers([])
    }
  }

  useEffect(() => {
    if (customersWithQuery) {
      let newDataCustomers = customersWithQuery ? customersWithQuery.map(customer => ({
        key: customer.id,
        customerId: customer.id,
        ...customer
      })) : []

      setDataCustomers(newDataCustomers)
      // setPaginationState((prevState) => ({ ...prevState, total: responseData.total }))
    }
  }, [customersWithQuery, setDataCustomers])

  return (
    <Table columns={columnsCustomersTable} dataSource={dataCustomers} scroll={{ x: 700 }} rowSelection={{ ...rowSelection }} pagination={tableParams.pagination} onChange={handleTableChange} />
  )
}

export default CustomersTable