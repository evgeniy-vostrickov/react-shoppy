import React from 'react'
import { ILabelMoney } from '../../types/ILabelMoney';
import { Typography } from 'antd';
import clsx from 'clsx';

const { Title } = Typography;

const LabelMoney: React.FC<ILabelMoney> = ({summa, currency, decimalPlaces, className, ComponentDopInfo}) => {
    // Create our number formatter.
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
        maximumFractionDigits: decimalPlaces
    });
    
    return (
        <Title level={3} className={clsx('!mt-0', className)}>{formatter.format(summa)} {ComponentDopInfo}</Title>
    )
}

export default LabelMoney