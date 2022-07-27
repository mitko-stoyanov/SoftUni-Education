import { html, nothing } from '../../node_modules/lit-html/lit-html.js'
import * as materialService from '../api/materialService.js'
import * as donateService from '../api/donateService.js'

const detailsTemplate = (material, checkButtons, getDonations) => html`
<section id="details-page">
    <h1 class="title">Post Details</h1>

    <div id="container">
        <div id="details">
            <div class="image-wrapper">
                <img src="${material.imageUrl}" alt="Material Image" class="post-image">
            </div>
            <div class="info">
                <h2 class="title post-title">${material.title}</h2>
                <p class="post-description">Description: ${material.description}</p>
                <p class="post-address">Address: ${material.address}</p>
                <p class="post-number">Phone number: ${material.phone}</p>
                <p class="donate-Item">Donate Materials: ${getDonations}</p>

                ${checkButtons}

            </div>
        </div>
    </div>
</section>
`;

export async function detailsPage(ctx) {
    const materialId = ctx.params.id;
    const material = await materialService.getById(materialId);

    if (ctx.user) {
        // закачаме го за да го използваме в темплейта
        material.isOwner = ctx.user._id == material._ownerId;
    }

    function checkButtons() {
        if(ctx.user) {
            if(ctx.user._id == material._ownerId) {
                return html `
                <div class="btns">
                    <a href="/edit/${material._id}" class="edit-btn btn">Edit</a>
                    <a @click=${onDelete} href="javascript:void(0)" class="delete-btn btn">Delete</a>
                </div>`
            } else{
                return html `
                <div class="btns">
                    <a @click=${onDonate} href="javascript:void(0)" class="donate-btn btn">Donate</a>
                </div>`
            }
        }
    }

    ctx.render(detailsTemplate(material, checkButtons(), getDonations()));

    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this material?');
        if (choice) {
            await materialService.deleteById(materialId);
            ctx.page.redirect('/dashboard');
        }
    }

    async function onDonate(event) {
        event.target.remove();
        await donateService.donate({
            postId: materialId
        });
    }

    async function getDonations() {
        let donations = await donateService.getAllDonates(materialId);
        console.log(donations)
        return donations;
    }
}

