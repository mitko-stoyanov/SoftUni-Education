import page from '../node_modules/page/page.mjs'
import { logout } from './api/userService.js';

import { addRender } from './middlewares/render.js';
import { addSession } from './middlewares/session.js';
import { dashboardPage } from './views/dashboard.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';


page(addSession);
page(addRender);

page('/register', registerPage)
page('/login', loginPage);
page('/logout', onLogout);
page('/dashboard', dashboardPage);


page.start();

function onLogout() {
    logout();
    page.redirect('/');
}