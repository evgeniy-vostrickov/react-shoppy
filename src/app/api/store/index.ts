import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { appReducer } from "./slices/appSlice"
import { calendarReducer } from "../../../shared/api/store/slices/calendarSlice"
import { organizationReducer } from "../../../shared/api/store/slices/organizationSlice"
import { organizationApi } from "../../../shared/api/store/slices/organization.api"
import { ecommerceApi } from "../../../entites/components/store/slices/ecommerce.api"
import { ecommerceReducer } from "../../../entites/components/store/slices/ecommerceSlice"

const rootReducer = combineReducers({
    app: appReducer,
    calendar: calendarReducer,
    organization: organizationReducer,
    ecommerce: ecommerceReducer,
    [organizationApi.reducerPath]: organizationApi.reducer,
    [ecommerceApi.reducerPath]: ecommerceApi.reducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(organizationApi.middleware, ecommerceApi.middleware),
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']