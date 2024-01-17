import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { appReducer } from "./slices/appSlice";
import { calendarReducer } from "../../../widgets/api/store/slices/calendarSlice";
import { organizationReducer } from "../../../shared/api/store/slices/organizationSlice";
import { organizationApi } from "../../../shared/api/store/slices/organization.api";

const rootReducer = combineReducers({
    app: appReducer,
    calendar: calendarReducer,
    organization: organizationReducer,
    [organizationApi.reducerPath]: organizationApi.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(organizationApi.middleware),
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']