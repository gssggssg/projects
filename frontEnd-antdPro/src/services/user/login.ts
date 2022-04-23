// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

// 登录注册
export async function login(body: any, options?: { [key: string]: any }) {
    return request('/api/user/login', {
        method: 'POST',
        // headers: {
        //     'Content-Type': 'application/json',
        // },
        data: body,
        ...(options || {}),
    });
}