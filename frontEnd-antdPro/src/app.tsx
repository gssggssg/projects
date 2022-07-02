// import { SettingDrawer } from '@ant-design/pro-layout';
import { PageLoading } from '@ant-design/pro-layout';
import type { RunTimeLayoutConfig } from 'umi';
import { history } from 'umi';
import Footer from '@/components/Footer';
import { getUser as queryCurrentUser } from './services/user/api';
// import { BookOutlined, LinkOutlined } from '@ant-design/icons';
// import defaultSettings from '../config/defaultSettings';

// const isDev = process.env.NODE_ENV === 'development';
const loginPath = '/login';

/** 获取用户信息比较慢的时候会展示一个 loading */
export const initialStateConfig = {
    loading: <PageLoading />,
};

/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
export async function getInitialState(): Promise<{
    currentUser?: API.CurrentUser;
    loading?: boolean;
    fetchUserInfo?: () => Promise<API.CurrentUser | undefined>;
}> {
    const fetchUserInfo = async () => {
        try {
            const msg = await queryCurrentUser();
            return msg.data;
        } catch (error) {
            history.push(loginPath);
        }
        return undefined;
    };

    // 如果不是登录页面，执行
    if (history.location.pathname !== loginPath) {
        const currentUser = await fetchUserInfo();
        return {
            fetchUserInfo,
            currentUser,
        };
    }
    const currentUser = await fetchUserInfo();
    return {
        currentUser,
        fetchUserInfo,
    };
}

// // ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout: RunTimeLayoutConfig = ({ initialState, setInitialState }) => {
    return {
        // rightContentRender: () => <RightContent />,
        disableContentMargin: false,
        waterMarkProps: {
            content: '四冥',
        },
        footerRender: () => <Footer />,
        onPageChange: () => {
            const { location } = history;
            // 如果没有登录，重定向到 login
            if (!initialState?.currentUser &&
                location.pathname !== loginPath &&
                location.pathname === '/signUp') {
                history.push(loginPath);
            }
        },
        menuHeaderRender: undefined,
        // 自定义 403 页面
        // unAccessible: <div>unAccessible</div>,
        // 增加一个 loading 的状态
        childrenRender: (children, props) => {
            // if (initialState?.loading) return <PageLoading />;
            return (
                <>
                    {children}
                    {/* {!props.location?.pathname?.includes('/login') && (
                        <SettingDrawer
                            disableUrlParams
                            enableDarkTheme
                            onSettingChange={(settings) => {
                                setInitialState((preInitialState: any) => ({
                                    ...preInitialState,
                                    settings,
                                }));
                            }}
                        />
                    )} */}
                </>
            );
        },
    };
};
