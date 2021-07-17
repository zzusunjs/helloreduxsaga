// 所有和 user 相关的 request 都在此处
import axios from 'axios';

export function requestGetUser(){
    return axios.request({
        method: 'get',
        url: 'https://my-json-server.typicode.com/zzusunjs/demo/user'
    });
}