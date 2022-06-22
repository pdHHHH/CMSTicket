import config from 'config';
import { IRoute } from 'models/routes/routes';
import Check from 'pages/Check';
import Dashboard from 'pages/Dashboard';
import Setting from 'pages/setting';
import Ticket from 'pages/ticket';

// Layouts
// import { HeaderOnly } from '~/layouts';

// Public routes
const publicRoutes: IRoute[] = [
    { path: config.routes.dashboard, component: Dashboard },
    { path: config.routes.ticket, component: Ticket },
    { path: config.routes.check, component: Check },
    { path: config.routes.setting, component: Setting },
];

const privateRoutes: IRoute[] = [];

export { publicRoutes, privateRoutes };
