import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Layout from './Layout.jsx'
import About from './components/about.jsx'
import ContactUs from './components/contactUs.jsx'

//There are two methods to create routes
// 1. By using router object
// 2. by using route and routes



// 1. By using router object
// const router = createBrowserRouter([
//   {
//     path:"/",
//     element: <Layout/>,
//     children:[
//       {
//         path:"",
//         element:<App/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:'contact',
//         element: <ContactUs/>
//       }
//     ]

    
//   },
// ])


//2. by using route and routes

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} >
      <Route path="" element={<App/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<ContactUs/>}/>
    </Route>
  )
)








createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
   
  </StrictMode>,
)
