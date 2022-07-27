import * as api from './api.js'

const endpoints = {
    allMaterials: '/data/posts?sortBy=_createdOn%20desc',
    create: '/data/posts',
    byId: '/data/posts/',
    deleteById: '/data/posts/',
    update: '/data/posts/'
}

export async function getAllMaterials() {
    return api.get(endpoints.allMaterials);
}

export async function getProfileMaterials(userId) {
    return api.get(`/data/posts?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
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