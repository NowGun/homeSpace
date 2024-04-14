import axios from "axios";

const fetcher = async (url: string) => {
    const res = await axios.get(url)
    return res?.data
}

const setYandexApiHeader = (token: string | null) => {
    axios.defaults.headers.common['X-Yandex-API-Key'] = token ? token : ''
}

export {
    fetcher,
    setYandexApiHeader
}