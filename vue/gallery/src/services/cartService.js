import axios from './httpRequester';


export const addItem = itemId => {
    return axios.post('/cart', {itemId}).catch(e => e.response);
} 

export const getItems = () => {
    return axios.get('/cart').catch(e => e.response);
}

export const removeItem = (params) => {
    return axios.delete('/cart',{params}).catch(e => e.response);
} 