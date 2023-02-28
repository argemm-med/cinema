import { combineReducers, configureStore } from '@reduxjs/toolkit'

// import infoReducer from 'app/store/infoReducer'

const rootReducer = combineReducers({
	// info: infoReducer
})

export const store = () => {
	return configureStore({
		reducer: rootReducer
	})
}

export type RootReducer = ReturnType<typeof rootReducer>
export type Store = ReturnType<typeof store>
export type StoreDispatch = Store['dispatch']
