import { createBrowserRouter } from 'react-router-dom'; 
import { HeroPage } from './HeroPage';
import { Login } from './Login';
import { RouterProvider } from 'react-router-dom';
import { Browser } from './Browser';

export const Body = () => {


  const appRouter = createBrowserRouter([
    {
      path:'/',
      element:<HeroPage/>
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/browser',
      element:<Browser/>
    }
  ])

  return (
    <>
    <RouterProvider router = {appRouter}/>
    </>
  )
}



