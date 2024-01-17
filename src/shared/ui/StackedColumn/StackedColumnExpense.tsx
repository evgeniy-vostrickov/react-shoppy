import React from 'react'
import { Column } from '@ant-design/plots';
// import type {LegendCfg} from '@ant-design/plots/lib/'
import { Types } from '@antv/g2';
import { PatternOption } from '@antv/g2plot/lib/utils/pattern/index';

const StackedColumnExpense: React.FC = () => {

    const data = [
        { month: 'Jan', value: 3, type: 'Budget' },
        { month: 'Feb', value: 4, type: 'Budget' },
        { month: 'Mar', value: 3.5, type: 'Budget' },
        { month: 'Apr', value: 5, type: 'Budget' },
        { month: 'May', value: 4.9, type: 'Budget' },
        { month: 'Jun', value: 6, type: 'Budget' },
        { month: 'July', value: 7, type: 'Budget' },
        { month: 'Jan', value: 3, type: 'Expense' },
        { month: 'Feb', value: 4, type: 'Expense' },
        { month: 'Mar', value: 3.5, type: 'Expense' },
        { month: 'Apr', value: 5, type: 'Expense' },
        { month: 'May', value: 4.9, type: 'Expense' },
        { month: 'Jun', value: 6, type: 'Expense' },
        { month: 'July', value: 7, type: 'Expense' },
    ];

    let legend: Types.LegendCfg = {
        layout: 'horizontal',
        position: 'top-right'
    }

    const config = {
        data,
        color: ['#d62728', '#2ca02c'],
        isStack: true,
        xField: 'month',
        yField: 'value',
        seriesField: 'type',
        label: {},
        legend: legend,
        style: {
            height: '100%',
        }
    };

    return (
        <Column {...config} />
    )
}

export default StackedColumnExpense