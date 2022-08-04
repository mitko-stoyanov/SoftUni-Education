import { html } from '../../node_modules/lit-html/lit-html.js'
import { createSubmitHandler } from '../util.js';
import * as userService from '../api/userService.js'

const loginTemplate = (onSubmit) => html`
<section id="login-page" class="auth">
    <form @submit=${onSubmit} id="login">

        <div class="container">
            <div class="brand-logo"></div>
            <h1>Login</h1>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Sokka@gmail.com">

            <label for="login-pass">Password:</label>
            <input type="password" id="login-password" name="password">
            <input type="submit" class="btn submit" value="Login">
            <p class="field">
                <span>If you don't have profile click <a href="#">here</a></span>
            </p>
        </div>
    </form>
</section>
`

export function loginPage(ctx) {
    ctx.render(loginTemplate(createSubmitHandler(ctx, onSubmit)));
}

async function onSubmit(ctx, data, event) {
    if (data.email == '' || data.password == '') {
        return alert('All fields are required!');
    }

    await userService.login(data.email, data.password);
    event.target.reset();
    ctx.page.redirect('/');
}