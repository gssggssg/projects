import { history } from 'umi';
import userApi from '@/services/user';
import { message } from 'antd';


export interface ResponseGenerator {
    config?: any,
    data?: any,
    headers?: any,
    request?: any,
    status?: number,
    error?: any,
    statusText?: string,
    records?: any,
    pageNum?: any,
    total?: any,
    code?: number,
}

const Model = {
    namespace: 'user',
    state: {
        access_token: null,
        user_info: null,
    },
    effects: {
        // 登录
        *login({ payload }: any, { call, put }: any) {
            const data: ResponseGenerator = yield call(userApi.login.login, { user: { ...payload } });
            if (data.data.code === 1 && data.data.data) {
                yield put({
                    type: 'user/update',
                    payload: { access_token: data.data.token },
                });
                message.success('登录成功');
                history.push('/');
            }
            data.data.code !== 1 &&  message.success('登录失败');
        },
        // 注册
        *signUp({ payload }: any, { call, put }: any) {
            const data: ResponseGenerator = yield call(userApi.signUp.signUp, { user: { ...payload } });
            if (data.data.code === 1 && data.data.data) {
                yield put({
                    type: 'user/update',
                    payload: { access_token: data.data.token },
                });
                message.success('注册成功');
            }
            data.data.code !== 1 &&  message.success('注册失败');
        },
        // 获取用户
        *getUser({ payload }: any, { call, put }: any) {
            const data: ResponseGenerator = yield call(userApi.api.getUser, { user: { ...payload } });
            if (data.data.code === 1 && data.data.data) {
                yield put({
                    type: 'user/update',
                    payload: {
                        access_token: data.data.token
                    },
                });
                history.push('/');
            }
        },
    },
    reducers: {
        update(state: any, action: any) {
            return { ...state, ...action }
        },
    }
};
export default Model;