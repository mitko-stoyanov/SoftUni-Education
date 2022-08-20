import { render, html } from "../../node_modules/lit-html/lit-html.js";

const navTemplate = (user) => html`
    <nav>
        <img src="./images/headphones.png">
        <a href="/">Home</a>
        <ul>
            <!--All user-->
            <li><a href="/catalog">Catalog</a></li>
            <li><a href="/search">Search</a></li>
            ${user
                ? html `<li><a href="/create">Create Album</a></li>
                        <li><a href="/logout">Logout</a></li>`
                : html `<li><a href="/login">Login</a></li>
                        <li><a href="/register">Register</a></li>`}
        </ul>
    </nav>
`

let header = document.getElementById('nav-header');
let root = document.getElementById('main-content');

function ctxRender(content) {
    render(content, root);
}

export function addRender(ctx, next) {
    render(navTemplate(ctx.user), header);
    ctx.render = ctxRender;
    next();
}
