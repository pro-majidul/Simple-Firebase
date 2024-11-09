

import { createBrowserRouter } from 'react-router-dom';

import Home from '../components/Home';
import MainLayouts from '../layouts/MainLayouts';
import Login from '../components/Login';


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts></MainLayouts>,
      children : [
        {
            path : '/',
            element : <Home></Home>
        },
        {
          path : '/login',
          element : <Login></Login>
        }
      ]
    },
   
  ],
  {
    future: {
      v7_skipActionErrorRevalidation: true,
    },
  });

  export default router