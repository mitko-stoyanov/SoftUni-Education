import { html, nothing } from '../../node_modules/lit-html/lit-html.js'
import * as petService from '../api/petService.js'

const detailsTemplate = (pet, checkHtml) => html`
<section id="detailsPage">
    <div class="details">
        <div class="animalPic">
            <img src="${pet.image}">
        </div>
        <div>
            <div class="animalInfo">
                <h1>Name: ${pet.name}</h1>
                <h3>Breed: ${pet.breed}</h3>
                <h4>Age: ${pet.age}</h4>
                <h4>Weight: ${pet.weight}</h4>
                <h4 class="donation">Donation: 0$</h4>
            </div>
            ${checkHtml}
        </div>
    </div>
</section>
`;

export async function detailsPage(ctx) {
    const petId = ctx.params.id;
    const pet = await petService.getById(petId);
    if (ctx.user) {
        // закачаме го за да го използваме в темплейта
        pet.isOwner = ctx.user._id == pet._ownerId;
    }
    ctx.render(detailsTemplate(pet, checkHtml()));

    function checkHtml() {
        if(ctx.user) {
            if(ctx.user._id == pet._ownerId){
                return html ` <div class="actionBtn">
                                <a href="/edit/${pet._id}" class="edit">Edit</a>
                                <a @click=${onDelete} href="javascript:void(0)" class="remove">Delete</a>
                            </div>`
            } else{
                return html ` <div class="actionBtn">
                                <a @click=${onDonate} href="javascript:void(0)" class="donate">Donate</a>
                            </div>`
            }
        }
    }

    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this material?');
        if (choice) {
            await petService.deleteById(petId);
            ctx.page.redirect('/');
        }
    }

    async function onDonate(event) {
        event.target.remove()
    }
}