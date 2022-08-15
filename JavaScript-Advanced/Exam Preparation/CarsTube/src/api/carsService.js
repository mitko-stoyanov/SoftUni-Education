import * as api from './api.js'

const endpoints = {
    allCars: '/data/cars?sortBy=_createdOn%20desc',
    create: '/data/cars',
    byId: '/data/cars/',
    deleteById: '/data/cars/',
    update: '/data/cars/'
}

export async function getAllCars() {
    return api.get(endpoints.allCars);
}

export async function getProfileCars(userId) {
    return api.get(`/data/cars?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

export async function create(data) {
    return api.post(endpoints.create, data);
}

export async function getById(id) {
    return api.get(endpoints.byId + id)
}

export async function deleteById(id) {
    return api.del(endpoints.deleteById + id);
}

export async function update(id, data) {
    return api.put(endpoints.update + id, data)
}