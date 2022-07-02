import { Settings as LayoutSettings } from '@ant-design/pro-layout';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  primaryColor: '#1890ff',  // 拂晓蓝
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: '四冥',
  pwa: false,
  logo: 'http://gssg.top/static/media/logo.jpg',
  iconfontUrl: '',
};

export default Settings;
