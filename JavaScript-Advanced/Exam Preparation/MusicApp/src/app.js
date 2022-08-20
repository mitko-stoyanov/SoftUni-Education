import page from '../node_modules/page/page.mjs'
import { logout } from './api/userService.js';

import { addRender } from './middlewares/render.js';
import { addSession } from './middlewares/session.js';
import { catalogPage } from './views/catalog.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';



page(addSession);
page(addRender);

page('/', homePage);
page('/register', registerPage)
page('/login', loginPage);
page('/logout', onLogout);
page('/catalog', catalogPage);
page('/create', createPage);
page('/details/:id', detailsPage)
page('/edit/:id', editPage);
// page('/profile', profilePage);


page.start();

function onLogout() {
    logout();
    page.redirect('/');
}