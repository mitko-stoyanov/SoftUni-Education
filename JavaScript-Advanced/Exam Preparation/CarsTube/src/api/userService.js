import { clearUserData, setUserData } from '../utils.js';
import * as api from './api.js'

//линкове за заявки
const endpoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout'
}

export async function login(username, password) {
    const result = await api.post(endpoints.login, {username: username, password});
    setUserData(result);

    return result;
}

export async function register(username, password) {
    const result = await api.post(endpoints.register, {username, password});
    setUserData(result);

    return result;
}

export async function logout() {
    api.get(endpoints.logout);
    clearUserData();
}