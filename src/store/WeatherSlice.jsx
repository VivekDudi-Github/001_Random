import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    status : false  , 
    weatherData : null , 
}

const weatherSlice = createSlice({
    name : "weather" , 
    initialState , 
    reducers : {
        ForcastData : (state , action) => {
        state.status = true ;
        state.weatherData = action.payload
        }
    }
})

export const {ForcastData} = weatherSlice.actions ; 

export default weatherSlice.reducer  ;