// 导入路由组件
import Snake from '../pages/Snake'
import Gobang from '../pages/Gobang'
// 导入路由管理工具
import { RouteConfig } from 'react-router-config'

const routes: RouteConfig = [
  {
    path: '/snake',
    exact: true,
    component: Snake,
  },
  {
    path: '/gobang',
    exact: true,
    component: Gobang,
  }
]

export default routes;