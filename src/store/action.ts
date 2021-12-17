export const SET_AGE = "set_age";
export const SET_NAME = "set_name";

export const setAge = function(n: number) {
  return {
    type: SET_AGE,
    n: n,
  };
};
export const setName = function(name: string) {
  return {
    type: SET_NAME,
    name: name,
  };
};
