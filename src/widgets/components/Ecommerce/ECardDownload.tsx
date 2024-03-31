import React from 'react'
import ECardMoney from '../../../entites/components/Ecommerce/EcommerceCard/ECardMoney'
import ECardButtonDownload from '../../../features/components/Ecommerce/ECardButtonDownload'
import { AiOutlineDollarCircle } from 'react-icons/ai';

const ECardDownload: React.FC = () => {
  return (
    <ECardMoney textHeader='Earnings' summaMoney={45525.55} decimalPlaces={2} ComponentIcon={<AiOutlineDollarCircle size={40} />} backgroundColorIcon='#2874B2' colorIcon='#ffffff' Button={<ECardButtonDownload />} listClass="w-full xl:w-[200px] 2xl:w-[250px] min-h-[140px]" />
  )
}

export default ECardDownload