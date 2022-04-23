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
    component: './404',
  },
];
