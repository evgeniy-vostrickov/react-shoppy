import React from 'react'
import SCard from '../../../../shared/ui/Card/Card'
import LabelMoney from '../../../../shared/ui/LabelMoney/LabelMoney'
import IECardMoney from '../../../model/IECardMoney'
import { Avatar } from 'antd'
import { Typography } from 'antd';

const { Title } = Typography;

const ECardMoney: React.FC<IECardMoney> = ({ textHeader, summaMoney, decimalPlaces, ComponentIcon, backgroundColorIcon, colorIcon, className, Button }) => {
  return (
    <SCard className={className}>
      <Title level={4}>{textHeader}</Title>
      <LabelMoney currency='USD' summa={summaMoney} decimalPlaces={decimalPlaces} className='text-black text-xl font-medium'></LabelMoney>
      <Avatar className={`flex justify-center items-center absolute top-8 right-5 bg-indigo-600 text-white`} size={40} icon={ComponentIcon}></Avatar>
      {Button}
    </SCard>
  )
}

export default ECardMoney