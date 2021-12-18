interface menu {
  menu: {
    [index: number]: {
      title: string;
      path: string;
    },
  }
  type: string;
};

interface action {
  payload: menu,
};

const initState: menu = {
  menu: [
    {
      title: "贪吃蛇",
      path: "snake",
    },
    {
      title: "五子棋",
      path: "gobang",
    },
  ],
  type: "navigation",
};

function navigation(state = initState, action: action): menu {
  return { ...state, ...action };
}

export default navigation;