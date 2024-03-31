import { Statistic } from '@antv/g2plot'

const getConfigRingGraph = <T>(data: T[]) => {
  const statistic: Statistic = {
    title: false,
    content: false
  }
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.5,
    legend: false as any,
    label: {
      type: 'inner',
      offset: '-50%',
      //   content: '{percentage}',
      content: (itemValue: any, item: any, index: any) => {
        const percentage = (itemValue.percent * 100).toFixed(); // округляем проценты до целых
        return `${percentage}%`;
      },
      style: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 700
      },
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
    statistic: statistic
  }
  return config
}

export default getConfigRingGraph