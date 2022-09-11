import { html, nothing } from '../../node_modules/lit-html/lit-html.js'
import * as booksService from '../api/booksService.js'

const detailsTemplate = (book, checkHtml) => html`
<section id="details-page" class="details">
    <div class="book-information">
        <h3>${book.title}</h3>
        <p class="type">Type: ${book.type}</p>
        <p class="img"><img src="${book.imageUrl}"></p>
        <div class="actions">
            ${checkHtml}

            <!-- ( for Guests and Users )  -->
            <div class="likes">
                <img class="hearts" src="/images/heart.png">
                <span id="total-likes">Likes: 0</span>
            </div>
            <!-- Bonus -->
        </div>
    </div>
    <div class="book-description">
        <h3>Description:</h3>
        <p>${book.description}</p>
    </div>
</section>
`;

export async function detailsPage(ctx) {
    const bookId = ctx.params.id;
    const book = await booksService.getById(bookId);
    if (ctx.user) {
        // закачаме го за да го използваме в темплейта
        book.isOwner = ctx.user._id == book._ownerId;
    }
    ctx.render(detailsTemplate(book, checkHtml()));

    function checkHtml() {
        if (ctx.user) {
            if (ctx.user._id == book._ownerId) {
                return html`<a class="button" href="/edit/${book._id}">Edit</a>
                            <a @click=${onDelete} class="button" href="javascript:void(0)">Delete</a>`
            } else {
                return html`<a class="button" href="#">Like</a>`
            }
        }
    }

    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this material?');
        if (choice) {
            await booksService.deleteById(bookId);
            ctx.page.redirect('/');
        }
    }
}