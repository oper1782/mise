const axios = require('axios')

export const FETCH_MISE = "FETCH_MISE"
export const FETCH_STATION = "FETCH_STATION"
export const RESET_STATION = "RESET_STATION"



const ROOTURL = "http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty?serviceKey=eipWlA7RAYt6mQndIbhLmZbot8dMZ6UiU9%2F54RjaRoHrqpxrHeX8FiMQeDpxRUA3DFjxbubVPlC1ZvjZFGFCdQ%3D%3D&numOfRows=1&pageNo=1&stationName=${gangnam}&dataTerm=DAILY&ver=1.3"
export function fetchMise(tmx,tmy,address) {
    const encodeAddress = encodeURI(address)
    const url = 'https://misesm.herokuapp.com/users'+`?tmx=${tmx}&tmy=${tmy}&address=${address}`
    const request = axios.get(url)
    
    console.log("address",address)

    return{
        type: FETCH_MISE,
        // payload:request,
        payload: {
            promise: request,
            data: address
          },
          meta : address
    }
}

export function fetchStation(city) {
    let encodeCity = encodeURI(city)
    const url = 'https://misesm.herokuapp.com/getStations'+`?city=${encodeCity}`
    const request = axios.get(url)

    return{
        type: FETCH_STATION,
        payload:request
    }
}
export function resetStation(){
    return{
        type : RESET_STATION,
    }
}