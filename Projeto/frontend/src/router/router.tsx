import Login from "../pages/Login"
import Home from "../pages/Home"

import { Route, Routes } from "react-router-dom"
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
        </Routes>
    )
}