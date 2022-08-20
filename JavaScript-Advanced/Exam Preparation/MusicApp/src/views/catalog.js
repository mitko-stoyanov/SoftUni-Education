import { html, nothing } from '../../node_modules/lit-html/lit-html.js'
import * as albumService from '../api/albumService.js'

const catalogTemplate = (albums, user) => html`
<section id="catalogPage">
    <h1>All Albums</h1>

    ${albums.length > 0
        ? albums.map(a => albumTemplate(a, user))
        : html `<p>No Albums in Catalog!</p>`}

</section>
`;

const albumTemplate = (album, user) => html`
<div class="card-box">
    <img src="${album.imgUrl}">
    <div>
        <div class="text-center">
            <p class="name">Name: ${album.name}</p>
            <p class="artist">Artist: ${album.artist}</p>
            <p class="genre">Genre: ${album.genre}</p>
            <p class="price">Price: $${album.price}</p>
            <p class="date">Release Date: ${album.releaseDate}</p>
        </div>
        ${user
            ? html `<div class="btn-group">
                        <a href="/details/${album._id}" id="details">Details</a>
                    </div>`
            : nothing}
        
    </div>
</div>
`

export async function catalogPage(ctx) {
    const albums = await albumService.getAllAlbums();
    ctx.render(catalogTemplate(albums, ctx.user));
}