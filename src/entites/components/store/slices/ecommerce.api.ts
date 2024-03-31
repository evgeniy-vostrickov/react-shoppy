import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IResponse } from '../../../../app/api/store/models/IResponse'
import { IDataEarnings, IDataExpenses, IDataRevenue, IDataStatistics } from '../models/MEcommerceApi'

export const ecommerceApi = createApi({
  reducerPath: 'ecommerceApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_SERVER_API
  }),
  tagTypes: ['Statistics', 'Earnings', 'Expenses', 'Revenue'],
  endpoints: build => ({
    getStatistics: build.query<IDataStatistics, void>({
      query: () => `ecommerce/statistics`,
      transformResponse: (response: IResponse<IDataStatistics>, meta, arg) => response.data,
      providesTags: (result, error, arg) =>
      result
        ? [...result.map(({ id }) => ({ type: 'Statistics' as const, id })), { type: 'Statistics', id: 'LIST' }]
        : [{ type: 'Statistics', id: 'LIST' }],
    }),
    getEarnings: build.query<IDataEarnings, void>({
      query: () => `ecommerce/earnings`,
      transformResponse: (response: IResponse<IDataEarnings>, meta, arg) => response.data,
      providesTags: (result, error, arg) =>
      result
        ? [...result.map(({ id }) => ({ type: 'Earnings' as const, id })), { type: 'Earnings', id: 'LIST' }]
        : [{ type: 'Earnings', id: 'LIST' }],
    }),
    getExpenses: build.query<IDataExpenses, void>({
      query: () => `ecommerce/expenses`,
      transformResponse: (response: IResponse<IDataExpenses>, meta, arg) => response.data,
      providesTags: (result, error, arg) =>
      result
        ? [...result.map(({ id }) => ({ type: 'Expenses' as const, id })), { type: 'Expenses', id: 'LIST' }]
        : [{ type: 'Expenses', id: 'LIST' }],
    }),
    getRevenue: build.query<IDataRevenue, void>({
      query: () => `ecommerce/revenue`,
      transformResponse: (response: IResponse<IDataRevenue>, meta, arg) => response.data,
      providesTags: (result, error, arg) =>
      result
        ? [...result.map(({ id }) => ({ type: 'Revenue' as const, id })), { type: 'Revenue', id: 'LIST' }]
        : [{ type: 'Revenue', id: 'LIST' }],
    }),
  })
})

export const { useGetStatisticsQuery, useGetEarningsQuery, useGetExpensesQuery, useGetRevenueQuery } = ecommerceApi