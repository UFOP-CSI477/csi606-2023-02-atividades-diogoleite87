import { Route, Routes } from "react-router-dom"

import Person from "../pages/Person"
import Home from "../pages/Home"

export function Router() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/person" element={<Person />} />
        </Routes>
    )
}