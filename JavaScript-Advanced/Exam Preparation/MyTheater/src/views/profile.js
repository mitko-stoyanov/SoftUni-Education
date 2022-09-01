import { html } from '../../node_modules/lit-html/lit-html.js'
import * as eventService from '../api/eventService.js'

const profileTemplate = (events, user) => html`
<section id="profilePage">
    <div class="userInfo">
        <div class="avatar">
            <img src="./images/profilePic.png">
        </div>
        <h2>${user.email}</h2>
    </div>
    <div class="board">
        <!--If there are event-->
        ${events.length > 0
            ? events.map(eventTemplate)
            : html `<div class="no-events">
                        <p>This user has no events yet!</p>
                    </div>`}
    </div>
</section>
`;

const eventTemplate = (event) => html`
<div class="eventBoard">
    <div class="event-info">
        <img src="${event.imageUrl}">
        <h2>${event.title}</h2>
        <h6>${event.date}</h6>
        <a href="/details/${event._id}" class="details-button">Details</a>
    </div>
</div>
`

export async function profilePage(ctx) {
    const events = await eventService.getProfileEvents(ctx.user._id);
    ctx.render(profileTemplate(events, ctx.user));
}