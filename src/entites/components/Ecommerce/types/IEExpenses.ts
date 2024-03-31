export interface IEExpenses {
  id: number
  month: 'Jan' | 'Feb' | 'Mar' | 'Apr' | 'May' | 'Jun' | 'Jul' | 'Aug' | 'Sep' | 'Oct' | 'Nov' | 'Dec'
  value: number
  type: 'Budget' | 'Expense'
}