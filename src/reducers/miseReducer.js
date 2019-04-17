import {FETCH_MISE, FETCH_STATION, RESET_STATION} from '../actions'
const XMLParser = require('react-xml-parser');
export default function (state ={loading:false,error:'',data:[],stations : [],address:''},action){
    // console.log("miseObj",action)
    switch (action.type){
        
        case `${FETCH_MISE}_PENDING`:
        return{
            loading:true,
            error:"bbb",
            data:[...state.data],
            stations : state.stations
        }
        case `${FETCH_MISE}_FULFILLED`:
        // var xml = new XMLParser().parseFromString(action.payload.data.body);
        const miseObj = action.payload.data
        console.log("miseObj",action.payload)
        var obj = {
            pm10:miseObj.item[0].pm10Value,
            pm25 :miseObj.item[0].pm25Value,
            dataTime : miseObj.item[0].dataTime,
            address: miseObj.address,
        }
        return {
            loading: false,
            error: 'ccc',
            data: [obj, ...state.data],
            stations : state.stations
        };
        case `${FETCH_MISE}_REJECTED`:
        return {
            loading: false,
            error: action.payload,
            data: [...state.data],
            stations : state.stations
        };

        case `${FETCH_STATION}_PENDING`:
        return{
            loading:true,
            error:"bbb",
            data:[...state.data],
            stations : [...state.stations]
        }
        case `${FETCH_STATION}_FULFILLED`:
        // var xml = new XMLParser().parseFromString(action.payload.data.body);
        console.log("action.payload.data.",action.payload)
        let stationObjs = action.payload.data.item
        let stationArray = []
        console.log("stationObjs",stationObjs)
        if(!stationObjs){
            stationObjs = []
        }else{
            stationArray = stationArray.concat(stationObjs)
        }

        return {
            loading: false,
            error: 'ccc',
            data: [...state.data],
            stations : [...stationArray]
        };
        case `${FETCH_STATION}_REJECTED`:
        return {
            loading: false,
            error: action.payload,
            data: [...state.data],
            stations : [...state.stations]
        };
        case  `${RESET_STATION}`:
        return{
            loading: false,
            error: action.payload,
            data: [...state.data],
            stations : []
        }

        default :
        return state
    }
}