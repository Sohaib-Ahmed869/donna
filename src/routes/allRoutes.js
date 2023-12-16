import React   from 'react'
import Layout2 from '../pages/Layout2/layout2';

const authProtectedRoutes = [
    // Lauout1
    { path: "/", component: <Layout2/> },

    // Layout2
    { path:"/index-2", component: <Layout2 /> },


]

export default authProtectedRoutes;