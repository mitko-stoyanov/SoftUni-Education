import page from '../node_modules/page/page.mjs'
import { logout } from './api/userService.js';

import { addRender } from './middlewares/render.js';
import { addSession } from './middlewares/session.js';
import { createPage } from './views/create.js';
import { dashboardPage } from './views/dashboard.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { loginPage } from './views/login.js';
import { profilePage } from './views/profile.js';
import { registerPage } from './views/register.js';


page(addSession);
page(addRender);

page('/', dashboardPage);
page('/register', registerPage)
page('/login', loginPage);
page('/logout', onLogout);
page('/create', createPage);
page('/details/:id', detailsPage)
page('/edit/:id', editPage);
page('/profile', profilePage);


page.start();

function onLogout() {
    logout();
    page.redirect('/');
}