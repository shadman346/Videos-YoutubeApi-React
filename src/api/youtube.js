import axios from 'axios'

const KEY = 'AIzaSyBtJuLIp-C8JvYxxc1F8o-Y5rL9ozhmbaE';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 25,
        key: KEY
    }
});