import { ColumnConfig } from "@ant-design/plots"

const getConfigStackedColumnEarning = <T>(data: T[]) => {
  const config = {
    data,
    color: ['#ffffff'],
    isStack: true,
    xField: 'month',
    yField: 'value',
    seriesField: 'type',
    label: false,
    legend: false,
    xAxis: false,
    yAxis: false,
    style: {
        height: '100%',
    }
  } as ColumnConfig
  return config
}

export default getConfigStackedColumnEarning