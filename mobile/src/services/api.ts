import axios from 'axios';

export const baseURL = 'http://172.27.0.122:3333';

export default axios.create({ baseURL });
