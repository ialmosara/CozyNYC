import { axiosWrapper } from "../common/axiosWrapper";

export const login = async (data: API.LoginBody) => {
    return await axiosWrapper.post('/login', data);
};

export const signup = async (data: API.SignUpBody) => {
    return await axiosWrapper.post('signup', data);
}