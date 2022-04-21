import { stringify } from 'querystring';
import { history } from 'umi';
import { login } from '@/services/login';

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
    namespace: 'login',
    state: {
        access_token: null,
        user_info: null
    },
    effects: {
        *login({ payload }: any, { call, put }: any) {
            const data: ResponseGenerator = yield call(login, { user: { ...payload } });
            if (data.code === 1 && data.data) {
                yield put({
                    type: 'login/update',
                    payload: { access_token: data.data.token },
                })
            }
        },

    },
    reducers: {
        update(state: any, action: any) {
            console.log(state, action)
            return {
                ...state,
                ...action,
            }
        },
    }
};
export default Model;