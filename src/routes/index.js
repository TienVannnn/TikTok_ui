// Layouts
import { HeaderOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';

const publicRoutes = [
    { path: '/', componen: Home },
    { path: '/following', componen: Following },
    { path: '/profile', componen: Profile },
    { path: '/search', componen: Search, layout: null },
    { path: '/upload', componen: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
