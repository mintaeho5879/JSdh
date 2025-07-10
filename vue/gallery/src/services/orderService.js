import axios from './httpRequester';

const path = '/order';

export const addOrder = args => {
    return axios.post(path, args).catch(e => e.response);
}