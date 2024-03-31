import { Types } from '@antv/g2';

const getConfigStackedColumnExpense = <T>(data: T[]) => {
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
  }

  return config
}

export default getConfigStackedColumnExpense