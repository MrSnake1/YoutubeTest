import axios from "axios";

const KEY = 'AIzaSyBX9LOMP6K9syq4D_3Qj2MTdHKdeLa2eRg';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
            part: 'snippet',
            maxResults: 5,
            key: KEY,
            type: 'video'
    }
});