import axios from 'axios';
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';

class HttpService {

    async postFindAll() {
        const res = await axios.get('/posts');
        return res.data;
    }
    async postCommentFindAll(postId) {
        const res = await axios.get(`/posts/${postId}/comments`);
        return res.data;
    }
}

export default new HttpService();