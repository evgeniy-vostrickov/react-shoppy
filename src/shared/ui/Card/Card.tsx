import React from 'react'
import { Card } from 'antd'
import { ISCard } from './types/ISCard'

const SCard: React.FC<ISCard> = ({ listClass, children }) => {
  return (
    <Card className={listClass}>
      {children}
    </Card>
  )
}

export default SCard