const getConfigSparkline = <T>(data: T[]) => {
  const config = {
    data,
    autoFit: true,
    xField: 'year',
    yField: 'value',
    point: {
      size: 5,
      shape: 'diamond',
    },
    label: {
      style: {
        fill: '#aaa',
      },
    },
  }
  return config
}

export default getConfigSparkline