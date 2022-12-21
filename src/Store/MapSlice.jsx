import {createSlice} from '@reduxjs/toolkit'
import CustomOrders from '../Components/CustomOrder/CustomOrderD'

const maper = ''
const MapSlice = createSlice({
    name: 'map',
    initialState: maper,
    reducers: {
        configurer (state, action) {
            state = action.payload
        }
    }
})

export const MapedAction = MapSlice.actions
export default MapSlice