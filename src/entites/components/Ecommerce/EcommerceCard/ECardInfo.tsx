import React from 'react'
import SCard from '../../../../shared/ui/Card/Card'
import LabelNumber from '../../../../shared/ui/LabelNumber/LabelNumber'
import IECardInfo from '../../../model/IECardInfo'
import { Avatar } from 'antd'
import { Typography } from 'antd';

const { Title } = Typography;

const ECardInfo: React.FC<IECardInfo> = ({numberValue, decimalPlaces, textInscription, ComponentIcon, colorIcon, backgroundColorIcon, rise, riseValue}) => {
    return (
        <SCard className="w-[200px] min-h-[140px] 2xl:w-[250px] max-[570px]:w-full">
            <Avatar className={`flex justify-center items-center bg-blue-300 text-blue-600`} size={50} style={{ backgroundColor: backgroundColorIcon, color: colorIcon }} icon={ComponentIcon}></Avatar>
            <LabelNumber className='text-base font-bold mt-4' number={numberValue} decimalPlaces={decimalPlaces} styleFormatter='decimal' ComponentDopInfo={<span style={rise ? {color: "#1fad93"} : {color: "#ff0000"}}>{riseValue}</span>}></LabelNumber>
            <Title className='!text-lg !font-medium !mt-0' level={5}>{textInscription}</Title>
        </SCard>
    )
}

export default ECardInfo