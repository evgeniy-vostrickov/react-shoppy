export const getDecimalNumbers = (num: number): number => {
  const decimalNumbers = +toString().split('.')[1]
  return decimalNumbers
}

export const countDecimalNumbers = (num: number): number => getDecimalNumbers(num).toString().length