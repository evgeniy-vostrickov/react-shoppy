import React from 'react'
import { ILabelMoney } from './types/ILabelMoney'
import { Typography } from 'antd'
import clsx from 'clsx'
import getFormatter from './config/getFormatter'

const { Title } = Typography;

const LabelMoney: React.FC<ILabelMoney> = ({ summa, currency, decimalPlaces, listClass, ComponentDopInfo }) => {
    const formatter = getFormatter(currency, decimalPlaces);
    return (
        <Title level={3} className={clsx('!mt-0', listClass)}>{formatter.format(summa)} {ComponentDopInfo}</Title>
    )
}

export default LabelMoney