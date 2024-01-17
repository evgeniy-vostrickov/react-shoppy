import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { ITheme } from "../../../model/ITheme"

interface IAppState {
    theme: ITheme
}

const initialState: IAppState = {
    theme: 'light'
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setTheme(state, action: PayloadAction<ITheme>) {
            state.theme = action.payload
        }
    }
})

export const appReducer = appSlice.reducer
export const appActions = appSlice.actions