import { Avatar, Button, Input, InputRef, Space, Table } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import type { ColumnType, TablePaginationConfig } from 'antd/es/table'
import EditableRow from '../Common/EditableRow'
import EditableCell from '../Common/EditableCell'
import { SearchOutlined } from '@ant-design/icons'
import { ColumnTypes, DataEmployeesIndex, DataTypeTableEmployees, DefaultColumnsType, EmployeeField, IEmployeesTable } from '../types/MEmployeesTable'
import { FilterConfirmProps, FilterDropdownProps } from 'antd/es/table/interface'
import Highlighter from 'react-highlight-words'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { TableParams } from '../types/MTable'
import { useGetEmployeesQuery } from '../../../api/store/slices/organization.api'

const EmployeesTable: React.FC<IEmployeesTable> = ({ dataEmployees, setDataEmployees }) => {
  const [searchText, setSearchText] = useState('')
  const [searchedColumn, setSearchedColumn] = useState('')
  const [adding, setAdding] = useState(false)
  const searchInput = useRef<InputRef>(null)
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 3,
    },
  })
  const { isLoading, isFetching, isError, error, data: employeesWithQuery } = useGetEmployeesQuery()

  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell<DataTypeTableEmployees>,
    },
  }
  const handleSave = (row: DataTypeTableEmployees, dataIndex: DataEmployeesIndex) => {
    const newData = [...dataEmployees]
    const index = newData.findIndex((item) => row.id === item.id)
    const item = newData[index]
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    setDataEmployees(newData)
    // if (adding && dataIndex === 'designation') 
    //   setAdding(false);
  }

  const handleSearch = (
    selectedKeys: string[],
    confirm: (param?: FilterConfirmProps) => void,
    dataIndex: DataEmployeesIndex,
  ) => {
    confirm()
    setSearchText(selectedKeys[0])
    setSearchedColumn(dataIndex)
  }

  const handleReset = (clearFilters: () => void) => {
    clearFilters()
    setSearchText('')
  }

  const getColumnSearchProps = (dataIndex: DataEmployeesIndex): ColumnType<DataTypeTableEmployees> => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }: FilterDropdownProps) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText((selectedKeys as string[])[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />
    ),
    onFilter: (value: string | number | boolean, record: DataTypeTableEmployees) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    onFilterDropdownOpenChange: (visible: boolean) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text: string) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  })

  const defaultColumns: DefaultColumnsType[] = [
    {
      title: 'ID',
      dataIndex: 'id',
      align: 'center',
      width: '50px',
    },
    {
      title: 'Employee',
      dataIndex: 'employee',
      align: 'center',
      width: '200px',
      render: ({ url, employeeName }: EmployeeField) => <div className='flex justify-center items-center m-auto'><Avatar size={50} src={url} /><h3 className='ml-2'>{employeeName}</h3></div>,
    },
    {
      title: 'Designation',
      dataIndex: 'designation',
      editable: true,
      ...getColumnSearchProps('designation') as DefaultColumnsType,
    },
    {
      title: 'Country',
      dataIndex: 'country',
      width: '100px',
      render: (country: string) => <div className='flex justify-center items-center'><HiOutlineLocationMarker /><span className='ml-1'>{country}</span></div>
    },
    {
      title: 'Hire Date',
      dataIndex: 'hireDate',
    },
    {
      title: 'Reports To',
      dataIndex: 'reportsTo',
    },
  ]

  // const onChange: TableProps<DataTypeEmployees>['onChange'] = (pagination, filters, sorter, extra) => {
  //   console.log('params', pagination, filters, sorter, extra);
  // };
  const handleTableChange = (pagination: TablePaginationConfig) => {
    setTableParams({ pagination })
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setDataEmployees([])
    }
  }

  const columns = defaultColumns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: DataTypeTableEmployees) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave,
        adding,
      }),
    };
  })

  useEffect(() => {
    if (employeesWithQuery) {
      console.log(employeesWithQuery)
      let newDataEmployees = employeesWithQuery ? employeesWithQuery.map(employee => ({
        key: employee.id,
        ...employee
      })) : []
      console.log(newDataEmployees)

      setDataEmployees(newDataEmployees)
      // setPaginationState((prevState) => ({ ...prevState, total: responseData.total }))
    }
  }, [employeesWithQuery])

  return (
    <Table bordered components={components} columns={columns as ColumnTypes} dataSource={dataEmployees} rowKey={"id"} pagination={tableParams.pagination} onChange={handleTableChange} />
  )
}

export default EmployeesTable