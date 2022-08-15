import { render, html } from "../../node_modules/lit-html/lit-html.js";

const navTemplate = (user) => html`
    <nav>
        <a class="active" href="/">Home</a>
        <a href="/all">All Listings</a>
        <a href="#">By Year</a>
        ${user
            ? html `<div id="profile">
                        <a>Welcome ${user.username}</a>
                        <a href="/profile">My Listings</a>
                        <a href="/create">Create Listing</a>
                        <a href="/logout">Logout</a>
                    </div>`
            : html `<div id="guest">
                        <a href="/login">Login</a>
                        <a href="/register">Register</a>
                    </div>`}
    </nav>
`

let header = document.getElementById('nav-header');
let root = document.getElementById('site-content');

function ctxRender(content) {
    render(content, root);
}

export function addRender(ctx, next) {
    render(navTemplate(ctx.user), header);
    ctx.render = ctxRender;
    next();
}
