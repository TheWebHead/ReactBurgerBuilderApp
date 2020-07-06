import axios from 'axios';

const orderInstance = axios.create({
    baseURL: 'https://react-my-burger-builder-e5873.firebaseio.com/'

});

export default orderInstance;