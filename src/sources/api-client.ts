import axios from "axios"


export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key:'3bb3595af387491cb6f26d54adbc9cdf'
    }
})