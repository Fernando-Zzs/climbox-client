import { get, post } from "./http";

// 判断管理员是否登录成功
export const getLoginStatus = (params) => post(`user/login/status`, params);

export const SignUp = (params) => post(`/user/register`, params);