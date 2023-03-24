import axios from 'axios';

axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export const api = axios.create({
    baseURL: "https://ppads-2023s1-escola-octogono.up.railway.app/"
})