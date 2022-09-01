import { html, nothing } from '../../node_modules/lit-html/lit-html.js'
import * as eventService from '../api/eventService.js'
import * as likeService from '../api/likeService.js'

const detailsTemplate = (event, checkHtml, allLikes) => html`
<section id="detailsPage">
    <div id="detailsBox">
        <div class="detailsInfo">
            <h1>Title: ${event.title}</h1>
            <div>
                <img src="${event.imageUrl}" />
            </div>
        </div>

        <div class="details">
            <h3>Theater Description</h3>
            <p>${event.description}</p>
            <h4>Date: ${event.date}</h4>
            <h4>Author: ${event.author}</h4>
            ${checkHtml}
            <p class="likes">Likes: ${allLikes}</p>
        </div>
    </div>
</section>
`;

export async function detailsPage(ctx) {
    const eventId = ctx.params.id;
    const event = await eventService.getById(eventId);
    if (ctx.user) {
        // закачаме го за да го използваме в темплейта
        event.isOwner = ctx.user._id == event._ownerId;
    }

    let hasLiked = await likeService.getLikesCountFromUser(eventId, ctx.user._id)
    async function onLike(event) {
        event.target.remove();
        await likeService.addNewLike({
            theaterId: eventId
        })

        document.getElementsByClassName('likes')[0].textContent ='Likes: ' + await likeService.getLikesCount(eventId)
    }
    let allLikes = await likeService.getLikesCount(eventId)


    ctx.render(detailsTemplate(event, checkHtml(), allLikes));

    function checkHtml() {
        if (ctx.user) {
            if (ctx.user._id == event._ownerId) {
                return html`<a @click=${onDelete} class="btn-delete" href="javascript:void(0)">Delete</a>
<a class="btn-edit" href="/edit/${event._id}">Edit</a>`
            } else {
                if(hasLiked){
                    return undefined
                } else{
                    return html`<a @click=${onLike} class="btn-like" href="javascript:void(0)">Like</a>`
                }
            }
        }
    }


    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this material?');
        if (choice) {
            await eventService.deleteById(eventId);
            ctx.page.redirect('/');
        }
    }
}