import React from 'react'
import { Pie } from '@ant-design/plots'
import getConfigRingGraph from './config/configRingGraph'

interface IYearlySales {
  type: string
  value: number
  alias?: string
}

const data: IYearlySales[] = [
  {
    type: 'type1',
    value: 25
  },
  {
    type: 'type2',
    value: 25,
  },
  {
    type: 'type3',
    value: 35,
  },
  {
    type: 'type4',
    value: 15,
  },
]

const RingGraph = () => {
  const config = getConfigRingGraph<IYearlySales>(data)
  
  return <Pie {...config} />
};

export default RingGraph