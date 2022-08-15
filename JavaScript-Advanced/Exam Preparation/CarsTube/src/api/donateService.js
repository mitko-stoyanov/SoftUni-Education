import * as api from './api.js'

const endpoints = {
    donate: '/data/donations',
}

export async function donate(data) {
    return api.post(endpoints.donate, data);
}

export async function getAllDonates(postId) {
    return api.get(`/data/donations?where=postId%3D%22${postId}%22&distinct=_ownerId&count`);
}
