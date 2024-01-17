import { calendarActions } from '../../widgets/api/store/slices/calendarSlice';
import { useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { organizationActions } from '../../shared/api/store/slices/organizationSlice'
import { appActions } from '../api/store/slices/appSlice'

const actions = {
  ...organizationActions,
  ...calendarActions,
  ...appActions,
}

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(actions, dispatch)
}