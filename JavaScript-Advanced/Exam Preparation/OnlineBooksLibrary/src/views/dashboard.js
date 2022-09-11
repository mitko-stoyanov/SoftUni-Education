import { html } from '../../node_modules/lit-html/lit-html.js'
import * as booksService from '../api/booksService.js'

const dashboardTemplate = (books) => html`
<section id="dashboard-page" class="dashboard">
    <h1>Dashboard</h1>
    <!-- Display ul: with list-items for All books (If any) -->
    <ul class="other-books-list">
        ${books.length > 0
            ? books.map(bookTemplate)
            : html `<p class="no-books">No books in database!</p>`}
    </ul>
</section>
`;

const bookTemplate = (book) => html`
<li class="otherBooks">
    <h3>${book.title}</h3>
    <p>Type: ${book.type}</p>
    <p class="img"><img src="${book.imageUrl}"></p>
    <a class="button" href="/details/${book._id}">Details</a>
</li>
`

export async function dashboardPage(ctx) {
    const books = await booksService.getAllBooks();
    ctx.render(dashboardTemplate(books));
}