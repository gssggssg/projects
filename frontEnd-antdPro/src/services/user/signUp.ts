// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

// 用户注册
export async function signUp(body: any, options?: { [key: string]: any }) {
    return request('/api/user/add', {
        method: 'POST',
        // headers: {
        //     'Content-Type': 'application/json',
        // },
        data: body,
        ...(options || {}),
    });
}