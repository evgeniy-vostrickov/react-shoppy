import { BsFillBoxSeamFill, BsPeopleFill } from 'react-icons/bs'
import { VscGraph } from 'react-icons/vsc'
import { RxUpdate } from 'react-icons/rx'
import { IDataStatistics } from '../../store/models/MEcommerceApi'

export const procesStatistics = (dataStatistics: IDataStatistics) => {
  return dataStatistics.map((item) => {
    switch (item.textInscription) {
      case 'Customers':
        return {
          ...item,
          colorIcon: '#35aabb',
          backgroundColorIcon: '#e3f7fb',
          ComponentIcon: <BsPeopleFill />,
          rise: item.riseValue > 0 ? true : false,
          riseValue: `${item.riseValue}%`
        }
      case 'Products':
        return {
          ...item,
          colorIcon: '#ffe48b',
          backgroundColorIcon: '#fcc40d',
          ComponentIcon: <BsFillBoxSeamFill />,
          rise: item.riseValue > 0 ? true : false,
          riseValue: `${item.riseValue}%`
        }
      case 'Sales':
        return {
          ...item,
          colorIcon: '#b49086',
          backgroundColorIcon: '#fcf4e6',
          ComponentIcon: <VscGraph />,
          rise: item.riseValue > 0 ? true : false,
          riseValue: `${item.riseValue}%`
        }
      case 'Refunds':
        return {
          ...item,
          colorIcon: '#66b3a5',
          backgroundColorIcon: '#ecf7f2',
          ComponentIcon: <RxUpdate />,
          rise: item.riseValue > 0 ? true : false,
          riseValue: `${item.riseValue}%`
        }
      default:
        return {
          ...item,
          colorIcon: '#66b3a5',
          backgroundColorIcon: '#ecf7f2',
          ComponentIcon: <RxUpdate />,
          rise: item.riseValue > 0 ? true : false,
          riseValue: `${item.riseValue}%`
        }
    }
  })
}