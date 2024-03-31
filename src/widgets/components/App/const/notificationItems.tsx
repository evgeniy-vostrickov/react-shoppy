import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BiMessageAltDetail } from 'react-icons/bi'
import { IoMdNotifications } from 'react-icons/io'
import { INotificationItem } from '../types/IMainHeader'

const notificationItems: INotificationItem[] = [
  {
      id: 1,
      ComponentIcon: <AiOutlineShoppingCart size={36} />, 
      notificationValue: 1,
      hrefUrl: "#",
  },
  {
      id: 2,
      ComponentIcon: <BiMessageAltDetail size={36} />,
      notificationValue: 2,
      hrefUrl: "#",
  },
  {
      id: 3,
      ComponentIcon: <IoMdNotifications size={36} />,
      notificationValue: 3,
      hrefUrl: "#",
  },
]

export default notificationItems