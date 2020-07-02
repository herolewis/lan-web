import axios from 'axios';
const baseURL: string = 'https://www.mxnzp.com/api/';
const instance = axios.create({
    baseURL, // 公共地址
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 3000 // 超时
});
instance.interceptors.request.use(
    config => {
        config.url = `${config.url}?app_id=ykholzngnvdqlrvn&app_secret=RVBocWEzUFJkYm1yMlFobHVnNnFtdz09`;
        // 请求头携带token
        // config.headers['AuthToken'] = 'your.token';
        return config;
    },
    error => {
        return Promise.reject(error)
    }
);
instance.interceptors.response.use(
    // @ts-ignore
    response => {
        const res = response.data;
        return Promise.resolve(res);
    },
    error => {
        return Promise.reject(error)
    }
);
export default instance;