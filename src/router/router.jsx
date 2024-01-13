import { createBrowserRouter } from "react-router-dom"
import Layout from "../layouts/Layout"
import Home from "../components/Pages/Home"
import SubLayout from "../layouts/SubLayout"
import PublicationsSection from "../components/Pages/PublicationsSection"
import Conference from "../components/Pages/Conference"

export  const router = createBrowserRouter([
    {
        path:"/",
        element: <Layout/>,
        children:[
            {
                path:"/",
                element: <Home/>
            },
            {
                path:"publications",
                element: <SubLayout>
                    <PublicationsSection/>
                </SubLayout>
            },
            {
                path:"conference",
                element: <SubLayout>
                    <Conference/>
                </SubLayout>
            }
        ]
    }
])