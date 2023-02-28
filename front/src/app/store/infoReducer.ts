import { createSlice } from '@reduxjs/toolkit'

// interface InfoStore {
// 	titleMessage: string
// 	descriptionMessage?: string
// 	isActive: true
// }

const infoStore = createSlice({
	initialState: () => ({}),
	name: 'info',
	reducers: {}
})

export default infoStore
