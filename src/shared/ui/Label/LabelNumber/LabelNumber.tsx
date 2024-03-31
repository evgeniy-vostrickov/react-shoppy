import React from 'react'
import { ILabelNumber } from './types/ILabelNumber'
import { Typography } from 'antd'
import clsx from 'clsx'
import { countDecimalNumbers } from '../../../helpers/getDecimalNumbers'

const { Title } = Typography;

const LabelNumber: React.FC<ILabelNumber> = ({number, styleFormatter, className, ComponentDopInfo}) => {
    const decimalPlaces = countDecimalNumbers(number)
    const formatter = new Intl.NumberFormat('en-US', {
        style: styleFormatter,
        maximumFractionDigits: decimalPlaces
    })
    
    return (
        <Title level={3} className={clsx('', className)}>{formatter.format(styleFormatter === 'percent' ? number / 100 : number)} {ComponentDopInfo}</Title>
    )
}

export default LabelNumber