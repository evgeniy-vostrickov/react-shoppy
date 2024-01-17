import React from 'react'
import SCard from '../../../../shared/ui/Card/Card'
import { Badge } from 'antd'
import LabelMoney from '../../../../shared/ui/LabelMoney/LabelMoney'
import Sparkline from '../../../../shared/ui/Sparkline/Sparkline'
import StackedColumnExpense from '../../../../shared/ui/StackedColumn/StackedColumnExpense'

const ECardRevenueUpdates = () => {
  return (
    <SCard className='mt-5'>
      <div className="lg:flex lg:justify-between">
        <div className='min-w-[50%] max-lg:pb-2.5 max-lg:border-b-2 lg:pr-2.5 lg:border-r-2'>
          <h3>Revenue Updates</h3>
          <LabelMoney currency='USD' summa={93438} decimalPlaces={0} ComponentDopInfo={<Badge count={"23%"} showZero color='#03a320' />} />
          <span>Budget</span>
          <LabelMoney currency='USD' summa={48487} decimalPlaces={0} />
          <span>Expense</span>
          <Sparkline />
        </div>
        <div className='min-w-[50%] max-lg:pt-2.5 lg:pl-2.5'>
          <StackedColumnExpense />
        </div>
      </div>
    </SCard>
  )
}

export default ECardRevenueUpdates