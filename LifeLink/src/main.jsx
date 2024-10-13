import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import HomePage from './components/HomePage.jsx'
import SearchFunctionality from './components/SearchFunctionality.jsx'
import ContactUsPage from './pages/ContactUsPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import FeedbackPage from './pages/FeedbackPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />
      },
      {
        path: "searching",
        element: <SearchFunctionality />
      },
      {
        path: "contact",
        element: <ContactUsPage />
      },
      {
        path: "about",
        element: <AboutPage />
      },
      {
        path: "feedback",
        element: <FeedbackPage />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
