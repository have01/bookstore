import { combineReducers, configureStore } from "@reduxjs/toolkit"
import storage from "redux-persist/lib/storage"
import { persistReducer, persistStore } from "redux-persist"
import cartSlice from "./cartSlice"
import authReducer from './authSlice';
const persistConfig = {
    key: "root",
    storage,
    // whitelist: ["profile"]
}
const rootReducer = combineReducers({
    cart: cartSlice.reducer,
    auth: authReducer
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production"
})
export const persistor = persistStore(store)
