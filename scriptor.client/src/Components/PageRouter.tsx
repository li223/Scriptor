import { createBrowserRouter } from 'react-router-dom';

import App from '../App.tsx'
import CommandLibrary from '../Pages/CommandLibrary/CommandLibrary';
import Users from '../Pages/Users/Users';
import Servers from '../Pages/Servers/Servers'
import PageError from '../Components/PageError';

const PageRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <PageError />
    },
    {
        path: "/commandlibrary",
        element: <CommandLibrary />,
        errorElement: <PageError />
    },
    {
        path: "/users",
        element: <Users />,
        errorElement: <PageError />
    },
    {
        path: "/servers",
        element: <Servers />,
        errorElement: <PageError />
    }
]);

export default PageRouter;