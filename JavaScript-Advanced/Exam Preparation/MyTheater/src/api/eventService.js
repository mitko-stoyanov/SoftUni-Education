import * as api from './api.js'

const endpoints = {
    allEvents: '/data/theaters?sortBy=_createdOn%20desc&distinct=title',
    create: '/data/theaters',
    byId: '/data/theaters/',
    deleteById: '/data/theaters/',
    update: '/data/theaters/'
}

export async function getAllEvents() {
    return api.get(endpoints.allEvents);
}

export async function getProfileEvents(userId) {
    return api.get(`/data/theaters?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
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