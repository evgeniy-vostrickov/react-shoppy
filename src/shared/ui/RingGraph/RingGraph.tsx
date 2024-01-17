// import React from 'react'
// import { Pie } from '@ant-design/plots';

// const RingGraph = () => {
//   return (
//     <Pie />
//   )
// }

// export default RingGraph

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Pie } from '@ant-design/plots';
import { Types } from '@antv/g2';
import { Statistic } from '@antv/g2plot';

const statistic: Statistic = {
  title: false,
  content: false
}

const RingGraph = () => {
  const data = [
    {
      type: 'type1',
      value: 25,
      alias: "25%"
    },
    {
      type: 'type2',
      value: 25,
    },
    {
      type: 'type3',
      value: 35,
    },
    {
      type: 'type4',
      value: 15,
    },
  ];
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
  };
  return <Pie {...config} />;
};

export default RingGraph