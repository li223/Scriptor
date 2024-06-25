import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.tsx'
import CommandLibrary from './CommandLibrary/CommandLibrary';
import Users from './Users/Users';
import PageError from './Components/PageError';

import './index.css'

const router = createBrowserRouter([
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
    }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
