// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

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