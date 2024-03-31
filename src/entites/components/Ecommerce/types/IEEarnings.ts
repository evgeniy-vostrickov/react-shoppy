export interface IEEarning {
  id: number
  month: 'January' | 'February' | 'March' | 'April' | 'May' | 'June' | 'July' | 'Augest' | 'September' | 'October' | 'November' | 'December', 
  value: number, 
  type: 'Revenue'
}