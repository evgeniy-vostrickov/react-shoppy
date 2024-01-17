import React, { useContext, useEffect, useRef, useState } from 'react'
import type { ColumnType, ColumnsType, TableProps, TablePaginationConfig } from 'antd/es/table';
import Table from 'antd/es/table';
import { Avatar, Button, Form, Input, Space } from 'antd';
import type { FormInstance, InputRef } from 'antd';
import type { FilterConfirmProps, FilterDropdownProps } from 'antd/es/table/interface';
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from "react-highlight-words";
import { DataEmployeesIndex, DataTypeEmployees, EmployeeField } from '../models/MEmployeesTable';
import { EditableCellProps, EditableContext, EditableRowProps, TableParams } from '../models/MTable';
import { dataAboutEmployees } from '../api/data';
import EditableRow from '../Common/EditableRow';
import EditableCell from '../Common/EditableCell';
import ButtonAddNewRowEmployees from '../../../features/components/Tables/ButtonAddNewRowEmployees';

// const EditableCell: React.FC<EditableCellProps<DataEmployeesIndex, DataTypeEmployees>> = ({
//   title,
//   editable,
//   children,
//   dataIndex,
//   record,
//   handleSave,
//   adding,
//   ...restProps
// }) => {
//   const [editing, setEditing] = useState(false);
//   const inputRef = useRef<InputRef>(null);
//   const form = useContext(EditableContext)!;

//   useEffect(() => {
//     if (editing) {
//       inputRef.current!.focus();
//     }
//   }, [editing]);

//   const toggleEdit = () => {
//     setEditing(!editing);
//     form.setFieldsValue({ [dataIndex]: record[dataIndex] });
//   };

//   const save = async () => {
//     try {
//       const values = await form.validateFields();

//       toggleEdit();
//       handleSave({ ...record, ...values }, dataIndex);
//     } catch (errInfo) {
//       console.log('Save failed:', errInfo);
//     }
//   };

//   // const saveAdding = async () => {
//   //   try {
//   //     const values = await form.validateFields();
//   //     handleSave({ ...record, ...values }, dataIndex);
//   //   } catch (errInfo) {
//   //     console.log('Save failed:', errInfo);
//   //   }
//   // };

//   let childNode = children;

//   if (editable) {
//     childNode = editing ? (
//       <Form.Item
//         style={{ margin: 0 }}
//         name={dataIndex}
//         rules={[
//           {
//             required: true,
//             message: `${title} is required.`,
//           },
//         ]}
//       >
//         <Input ref={inputRef} onPressEnter={save} onBlur={save} />
//       </Form.Item>
//     ) : (
//       <div className="editable-cell-value-wrap" style={{ paddingRight: 24 }} onDoubleClick={toggleEdit}>
//         {children}
//       </div>
//     );
//   }
//   // console.log(childNode)

//   // if (adding) {
//   //   childNode = (
//   //     <Form.Item
//   //       style={{ margin: 0 }}
//   //       name={dataIndex}
//   //       rules={[
//   //         {
//   //           required: true,
//   //           message: `${title} is required.`,
//   //         },
//   //       ]}
//   //     >
//   //       <Input ref={inputRef} onPressEnter={saveAdding} onBlur={saveAdding} />
//   //     </Form.Item>
//   //   )
//   // }

//   return <td {...restProps}>{childNode}</td>;
// };









const EmployeesTable = () => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const [dataSource, setDataSource] = useState<DataTypeEmployees[]>(dataAboutEmployees);
  const [adding, setAdding] = useState(false);
  const searchInput = useRef<InputRef>(null);
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 3,
    },
  });

  const handleSave = (row: DataTypeEmployees, dataIndex: DataEmployeesIndex) => {
    const newData = [...dataSource];
    const index = newData.findIndex((item) => row.id === item.id);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    setDataSource(newData);
    // if (adding && dataIndex === 'designation') 
    //   setAdding(false);
  };

  const handleSearch = (
    selectedKeys: string[],
    confirm: (param?: FilterConfirmProps) => void,
    dataIndex: DataEmployeesIndex,
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex: DataEmployeesIndex): ColumnType<DataTypeEmployees> => ({
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
    onFilter: (value: string | number | boolean, record: DataTypeEmployees) =>
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
  });

  type EditableTableProps = Parameters<typeof Table>[0];
  type ColumnTypes = Exclude<EditableTableProps['columns'], undefined>;

  type DefaultColumnsType = ColumnTypes[number] & { editable?: boolean; dataIndex?: string };
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
    setTableParams({pagination});
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setDataSource([]);
    }
  };

  const columns = defaultColumns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: DataTypeEmployees) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave,
        adding,
      }),
    };
  });

  // const columns: ColumnsType<DataTypeEmployees> = [
  //   {
  //     title: 'Employee',
  //     dataIndex: 'employee',
  //     align: 'center',
  //     width: '200px',
  //     render: ({ url, employeeName }: ({url: string, employeeName: string})) => <div className='flex justify-center items-center m-auto'><Avatar size={50} src={url} /><h3 className='ml-2'>{employeeName}</h3></div>,
  //   },
  //   {
  //     title: 'Designation',
  //     dataIndex: 'designation',
  //     ...getColumnSearchProps('designation')
  //   },
  //   {
  //     title: 'Country',
  //     dataIndex: 'country',
  //     width: '100px',
  //     render: (country: string) => <div className='flex justify-center items-center'><HiOutlineLocationMarker /><span className='ml-1'>{country}</span></div>
  //   },
  //   {
  //     title: 'Hire Date',
  //     dataIndex: 'hireDate',
  //   },
  //   {
  //     title: 'Reports To',
  //     dataIndex: 'reportsTo',
  //   },
  // ]

  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell<DataTypeEmployees>,
    },
  };

  const newData: DataTypeEmployees = {
    id: 5,
    employee: { url: 'https://www.megabeyin.com/wp-content/uploads/2016/02/Steve-Jobs-1.jpg', employeeName: 'Tomy Shelby' },
    designation: 'Text',
    country: 'USA',
    hireDate: new Date("2017-09-05").toLocaleDateString(),
    reportsTo: 'Carson',
  };

  // 1 идея - rowKey
  // 2 идея - сделать обновление прям здесь

  return (
    <div>
      <ButtonAddNewRowEmployees dataSource={dataSource} setDataSource={setDataSource} />
      <Table bordered components={components} columns={columns as ColumnTypes} dataSource={dataSource} rowKey={"id"} pagination={tableParams.pagination} onChange={handleTableChange} />
    </div>
  )
}

export default EmployeesTable
