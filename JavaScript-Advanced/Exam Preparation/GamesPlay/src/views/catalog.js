import { html } from '../../node_modules/lit-html/lit-html.js'
import * as gameService from '../api/gameService.js'

const catalogTemplate = (games) => html`
<section id="catalog-page">
    <h1>All Games</h1>
    <!-- Display div: with information about every game (if any) -->
    ${games.length > 0
        ? games.map(gameCard)
        : html `<h3 class="no-articles">No articles yet</h3>`}
</section>
`;

const gameCard = (game) => html`
<div class="allGames">
    <div class="allGames-info">
        <img src="${game.imageUrl}">
        <h6>${game.category}</h6>
        <h2>${game.title}</h2>
        <a href="/details/${game._id}" class="details-button">Details</a>
    </div>

</div>
`

export async function catalogPage(ctx) {
    const games = await gameService.getAllCatalogGames();
    ctx.render(catalogTemplate(games));
}
