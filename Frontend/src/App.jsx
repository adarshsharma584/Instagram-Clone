import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from "./pages/Home.jsx"
import SignUp from "./pages/SignUp.jsx"
import ReelsPage from "./pages/ReelsPage.jsx"
import SearchPage from "./pages/SearchPage.jsx"
import ProfilePage from "./pages/ProfilePage.jsx"
import Login from "./pages/Login.jsx"
import Layout from "./components/Layout.jsx"
import AddPost from "./pages/AddPost.jsx"


const router = createBrowserRouter([
  {path:"/",
    element:<Layout />,
    children:[
      {index:true, element:<Home />},
      {path:"/reels", element:<ReelsPage />},
      {path:"/search", element:<SearchPage />},
      {path:"/profile", element:<ProfilePage />},
      {path:"/add-post", element:<AddPost />}
    ]
  },
  {path:"/login", element:<Login />},
  {path:"/signup", element:<SignUp />},
]);


function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App