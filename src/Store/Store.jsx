import {configureStore} from '@reduxjs/toolkit'
import MapSlice from './MapSlice'

const store = configureStore({
    reducer: {
        mapedItem: MapSlice.reducer
    }
})

export default store