import React from "react"
import config from "./conf"

export class Api {
    async ForcastApi (location , days){
        try {
          let response = await fetch (`https://api.weatherapi.com/v1/forecast.json?q=${location}&days=${days}&key=${config.apikey}` )
                return (
                    response
                )
        } catch (error) {
            console.log("failed to fetch forcast data please try again later : " , error)
        }
    }  
}
 
const ApiCall = new Api() 
export default ApiCall
