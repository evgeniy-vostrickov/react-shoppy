import React from 'react'
import { Card } from 'antd';
import { ISCard } from '../../types/ISCard';

const SCard: React.FC<ISCard> = ({className, children}) => {
  return (
    <Card className={className ? className : ''}>
        {children}
    </Card>
  )
}

export default SCard