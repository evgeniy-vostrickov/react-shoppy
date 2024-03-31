import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IDataOrders, IPageDataRequest } from '../models/MOrganizationApi'
import { IResponse } from '../../../../app/api/store/models/IResponse'
import { DataTypeCustomer, DataTypeEmployee } from '../models/MOrganizationSlice'

export const organizationApi = createApi({
  reducerPath: 'organizationApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_SERVER_API
  }),
  tagTypes: ['Orders', 'Employees', 'Customers'],
  endpoints: build => ({
    getOrders: build.query<IDataOrders, IPageDataRequest>({
      query: ({current, pageSize, order, field, filters}) => `tables/orders?current=${current}&pageSize=${pageSize}&order=${order}&field=${JSON.stringify(field)}&filters=${JSON.stringify(filters)}`,
      transformResponse: (response: IResponse<IDataOrders>, meta, arg) => response.data,
      providesTags: (result, error, arg) =>
      result?.orders
        ? [...result?.orders.map(({ id }) => ({ type: 'Orders' as const, id })), { type: 'Orders', id: 'LIST' }]
        : [{ type: 'Orders', id: 'LIST' }],
    }),
    getEmployees: build.query<DataTypeEmployee[], void>({
      query: () => `tables/employees`,
      transformResponse: (response: IResponse<DataTypeEmployee[]>, meta, arg) => response.data,
      providesTags: (result, error, arg) =>
      result
        ? [...result.map(({ id }) => ({ type: 'Employees' as const, id })), { type: 'Employees', id: 'LIST' }]
        : [{ type: 'Employees', id: 'LIST' }],
    }),
    getCustomers: build.query<DataTypeCustomer[], void>({
      query: () => `tables/customers`,
      transformResponse: (response: IResponse<DataTypeCustomer[]>, meta, arg) => response.data,
      providesTags: (result, error, arg) =>
      result
        ? [...result.map(({ id }) => ({ type: 'Customers' as const, id })), { type: 'Customers', id: 'LIST' }]
        : [{ type: 'Customers', id: 'LIST' }],
    }),
  })
})

export const { useGetOrdersQuery, useGetCustomersQuery, useGetEmployeesQuery } = organizationApi