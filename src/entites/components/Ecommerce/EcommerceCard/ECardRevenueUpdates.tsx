import React, { useEffect, useState } from 'react'
import SCard from '../../../../shared/ui/Card/Card'
import { Badge } from 'antd'
import LabelMoney from '../../../../shared/ui/Label/LabelMoney/LabelMoney'
import Sparkline from '../../../../shared/ui/Sparkline/Sparkline'
import StackedColumnExpense from '../../../../shared/ui/StackedColumn/StackedColumnExpense'
import { useGetExpensesQuery, useGetRevenueQuery } from '../../store/slices/ecommerce.api'
import { IEExpenses } from '../types/IEExpenses'
import { IERevenue } from '../types/IERevenue'

const ECardRevenueUpdates = () => {
  const { data: expensesWithQuery } = useGetExpensesQuery()
  const [expenses, setExpenses] = useState<IEExpenses[]>([])
  const { data: revenueWithQuery } = useGetRevenueQuery()
  const [revenue, setRevenue] = useState<IERevenue[]>([])

  useEffect(() => {
    if (expensesWithQuery) {
      setExpenses(expensesWithQuery)
    }
  }, [expensesWithQuery])

  useEffect(() => {
    if (revenueWithQuery) {
      setRevenue(revenueWithQuery)
    }
  }, [revenueWithQuery])

  return (
    <SCard listClass='mt-5'>
      <div className="lg:flex lg:justify-between">
        <div className='min-w-[50%] max-lg:pb-2.5 max-lg:border-b-2 lg:pr-2.5 lg:border-r-2'>
          <h3>Revenue Updates</h3>
          <LabelMoney currency='USD' summa={93438} decimalPlaces={0} ComponentDopInfo={<Badge count={"23%"} showZero color='#03a320' />} />
          <span>Budget</span>
          <LabelMoney currency='USD' summa={48487} decimalPlaces={0} />
          <span>Expense</span>
          <Sparkline<IERevenue> data={revenue} />
        </div>
        <div className='min-w-[50%] max-lg:pt-2.5 lg:pl-2.5'>
          <StackedColumnExpense<IEExpenses> data={expenses} />
        </div>
      </div>
    </SCard>
  )
}

export default ECardRevenueUpdates