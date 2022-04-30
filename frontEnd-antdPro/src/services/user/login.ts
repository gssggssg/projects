// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

// 登录注册
export async function login(body: any, options?: { [key: string]: any }) {
    return request('/api/user/login', {
        method: 'POST',
        data: body,
        ...(options || {}),
    });
}