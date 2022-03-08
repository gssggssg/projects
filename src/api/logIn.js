import { post } from "../utlis/requert";

export const logInApi = (param) => {
  // console.log(first)
  // return request("post", "/api/register", param);
  return post("/api/register", param);
};