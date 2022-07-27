import { html } from '../../node_modules/lit-html/lit-html.js'
import { createSubmitHandler } from '../utils.js';
import * as userService from '../api/userService.js'

const registerTemplate = (onSubmit) => html`
<section id="register-page" class="auth">
    <form @submit=${onSubmit} id="register">
        <h1 class="title">Register</h1>

        <article class="input-group">
            <label for="register-email">Email: </label>
            <input type="email" id="register-email" name="email">
        </article>

        <article class="input-group">
            <label for="register-password">Password: </label>
            <input type="password" id="register-password" name="password">
        </article>

        <article class="input-group">
            <label for="repeat-password">Repeat Password: </label>
            <input type="password" id="repeat-password" name="repeatPassword">
        </article>

        <input type="submit" class="btn submit-btn" value="Register">
    </form>
</section>
`;

export function registerPage(ctx) {
    ctx.render(registerTemplate(createSubmitHandler(ctx, onSubmit)));
}

async function onSubmit(ctx, data, event) {
    if (data.email == '' || data.password == '') {
        return alert('All fields are required!');
    }

    if (data.password != data['repeatPassword']) {
        return alert('Passwords don\'t match')
    }

    await userService.register(data.email, data.password);
    event.target.reset();
    ctx.page.redirect('/')
}