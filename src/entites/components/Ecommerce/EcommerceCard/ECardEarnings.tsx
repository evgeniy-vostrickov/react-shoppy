import React from 'react'
import SCard from '../../../../shared/ui/Card/Card'
import LabelMoney from '../../../../shared/ui/LabelMoney/LabelMoney'
import StackedColumnEarning from '../../../../shared/ui/StackedColumnEarning/StackedColumnEarning'
import { Typography } from 'antd';

const { Title } = Typography;

const ECardEarnings = () => {
  return (
    <SCard className='w-1/3 mt-5 bg-green-600 font-medium text-xl'>
      <div className='flex justify-between mb-5'>
        <Title level={3}>Earnings</Title>
        <div className=''>
          <Title className='!text-base !font-semibold' level={4}>Montly revenue</Title>
          <LabelMoney currency='USD' summa={63448.78} decimalPlaces={2} className='text-white text-xl font-medium'></LabelMoney>
        </div>
      </div>
      <div>
        <StackedColumnEarning />
      </div>
    </SCard>
  )
}

export default ECardEarnings