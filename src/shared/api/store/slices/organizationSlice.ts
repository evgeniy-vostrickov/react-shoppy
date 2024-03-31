import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { DataTypeOrder, IOrganizationState } from "../models/MOrganizationSlice"

const initialState: IOrganizationState = {
    orders: [],
    total: 0,
    pageSize: 5,
    dataForSparkline: [
        { year: '1991', value: 3 },
        { year: '1992', value: 4 },
        { year: '1993', value: 3.5 },
        { year: '1994', value: 5 },
        { year: '1995', value: 4.9 },
        { year: '1996', value: 6 },
        { year: '1997', value: 7 },
        { year: '1998', value: 9 },
        { year: '1999', value: 13 },
    ]
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
        },
        // getDataForSparkline(state, action: PayloadAction<number>) {
        //     state.total = action.payload
        // }
    }
})

export const organizationReducer = organizationSlice.reducer
export const organizationActions = organizationSlice.actions