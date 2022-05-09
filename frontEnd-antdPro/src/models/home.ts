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
    namespace: 'home',
    state: {
        access_token: null,
        user_info: null,
    },
    effects: {
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