
const FETCH_HOTEL ="FETCH_HOTEL"
const FETCH_FLIGHT ="FETCH_FLIGHT"
const FETCH_CARS ="FETCH_CARS"
// const FETCH_HOTEL ="FETCH_HOTEL"
// ======================= cette fonction configure le token ================ //

export const getConfig = () => {

    const token = JSON.parse(localStorage.getItem('Token'))

    var config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    if (token) {
        config.headers["Authorization"] = `Token ${token}`
    }
    return config
}
export const getHotel = JsonData => {
    return {
        type: FETCH_HOTEL,
        payload: JsonData
    }
}
export const getFlight = JsonData => {
    return {
        type: FETCH_FLIGHT,
        payload: JsonData
    }
}
export const getCars = JsonData => {
    return {
        type: FETCH_CARS,
        payload: JsonData
    }
}