import { html } from '../../node_modules/lit-html/lit-html.js'
import * as materialService from '../api/materialService.js'

const profileTemplate = (materials) => html`
<section id="my-posts-page">
    <h1 class="title">My Posts</h1>

    <!-- Display a div with information about every post (if any)-->
    <div class="my-posts">
        ${materials.length > 0
            ? materials.map(materialCard)
            : html `<h1 class="title no-posts-title">You have no posts yet!</h1>`}
    </div>
</section>
`;

const materialCard = (material) => html`
<div class="post">
    <h2 class="post-title">${material.title}</h2>
    <img class="post-image" src="${material.imageUrl}" alt="Material Image">
    <div class="btn-wrapper">
        <a href="/details/${material._id}" class="details-btn btn">Details</a>
    </div>
</div>
`

export async function profilePage(ctx) {
    const materials = await materialService.getProfileMaterials(ctx.user._id);
    ctx.render(profileTemplate(materials));
}
