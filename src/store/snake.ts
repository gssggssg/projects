interface menu {
  type: string;
};

interface action {
  type: string,
  payload: menu,
};

const initState: menu = {
  type: "snake",
};

function snake(state = initState, action: action): menu {
  switch (action.type) {
    case "snake":
      return { ...state, ...action };
    default:
      return { ...state };
  }
}

export default snake;