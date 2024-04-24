import axios from "axios";

const fetcher = async (url: string) => {
    const res = await axios.get(url)
    return res?.data
}

const setWeatherApiHeader = (token: string | null) => {
    axios.defaults.headers.common['key'] = token ? token : ''
}

export {
    fetcher,
    setWeatherApiHeader
}