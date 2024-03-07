import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  Navigate,
  Route,
  RouterProvider,
  // createBrowserRouter,
  createHashRouter,
  createRoutesFromElements
} from 'react-router-dom'


import App from './App.jsx'
import CatalogPage from './app/components/layouts/catalog/catalog.jsx'
import MainPage from './app/components/layouts/mainPage.jsx'
import AboutUs from './app/components/layouts/aboutUs/aboutUs.jsx'


const router = createHashRouter(
  // const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={
      <App />
    }>
      <Route path='home' element={<MainPage />} />
      <Route path='catalog/:productPage?/:id?' element={<CatalogPage />} />
      <Route path='about' element={<AboutUs />} />
      {/*<Route path='promotion' element={''} />
      <Route path='login' element={''} />
      <Route path='logout' element={''} />
      <Route path='/networkError' element={''} />
      <Route element={''}>
        <Route path='admin/:product?/:prodId?/:edit?/:createProduct?' element={''} />
      </Route> */}
      <Route path="" element={<Navigate to="/home" replace />} />
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Route>
  )
);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    <RouterProvider router={router} />
  </React.StrictMode>
);





