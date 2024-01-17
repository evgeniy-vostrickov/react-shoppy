import React from 'react'
import LabelMoney from '../../../../shared/ui/LabelMoney/LabelMoney'
import SCard from '../../../../shared/ui/Card/Card'
import RingGraph from '../../../../shared/ui/RingGraph/RingGraph'
import { Typography } from 'antd';

const { Title } = Typography;

const ECardYearlySales = () => {
    return (
        <SCard className='mt-5 w-1/3'>
            <div className='flex justify-center items-center'>
                <div className='w-1/3'>
                    <LabelMoney currency='USD' summa={43246} decimalPlaces={0} className='text-black text-xl font-medium'></LabelMoney>
                    <Title className='!font-black' level={3}>YearlySales</Title>
                </div>
                <div className='w-2/3'>
                <RingGraph />
                </div>
            </div>
        </SCard>
    )
}

export default ECardYearlySales