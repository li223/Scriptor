import { createBrowserRouter } from 'react-router-dom';

import App from '../App.tsx'
import { PageError, CommandLibrary, Users, Servers } from '../Pages/PageExports'

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