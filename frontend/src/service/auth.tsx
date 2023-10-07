import { axiosWrapper } from "../common/axiosWrapper";

export const login = async (data: RequestBody.LoginBody) => {
    return await axiosWrapper.post<RequestBody.LoginBody, API.LoginResponse>('/login', data);
};

export const signup = async (data: RequestBody.SignUpBody) => {
    return await axiosWrapper.post('signup', data);
}