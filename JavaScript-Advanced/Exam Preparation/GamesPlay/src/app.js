import page from '../node_modules/page/page.mjs';
import { addRender } from './middlewares/render.js';
import { logout } from './api/userService.js';
import { addSession } from './middlewares/session.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { homePage } from './views/home.js';
import { createPage } from './views/create.js';


// начин за тестване от конзолата( await api.getAllMaterials());
import * as api from './api/gameService.js'
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { catalogPage } from './views/catalog.js';
window.api = api;

page(addSession)
page(addRender)

page('/', homePage);
page('/edit/:id', editPage);
page('/details/:id', detailsPage);
page('/all', catalogPage);
page('/create', createPage);
page('/login', loginPage);
page('/logout', onLogout);
page('/register', registerPage);

page.start();

function onLogout() {
    logout();
    page.redirect('/')
}