import React, { useEffect, useState, useCallback, useMemo } from 'react'
import { Badge, Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import { DataTypeCustomers, CustomersStatusType, CustomerField } from '../models/MCustomersTable';
import { TableRowSelection } from 'antd/es/table/interface';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useSearchParamsState } from '../../../app/helpers/use-searchParamsState';
import OrderStatus from '../const/OrderStatus';
import ButtonDeleteRowCustomer from '../../../features/components/Tables/ButtonDeleteRowCustomer';
import { dataAboutCustomers } from '../api/data';
import { TableParams } from '../models/MTable';

const columns: ColumnsType<DataTypeCustomers> = [
    {
        title: 'ID',
        dataIndex: 'customerId',
        width: 50
    },
    {
        title: 'Name',
        dataIndex: 'customer',
        align: 'center',
        render: ({ image, name, email }: CustomerField) => <div className='w-28 h-28 m-auto flex justify-center items-center'><img className='w-full h-full object-contain' src={image} /><div><div>{name}</div><div>{email}</div></div></div>,
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
];

const CustomersTable: React.FC = () => {
    const [dataSource, setDataSource] = useState<DataTypeCustomers[]>(dataAboutCustomers);
    const [listRecordsSelected, setListRecordsSelected] = useState<DataTypeCustomers[]>([]);
    const [tableParams, setTableParams] = useState<TableParams>({
        pagination: {
            current: 1,
            pageSize: 3,
        },
    });

    const [value, updateValue] = useSearchParamsState('b')
    useEffect(() => {
        // updateValue('23', {})
        // updateValue((prev: string) => (String(+prev + 1)), {})
    }, [])

    const rowSelection: TableRowSelection<DataTypeCustomers> = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        onSelect: (record, selected, selectedRows) => {
            setListRecordsSelected(selectedRows)
            console.log(record, selected, selectedRows, listRecordsSelected);
        },
        onSelectAll: (selected, selectedRows, changeRows) => {
            console.log(selected, selectedRows, changeRows);
        },
    }

    const handleTableChange: TableProps<DataTypeCustomers>['onChange'] = (pagination, filters, sorter, extra) => {
        setTableParams({ pagination });
        if (pagination.pageSize !== tableParams.pagination?.pageSize) {
            setDataSource([]);
        }
    };

    return (
        <div>
            <ButtonDeleteRowCustomer dataSource={dataSource} listRecordsSelected={listRecordsSelected} setDataSource={setDataSource} />
            <Table columns={columns} dataSource={dataSource} scroll={{ x: 700 }} rowSelection={{ ...rowSelection }} pagination={tableParams.pagination} onChange={handleTableChange} />
        </div>
    )
}

export default CustomersTable