import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Course from './components/Course.jsx'
import Home from './components/Home.jsx'
import Quize from './components/Quize.jsx'
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import Roadmap from './components/Roadmap.jsx'
import Devai from './components/Devai.jsx'
import Que from './components/Htmlque.jsx'
import Handson from './components/Handson.jsx'

const router = createBrowserRouter([{
  path: '/', element: <App />,
  children: [{
    path: '/courses', element: <Course></Course>
  }, {
    path: '/', element: <Home />
  }, {
    path: '/quize', element: <Quize></Quize>
  },{
    path:'/roadmap',element:<Roadmap></Roadmap>
  },{
    path:'/devai',element:<Devai></Devai>
  },{
    path:'/quizz/html/questions',element:<Que></Que>
  },{
    path:'/prac/hands-on',element:<Handson></Handson>
  }]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-i4s1no7ebpmqunny.us.auth0.com"
      clientId="EBgZZSC4bJwepgrLPIA0XRTl4UE1cSTG"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <RouterProvider router={router}></RouterProvider>
    </Auth0Provider>,

    {/* <App /> */}
  </React.StrictMode>,
)
