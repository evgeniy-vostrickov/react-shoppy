import React, { useEffect, useMemo, useState } from 'react'
import { Empty, Skeleton, Table } from 'antd'
import { DataTypeTableOrder, IOrdersTable } from '../types/MOrdersTable'
import { useGetOrdersQuery } from '../../../api/store/slices/organization.api'
import { columnsOrdersTable } from '../config/columnsOrdersTable'
import { IHandleTableChange, IPaginationTable } from '../types/MTable'
import { useSearchParamsState } from '../../../../app/helpers/use-searchParamsState'


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
    return new Array(numberArrayElements).fill(0).map((_, index) => ++index)
}

const OrdersTable: React.FC<IOrdersTable> = ({dataOrders, setDataOrders}) => {
    // const { setTheme, setTotalOrder } = useActions()
    // const { pageSize, total } = useAppSelector(state => state.organization)
    const [paginationState, setPaginationState] = useState<IPaginationTable>({ current: 1, pageSize: 5, total: 0 })
    const [loadingTable, setLoadingTable] = useState(true)
    // const [dataOrders, setDataOrders] = useState<DataTypeTableOrder[]>([])
    // const tableParams = useRef<TableParams>({
    //     current: paginationState.current,
    //     pageSize: paginationState.pageSize,
    //     total: paginationState.total,
    //     field: undefined,
    //     filters: undefined,
    //     order: undefined
    // })
    const [value, updateValue] = useSearchParamsState('current')
    // const [previous, setPrevious] = useState(true)
    // const listUrlSearchParams: Array<string> = ['field', 'order', 'group', 'current']

    let masPageSize = useMemo(() => arrayDefinitionFunction(paginationState.pageSize), [paginationState.pageSize])
    console.log(masPageSize)

    const { isLoading, isFetching, isError, error, data: responseData } = useGetOrdersQuery({
        pageSize: paginationState.pageSize,
        current: paginationState.current,
        field: paginationState.field,
        order: paginationState.order,
        filters: paginationState.filters
    })

    const handleTableChange: IHandleTableChange<DataTypeTableOrder> = (
        pagination,
        filters,
        sorter,
    ) => {
        setPaginationState((prevState) => ({...prevState, current: pagination.current!, filters, ...sorter}))
        updateValue(pagination.current?.toString()!, {})

        // console.log(pagination)
        // setTableParams({
        //     pagination,
        //     filters,
        //     ...sorter,
        // })

        // console.log(tableParams, {
        //     pagination,
        //     filters,
        //     ...sorter,
        // })

        if (pagination.pageSize !== paginationState.pageSize) {
            setDataOrders([])
        }

        setLoadingTable(true)
    }

    useEffect(() => {
        // setLoadingTable(prevState => !prevState)
        console.log(paginationState)
    }, [paginationState])

    // useEffect(() => {
    //     setPaginationState((prevState) => {
    //         // let searchParams = new URLSearchParams(window.location.search)
    //         // for (const [keySearch, valueSearch] of searchParams.entries()) {
    //         for (const [keySearch, valueSearch] of prevState.entries()) {
    //             switch (keySearch) {
    //                 case 'current':
    //                     prevState = { ...prevState, current: { ...prevState.pagination, current: +valueSearch } }
    //                     break;
    //                 case 'field':
    //                     prevState = { ...prevState, field: valueSearch }
    //                     break;
    //                 case 'order':
    //                     prevState = { ...prevState, order: JSON.parse(valueSearch) }
    //                     break;
    //                 case 'filters':
    //                     prevState = { ...prevState, filters: { ...prevState.filters, group: JSON.parse(valueSearch) } }
    //                     break;

    //                 default:
    //                     break;
    //             }
    //         }
    //         return prevState
    //     })
    // }, [])

    useEffect(() => {
        if (responseData) {
            let tempDataOrders = responseData.orders ? responseData.orders.map(order => ({
                key: order.id,
                ...order
            })) : []

            setDataOrders(tempDataOrders)
            setPaginationState((prevState) => ({...prevState, total: responseData.total}))
            // setTableParams((prevState) => ({ ...prevState, pagination: { ...prevState.pagination, total: responseData.total } }))
        }
        setLoadingTable(false)
    }, [responseData])

    // useEffect(() => {
    //     if (!previous) {
    //         let searchParams = new URLSearchParams("")
    //         for (const [key, param] of Object.entries(tableParams)) {
    //             if (typeof param === 'object') {
    //                 for (const innerkey in param) {
    //                     if (param[innerkey] && listUrlSearchParams.includes(innerkey))
    //                         searchParams.set(innerkey, JSON.stringify(param[innerkey]))
    //                 }
    //             }
    //             else {
    //                 if (param && listUrlSearchParams.includes(key))
    //                     searchParams.set(key, JSON.stringify(param))
    //             }
    //         }
    //         let url = new URL(window.location.href)
    //         url.search = searchParams.toString()
    //         window.history.pushState({ path: url.href, tableParams: JSON.stringify(tableParams) }, '', url.href)
    //     } else {
    //         setPrevious(false)
    //     }
    // }, [tableParams.pagination?.current, tableParams.field, tableParams.order, tableParams.filters])

    // window.onpopstate = (event) => {
    //     if (event.state.path)
    //         setTableParams(JSON.parse(event.state.tableParams))
    //     else
    //         setTableParams((prevState) => ({ pagination: { ...prevState.pagination, current: 1 } }))

    //     setPrevious(true)
    // }

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
            <Table columns={columnsOrdersTable} dataSource={dataOrders} loading={loadingTable} pagination={{current: paginationState.current, pageSize: paginationState.pageSize, total: paginationState.total}} scroll={{ x: 700 }} onChange={handleTableChange} />
        </div>
    )
}

export default OrdersTable

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