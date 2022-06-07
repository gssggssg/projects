export default [
  {
    path: '/login',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/login',
        component: './user/login',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/signUp',
    layout: false,
    routes: [
      {
        name: 'signUp',
        path: '/signUp',
        component: './user/SignUp',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/home',
    name: '首页',
    icon: 'table',
    component: './Home',
  },
  {
    name: '五子棋',
    icon: 'table',
    path: '/gobang',
    component: './Gobang',
  },
  {
    path: '/',
    component: './Home',
  },
  {
    component: './404',
  },
];
