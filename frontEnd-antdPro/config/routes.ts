export default [
  {
    path: '/login',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/login',
        component: './login',
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
