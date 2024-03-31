import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IActionStatistics, IAppStateEcommerce } from "../models/MEcommerceSlice"

const initialState: IAppStateEcommerce = {
  statistics: []
}

const ecommerceSlice = createSlice({
  name: 'ecommerce',
  initialState,
  reducers: {
    setStatistics(state, action: PayloadAction<IActionStatistics>) {
      state.statistics = action.payload.statistics
    }
  }
})

export const ecommerceReducer = ecommerceSlice.reducer
export const ecommerceActions = ecommerceSlice.actions