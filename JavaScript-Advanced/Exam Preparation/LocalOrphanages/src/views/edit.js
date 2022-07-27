import { html } from '../../node_modules/lit-html/lit-html.js'
import * as materialService from '../api/materialService.js'
import { createSubmitHandler } from '../utils.js';

const editTemplate = (material, onSubmit) => html`
<section id="edit-page" class="auth">
    <form @submit=${onSubmit} id="edit">
        <h1 class="title">Edit Post</h1>

        <article class="input-group">
            <label for="title">Post Title</label>
            <input type="title" name="title" id="title" value="${material.title}">
        </article>

        <article class="input-group">
            <label for="description">Description of the needs </label>
            <input type="text" name="description" id="description" value="${material.description}">
        </article>

        <article class="input-group">
            <label for="imageUrl"> Needed materials image </label>
            <input type="text" name="imageUrl" id="imageUrl" value="${material.imageUrl}">
        </article>

        <article class="input-group">
            <label for="address">Address of the orphanage</label>
            <input type="text" name="address" id="address" value="${material.address}">
        </article>

        <article class="input-group">
            <label for="phone">Phone number of orphanage employee</label>
            <input type="text" name="phone" id="phone" value="${material.phone}">
        </article>

        <input type="submit" class="btn submit" value="Edit Post">
    </form>
</section>
`;

// Ако имаме textarea всички values трябва да станат .value
export async function editPage(ctx) {
    const materialId = ctx.params.id;
    const material = await materialService.getById(materialId);

    ctx.render(editTemplate(material, createSubmitHandler(ctx, onSubmit)));
}

async function onSubmit(ctx, data, event) {
    const materialId = ctx.params.id;

    if (Object.values(data).some(f => f == '')) {
        return alert('All fields are required!')
    }

    await materialService.update(materialId, {
        title: data.title,
        description: data.description,
        imageUrl: data.imageUrl,
        address: data.address,
        phone: data.phone
    });

    event.target.reset();
    ctx.page.redirect('/details/' + materialId)
}