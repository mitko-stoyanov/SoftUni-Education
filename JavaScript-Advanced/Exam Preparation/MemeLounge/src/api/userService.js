import { clearUserData, setUserData } from '../util.js';
import * as api from './api.js'

//линкове за заявки
const endpoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout'
}

export async function login(email, password) {
    const result = await api.post(endpoints.login, {email, password});
    setUserData(result);

    return result;
}

export async function register(email, password, username, gender) {
    const result = await api.post(endpoints.register, {email, password});
    result.username = username;
    result.gender = gender;
    setUserData(result);

    return result;
}

export async function logout() {
    api.get(endpoints.logout);
    clearUserData();
}