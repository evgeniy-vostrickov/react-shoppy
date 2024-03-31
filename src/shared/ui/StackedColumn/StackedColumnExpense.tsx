import React from 'react'
import { Column } from '@ant-design/plots'
import getConfigStackedColumnExpense from './config/configStackedColumnExpense'

const StackedColumnExpense = <T extends Record<keyof T, unknown>,>({data}: {data: T[]}) => {
    const config = getConfigStackedColumnExpense<T>(data)
    return (
        <Column {...config} />
    )
}

export default StackedColumnExpense