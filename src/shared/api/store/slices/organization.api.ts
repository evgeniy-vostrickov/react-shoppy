import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { DataTypeOrder, IDataOrders, IPageDataRequest, IResponse } from '../models/MOrganizationState'

export const organizationApi = createApi({
  reducerPath: 'organizationApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_SERVER_API
  }),
  tagTypes: ['Order'],
  endpoints: build => ({
    getOrders: build.query<IDataOrders, IPageDataRequest>({
      query: ({current, pageSize, order, field, filters}) => `tables/orders?current=${current}&pageSize=${pageSize}&order=${order}&field=${JSON.stringify(field)}&filters=${JSON.stringify(filters)}`,
      transformResponse: (response: IResponse<IDataOrders>, meta, arg) => response.data,
      providesTags: (result, error, arg) =>
      result?.orders
        ? [...result?.orders.map(({ id }) => ({ type: 'Order' as const, id })), { type: 'Order', id: 'LIST' }]
        : [{ type: 'Order', id: 'LIST' }],
    }),
  })
})

export const { useGetOrdersQuery } = organizationApi