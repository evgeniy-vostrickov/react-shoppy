import React, { useEffect, useState } from 'react'
import SCard from '../../../../shared/ui/Card/Card'
import LabelMoney from '../../../../shared/ui/Label/LabelMoney/LabelMoney'
import StackedColumnEarning from '../../../../shared/ui/StackedColumnEarning/StackedColumnEarning'
import { Typography } from 'antd'
import { useGetEarningsQuery } from '../../store/slices/ecommerce.api'
import { IEEarning } from '../types/IEEarnings'

const { Title } = Typography

const ECardEarnings = () => {
  const { isLoading, isFetching, isError, error, data: earningsWithQuery } = useGetEarningsQuery()
  const [earnings, setEarnings] = useState<IEEarning[]>([])

  useEffect(() => {
    if (earningsWithQuery) {
      setEarnings(earningsWithQuery)
    }
  }, [earningsWithQuery])

  return (
    <SCard listClass='w-1/3 mt-5 bg-green-600 font-medium text-xl'>
      <div className='flex justify-between mb-5'>
        <Title level={3}>Earnings</Title>
        <div className=''>
          <Title className='!text-base !font-semibold' level={4}>Montly revenue</Title>
          <LabelMoney currency='USD' summa={63448.78} decimalPlaces={2} listClass='text-white text-xl font-medium'></LabelMoney>
        </div>
      </div>
      <div>
        <StackedColumnEarning<IEEarning> data={earnings} />
      </div>
    </SCard>
  )
}

export default ECardEarnings