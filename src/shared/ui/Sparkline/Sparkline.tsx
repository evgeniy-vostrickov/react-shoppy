import React from 'react'
import { Line } from '@ant-design/plots'
import getConfigSparkline from './config/configSparkline'

const Sparkline = <T extends Record<keyof T, unknown>,>({data}: {data: T[]}) => {
  const config = getConfigSparkline<T>(data)
  return (
    <Line {...config} />
  )
}

export default Sparkline