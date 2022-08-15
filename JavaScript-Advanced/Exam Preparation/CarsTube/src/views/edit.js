import { html } from '../../node_modules/lit-html/lit-html.js'
import * as carService from '../api/carsService.js'
import { createSubmitHandler } from '../utils.js';

const editTemplate = (car, onSubmit) => html`
<section id="edit-listing">
    <div class="container">

        <form @submit=${onSubmit} id="edit-form">
            <h1>Edit Car Listing</h1>
            <p>Please fill in this form to edit an listing.</p>
            <hr>

            <p>Car Brand</p>
            <input type="text" placeholder="Enter Car Brand" name="brand" value="${car.brand}">

            <p>Car Model</p>
            <input type="text" placeholder="Enter Car Model" name="model" value="${car.model}">

            <p>Description</p>
            <input type="text" placeholder="Enter Description" name="description" value="${car.description}">

            <p>Car Year</p>
            <input type="number" placeholder="Enter Car Year" name="year" value="${car.year}">

            <p>Car Image</p>
            <input type="text" placeholder="Enter Car Image" name="imageUrl" value="${car.imageUrl}">

            <p>Car Price</p>
            <input type="number" placeholder="Enter Car Price" name="price" value="${car.price}">

            <hr>
            <input type="submit" class="registerbtn" value="Edit Listing">
        </form>
    </div>
</section>
`;
// Ако имаме textarea всички values трябва да станат .value
export async function editPage(ctx) {
    const carId = ctx.params.id;
    const car = await carService.getById(carId);

    ctx.render(editTemplate(car, createSubmitHandler(ctx, onSubmit)));
}

async function onSubmit(ctx, data, event) {
    const carId = ctx.params.id;

    if (Object.values(data).some(f => f == '')) {
        return alert('All fields are required!')
    }

    await carService.update(carId, {
        brand: data.brand,
        model: data.model,
        description: data.description,
        year: Number(data.year),
        imageUrl: data.imageUrl,
        price: Number(data.price)
    });

    event.target.reset();
    ctx.page.redirect('/details/' + carId)
}