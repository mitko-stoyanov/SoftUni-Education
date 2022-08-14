import { html } from '../../node_modules/lit-html/lit-html.js'
import { createSubmitHandler } from '../util.js';
import * as userService from '../api/userService.js'
import { notificationHandler } from '../api/notify.js';

const loginTemplate = (onSubmit) => html`
<section id="login">
    <form @submit=${onSubmit} id="login-form">
        <div class="container">
            <h1>Login</h1>
            <label for="email">Email</label>
            <input id="email" placeholder="Enter Email" name="email" type="text">
            <label for="password">Password</label>
            <input id="password" type="password" placeholder="Enter Password" name="password">
            <input type="submit" class="registerbtn button" value="Login">
            <div class="container signin">
                <p>Dont have an account?<a href="/register">Sign up</a>.</p>
            </div>
        </div>
    </form>
</section>
`;

export function loginPage(ctx) {
    ctx.render(loginTemplate(createSubmitHandler(ctx, onSubmit)));
}

async function onSubmit(ctx, data, event) {
    if (data.email == '' || data.password == '') {
        return notificationHandler('All fields are required!');
    }

    await userService.login(data.email, data.password);
    event.target.reset();
    ctx.page.redirect('/all');
}