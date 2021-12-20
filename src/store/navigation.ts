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
  type: string,
  payload: menu,
};

const initState: menu = {
  menu: [
    {
      title: "Home",
      path: "/",
    },
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
  switch (action.type) {
    case "navigation":
      return { ...state, ...action };
    default:
      return state;
  }
}

export default navigation;