import Profile from "../pages/Profile"
import Login from "../pages/Login"
import Home from "../pages/Home"
import User from "../pages/User"

import { Route, Routes } from "react-router-dom"
import { AuthAdminRoutes } from "./admin.routes"
import { AuthRoutes } from "./auth.routes"

export function Router() {

    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={
                <AuthRoutes>
                    <Home />
                </AuthRoutes>
            } />
            <Route path="/profile" element={
                <AuthRoutes>
                    <Profile />
                </AuthRoutes>
            } />
            <Route path="/user" element={
                <AuthAdminRoutes>
                    <User />
                </AuthAdminRoutes>
            } />
        </Routes>
    )
}