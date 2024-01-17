import React from 'react'
import { Column } from '@ant-design/plots';
// import type {LegendCfg} from '@ant-design/plots/lib/'
import { Types } from '@antv/g2';
import { PatternOption } from '@antv/g2plot/lib/utils/pattern/index';

const StackedColumnEarning = () => {
    const data = [
        { month: 'January', value: 1, type: 'Revenue' },
        { month: 'February', value: 4, type: 'Revenue' },
        { month: 'March', value: 6, type: 'Revenue' },
        { month: 'April', value: 3, type: 'Revenue' },
        { month: 'May', value: 8, type: 'Revenue' },
    ];

    const config = {
        data,
        color: ['#ffffff'],
        isStack: true,
        xField: 'month',
        yField: 'value',
        seriesField: 'type',
        label: false as any,
        legend: false as any,
        xAxis: false as any,
        yAxis: false as any,
        style: {
            height: '100%',
        }
    };

    return (
        <Column {...config} />
    )
}

export default StackedColumnEarning