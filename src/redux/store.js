import { createStore } from "redux"
import persistStore from "redux-persist/es/persistStore"
import reducers from './reducers/index'
import persistReducer from "redux-persist/es/persistReducer"
import storage from "redux-persist/lib/storage"

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = createStore(
    persistedReducer,
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export const persistor = persistStore(store)

export default store