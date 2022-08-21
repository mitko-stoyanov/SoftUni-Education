import { html, nothing } from '../../node_modules/lit-html/lit-html.js'
import * as albumService from '../api/albumService.js'

const detailsTemplate = (album, onDelete) => html`
<section id="detailsPage">
    <div class="wrapper">
        <div class="albumCover">
            <img src="${album.imgUrl}">
        </div>
        <div class="albumInfo">
            <div class="albumText">

                <h1>Name: ${album.name}</h1>
                <h3>Artist: ${album.artist}</h3>
                <h4>Genre: ${album.genre}</h4>
                <h4>Price: $${album.price}</h4>
                <h4>Date: ${album.releaseDate}</h4>
                <p>Description: ${album.description}</p>
            </div>

            <!-- Only for registered user and creator of the album-->
            ${album.isOwner
                ? html `<div class="actionBtn">
                            <a href="/edit/${album._id}" class="edit">Edit</a>
                            <a @click=${onDelete} href="javascript:void(0)" class="remove">Delete</a>
                        </div>`
                : nothing}
                        
        </div>
    </div>
</section>
`;

export async function detailsPage(ctx) {
    const albumId = ctx.params.id;
    const album = await albumService.getById(albumId);
    if (ctx.user) {
        // закачаме го за да го използваме в темплейта
        album.isOwner = ctx.user._id == album._ownerId;
    }
    ctx.render(detailsTemplate(album, onDelete));

    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this material?');
        if (choice) {
            await albumService.deleteById(albumId);
            ctx.page.redirect('/');
        }
    }
}