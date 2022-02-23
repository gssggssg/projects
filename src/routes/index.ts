// 导入路由组件
import Home from '../pages/Home';
import Todo from '../pages/Todo';
import Snake from '../pages/Snake';
import Gobang from '../pages/Gobang';
import FSProjectList from '../pages/FSProjectList';

// 导入路由管理工具
import { RouteConfig } from 'react-router-config';

const routes: RouteConfig = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/home',
    exact: true,
    component: Home,
  },
  {
    path: '/todo',
    exact: true,
    component: Todo,
  },
  {
    path: '/snake',
    exact: true,
    component: Snake,
  },
  {
    path: '/gobang',
    exact: true,
    component: Gobang,
  },
  {
    path: '/FSProjectList',
    exact: true,
    component: FSProjectList,
  },
];

export default routes;