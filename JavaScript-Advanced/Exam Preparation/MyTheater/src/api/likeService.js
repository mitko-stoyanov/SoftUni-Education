import { get, post } from "./api.js";

export async function showDetails(ctx) {
    let userData = getUserData();
    let book = await getBookById(ctx.params.id);
    let likes = await getLikesCount(ctx.params.id);
    let likesFromCurrentUser = userData ? await getLikesCountFromUser(ctx.params.id, userData.userId) : undefined;
 
    ctx.render(detailsTemplate(book, userData, likesCount, UserLikesCount));
}
 
export async function getLikesCount(theaterId) {
    return await get(`/data/likes?where=theaterId%3D%22${theaterId}%22&distinct=_ownerId&count`)
}
 
export async function getLikesCountFromUser(theaterId, userId) {
    return await get(`/data/likes?where=theaterId%3D%22${theaterId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
}
 
export async function addNewLike(data) {
    return await post(`/data/likes`, data)
}
 
export async function addLike(ctx) {
 
    try {
        let userData = getUserData();
 
        await addNewLike({bookId: ctx.params.id, ownerId: userData.userId });
        page.redirect('/details/' + ctx.params.id);
    } catch (error) {
        alert(error.message);
    }
}