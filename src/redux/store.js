import { combineReducers, configureStore } from "@reduxjs/toolkit"
import storage from "redux-persist/lib/storage"
import { persistReducer, persistStore } from "redux-persist"
import cartSlice from "./cartSlice"

const persistConfig = {
    key: "root",
    storage,
    // whitelist: ["profile"]
}
const rootReducer = combineReducers({
    cart: cartSlice.reducer,
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production"
})
export const persistor = persistStore(store)
