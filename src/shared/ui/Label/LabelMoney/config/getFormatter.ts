const getFormatter = (currency: string, maximumFractionDigits: number, style = 'currency') => {
  const formatter = new Intl.NumberFormat('en-US', { style, currency, maximumFractionDigits })
  return formatter
}

export default getFormatter