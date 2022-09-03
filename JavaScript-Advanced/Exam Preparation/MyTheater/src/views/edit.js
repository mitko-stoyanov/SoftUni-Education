import { html } from '../../node_modules/lit-html/lit-html.js'
import * as eventService from '../api/eventService.js'
import { createSubmitHandler } from '../utils.js';

const editTemplate = (event, onSubmit) => html`
<section id="editPage">
    <form @submit=${onSubmit} class="theater-form">
        <h1>Edit Theater</h1>
        <div>
            <label for="title">Title:</label>
            <input id="title" name="title" type="text" placeholder="Theater name" value="${event.title}">
        </div>
        <div>
            <label for="date">Date:</label>
            <input id="date" name="date" type="text" placeholder="Month Day, Year" value="${event.date}">
        </div>
        <div>
            <label for="author">Author:</label>
            <input id="author" name="author" type="text" placeholder="Author" value="${event.author}">
        </div>
        <div>
            <label for="description">Theater Description:</label>
            <textarea id="description" name="description" placeholder="Description">${event.description}</textarea>
        </div>
        <div>
            <label for="imageUrl">Image url:</label>
            <input id="imageUrl" name="imageUrl" type="text" placeholder="Image Url" value="${event.imageUrl}">
        </div>
        <button class="btn" type="submit">Submit</button>
    </form>
</section>
`;
// Ако имаме textarea всички values трябва да станат .value
export async function editPage(ctx) {
    const eventId = ctx.params.id;
    const event = await eventService.getById(eventId);

    ctx.render(editTemplate(event, createSubmitHandler(ctx, onSubmit)));
}

async function onSubmit(ctx, data, event) {
    const eventId = ctx.params.id;

    if (Object.values(data).some(f => f == '')) {
        return alert('All fields are required!')
    }

    await eventService.update(eventId, {
        title: data.title,
        date: data.date,
        author: data.author,
        imageUrl: data.imageUrl,
        description: data.description
    });

    event.target.reset();
    ctx.page.redirect('/details/' + eventId)
}