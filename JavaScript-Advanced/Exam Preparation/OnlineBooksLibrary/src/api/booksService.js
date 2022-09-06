import * as api from './api.js'

const endpoints = {
    allBooks: '/data/books?sortBy=_createdOn%20desc',
    create: '/data/books',
    byId: '/data/books/',
    deleteById: '/data/books/',
    update: '/data/books/',
}

export async function getAllBooks() {
    return api.get(endpoints.allBooks);
}

export async function getOwnerMaterials(userId) {
    return api.get(`/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
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