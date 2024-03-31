import React from 'react'
import { Column } from '@ant-design/plots'
import getConfigStackedColumnEarning from './config/configStackedColumnEarning'

const StackedColumnEarning = <T,>({data}: {data: T[]}) => {
    const config = getConfigStackedColumnEarning<T>(data)
    return (
        <Column {...config} />
    )
}

export default StackedColumnEarning