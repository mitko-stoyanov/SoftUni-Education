import * as api from './api.js'

const endpoints = {
    allGames: '/data/games?sortBy=_createdOn%20desc&distinct=category',
    catalogGames: '/data/games?sortBy=_createdOn%20desc',
    create: '/data/games',
    byId: '/data/games/',
    deleteById: '/data/games/',
    update: '/data/games/'
}

export async function getAllGames() {
    return api.get(endpoints.allGames);
}

export async function getAllCatalogGames() {
    return api.get(endpoints.catalogGames);
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