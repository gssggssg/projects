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
    path: '/',
    layout: false,
    component: './Home',
    routes: [
      {
        name: 'home',
        path: '/home',
        component: './Home',
      },
      {
        component: './404',
      },
    ],
  },
  {
    component: './404',
  },
];
