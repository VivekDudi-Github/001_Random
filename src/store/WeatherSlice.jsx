import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    status : false  , 
    weatherData : null , 
    fetching_api: false ,
}

const weatherSlice = createSlice({
    name : "weather" , 
    initialState , 
    reducers : {
        ForcastData : (state , action) => {
        state.fetching_api = false ;
        state.status = true ;
        state.weatherData = action.payload
        } , 
        Fetching_api_Load :(state) => {
            state.fetching_api = true ;
        }
    }
})

export const {ForcastData , Fetching_api_Load} = weatherSlice.actions ; 

export default weatherSlice.reducer  ;