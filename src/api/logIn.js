import { post } from "../utlis/requert";

export const logInApi = (param) => {
  // return request("post", "/api/register", param);
  return post("/api/register", param);
};