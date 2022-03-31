import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import rootReducer from '../reducers/rootReducer';

const persistConfig = {
  key: 'main-rootReducer',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));

const Persistor = persistStore(store);

export { Persistor };
export default store;