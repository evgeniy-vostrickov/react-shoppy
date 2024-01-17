import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { DataTypeOrder, IOrganizationState } from "../models/MOrganizationState"

const initialState: IOrganizationState = {
    orders: [],
    total: 0,
    pageSize: 5,
}

const organizationSlice = createSlice({
    name: 'organization',
    initialState,
    reducers: {
        setOrders(state, action: PayloadAction<Array<DataTypeOrder>>) {
            state.orders = action.payload
        },
        setTotalOrder(state, action: PayloadAction<number>) {
            state.total = action.payload
        }
    }
})

export const organizationReducer = organizationSlice.reducer
export const organizationActions = organizationSlice.actions