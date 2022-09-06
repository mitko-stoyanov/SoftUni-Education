import { html } from '../../node_modules/lit-html/lit-html.js'
import * as booksService from '../api/booksService.js'

const profileTemplate = (books) => html`
<section id="my-books-page" class="my-books">
    <h1>My Books</h1>
    <!-- Display ul: with list-items for every user's books (if any) -->
    <ul class="my-books-list">
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

export async function profilePage(ctx) {
    const books = await booksService.getOwnerMaterials(ctx.user._id);
    ctx.render(profileTemplate(books));
}