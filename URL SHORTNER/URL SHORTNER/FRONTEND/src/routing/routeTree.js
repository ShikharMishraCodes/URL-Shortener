import RootLayout from "../RootLayout"
import { authRoute } from "./auth.route"
import { homePageRoute } from "./homepage"
import { dasboardRoute } from "./dashboard"
import { createRootRoute } from "@tanstack/react-router"

export const rootRoute = createRootRoute({
    component: RootLayout
})

export const routeTree =rootRoute.addChildren([
    authRoute, 
    homePageRoute, 
    dasboardRoute
])
