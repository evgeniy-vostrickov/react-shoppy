import React, { memo, useCallback, useEffect, useMemo, useState } from 'react'
import { Badge, Empty, Skeleton, Table } from 'antd';
import type { ColumnsType, TablePaginationConfig, TableProps } from 'antd/es/table';
import { DataTypeTableOrder, OrderStatusColor, OrderStatusType, TableParams } from '../../types/IOrderTable';
import { useGetOrdersQuery } from '../../api/store/slices/organization.api';
import { useActions } from '../../../app/helpers/actions';
import { FilterValue, SorterResult } from 'antd/es/table/interface';
import { useAppSelector } from '../../../app/helpers/redux';
import { useHref, useLocation, useNavigate, useNavigation, useSearchParams } from "react-router-dom";

const OrderStatus: OrderStatusColor = {
    Active: '#67e8f9',
    Canceled: '#f43f5e',
    Complete: '#22c55e',
    Pending: '#f97316',
    Rejected: '#dc2626',
}

const columns: ColumnsType<DataTypeTableOrder> = [
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

// const data: DataTypeTableOrder[] = [
//     {
//         key: '1',
//         order_id: '133113',
//         image: 'https://shop.r10s.jp/speedway-shop/cabinet/johnlofgren/lk-016-kaki_1.jpg',
//         group: 'Shoes',
//         name: 'Jie Yan',
//         amount: 87.99,
//         status: 'Active',
//         location: 'USA',
//     },
//     {
//         key: '2',
//         order_id: '64332',
//         image: 'https://static.tildacdn.com/tild3963-3530-4339-b031-623432633839/obuvx1170.png',
//         group: 'Shoes',
//         name: 'Aie Yan',
//         amount: 89.11,
//         status: 'Canceled',
//         location: 'RU',
//     },
//     {
//         key: '3',
//         order_id: '424',
//         image: 'https://shop.r10s.jp/speedway-shop/cabinet/johnlofgren/lk-016-kaki_1.jpg',
//         group: 'Shoes',
//         name: 'Bie Yan',
//         amount: 91.05,
//         status: 'Complete',
//         location: 'UK',
//     },
//     {
//         key: '4',
//         order_id: '63222',
//         image: 'https://static.tildacdn.com/tild3963-3530-4339-b031-623432633839/obuvx1170.png',
//         group: 'Clothes',
//         name: 'Zie Yan',
//         amount: 84.59,
//         status: 'Pending',
//         location: 'China',
//     },
// ];

const arrayDefinitionFunction = (numberArrayElements: number) => {
    let arrayElements: Array<number> = []
    for (let index = 1; index <= numberArrayElements; index++) {
        if (index !== numberArrayElements)
            arrayElements.push(index)
    }
    return arrayElements
}

const OrderTable: React.FC = memo(() => {
    const { setTheme, setTotalOrder } = useActions()
    const { pageSize, total } = useAppSelector(state => state.organization)
    const [loadingTable, setLoadingTable] = useState(true)
    const [dataOrders, setDataOrders] = useState<DataTypeTableOrder[]>([])
    const [tableParams, setTableParams] = useState<TableParams>({
        pagination: {
            current: 1,
            pageSize,
            total
        },
        field: undefined,
        filters: undefined,
        order: undefined
    });
    const [previous, setPrevious] = useState(true)
    const listUrlSearchParams: Array<string> = ['field', 'order', 'group', 'current']

    let masPageSize = useMemo(() => arrayDefinitionFunction(pageSize), [pageSize])

    const { isLoading, isFetching, isError, error, data: responseData } = useGetOrdersQuery({
        pageSize: tableParams.pagination?.pageSize!,
        current: tableParams.pagination?.current!,
        field: tableParams.field,
        order: tableParams.order,
        filters: tableParams.filters
    })

    const handleTableChange: TableProps<DataTypeTableOrder>['onChange'] = (
        pagination: TablePaginationConfig,
        filters: Record<string, FilterValue | null>,
        sorter: SorterResult<DataTypeTableOrder> | SorterResult<DataTypeTableOrder>[],
    ) => {
        setTableParams({
            pagination,
            filters,
            ...sorter,
        });

        console.log(tableParams, {
            pagination,
            filters,
            ...sorter,
        })

        // `dataSource` is useless since `pageSize` changed
        if (pagination.pageSize !== tableParams.pagination?.pageSize) {
            setDataOrders([])
        }

        setLoadingTable(true)
    };

    useEffect(() => {
        // setLoadingTable(prevState => !prevState)
        console.log(tableParams)
    }, [tableParams])

    useEffect(() => {
        setTableParams((prevState) => {
            let searchParams = new URLSearchParams(window.location.search)
            for (const [keySearch, valueSearch] of searchParams.entries()) {
                switch (keySearch) {
                    case 'current':
                        prevState = { ...prevState, pagination: { ...prevState.pagination, current: +valueSearch } }
                        break;
                    case 'field':
                        prevState = { ...prevState, field: valueSearch }
                        break;
                    case 'order':
                        prevState = { ...prevState, order: JSON.parse(valueSearch) }
                        break;
                    case 'group':
                        prevState = { ...prevState, filters: { ...prevState.filters, group: JSON.parse(valueSearch) } }
                        break;

                    default:
                        break;
                }
            }
            return prevState
        })
    }, [])

    useEffect(() => {
        if (responseData) {
            let tempDataOrders = responseData.orders ? responseData.orders.map(order => ({
                key: order.id,
                ...order
            })) : []

            setDataOrders(tempDataOrders)
            setTotalOrder(responseData.total)
            setTableParams((prevState) => ({ ...prevState, pagination: { ...prevState.pagination, total: responseData.total } }))
        }
        setLoadingTable(false)
    }, [responseData])

    useEffect(() => {
        if (!previous) {
            let searchParams = new URLSearchParams("")
            for (const [key, param] of Object.entries(tableParams)) {
                if (typeof param === 'object') {
                    for (const innerkey in param) {
                        if (param[innerkey] && listUrlSearchParams.includes(innerkey))
                            searchParams.set(innerkey, JSON.stringify(param[innerkey]))
                    }
                }
                else {
                    if (param && listUrlSearchParams.includes(key))
                        searchParams.set(key, JSON.stringify(param))
                }
            }
            let url = new URL(window.location.href)
            url.search = searchParams.toString()
            window.history.pushState({ path: url.href, tableParams: JSON.stringify(tableParams) }, '', url.href)
        } else {
            setPrevious(false)
        }
    }, [tableParams.pagination?.current, tableParams.field, tableParams.order, tableParams.filters])

    window.onpopstate = (event) => {
        if (event.state.path)
            setTableParams(JSON.parse(event.state.tableParams))
        else
            setTableParams((prevState) => ({ pagination: { ...prevState.pagination, current: 1 } }))

        setPrevious(true)
    }

    if (isLoading) return (
        <div>
            {masPageSize!.map(value => <Skeleton key={value} avatar paragraph={{ rows: 3 }} />)}
        </div>
    )

    // if (isFetching) 
    //     setLoadingTable(true)
    // else
    //     setLoadingTable(false)

    if (isError) return <div>{JSON.stringify(error)}</div>
    if (!dataOrders) return <Empty />

    return (
        <div>
            <Table columns={columns} dataSource={dataOrders} loading={loadingTable} pagination={tableParams.pagination} scroll={{ x: 700 }} onChange={handleTableChange} />
        </div>
    )
})

export default OrderTable

// for (const [keyTableParam, param] of Object.entries(tableParams)) {
//     if (typeof param === 'object') {
//         let isFindTableParam = false
//         for (const innerkey in param) {
//             if (listUrlSearchParams.includes(innerkey)) {
//                 tempTableParams[keyTableParam as keyof TableParams] = JSON.parse(JSON.stringify(param))
//                 isFindTableParam = true
//                 break;
//             }
//         }
//         if (isFindTableParam)
//             break;
//     }
//     else {
//         if (listUrlSearchParams.includes(keySearch)) {
//             tempTableParams[keySearch as keyof TableParams] = JSON.parse(valueSearch)
//             break;
//         }
//     }
// }