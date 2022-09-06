import page from '../node_modules/page/page.mjs';
import { addRender } from './middlewares/render.js';

import { logout } from './api/userService.js';
import { addSession } from './middlewares/session.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { dashboardPage } from './views/dashboard.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { profilePage } from './views/profile.js';

// начин за тестване от конзолата( await api.getAllMaterials());
// import * as api from './api/materialsService.js'
// window.api = api;

page(addSession)
page(addRender)

page('/', dashboardPage);
page('/profile', profilePage);
page('/edit/:id', editPage);
page('/details/:id', detailsPage);
page('/create', createPage);
page('/login', loginPage);
page('/logout', onLogout);
page('/register', registerPage);

page.start();

function onLogout() {
    logout();
    page.redirect('/')
}