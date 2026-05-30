
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Auth } from "../pages/Auth"
import { Layout } from "../pages/Layout"

export default function index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />} />
                <Route path="auth" element={<Auth />} />
                <Route path="*" element={<h1>you lost, you are on 404 page</h1>} />
            </Routes>
        </BrowserRouter>
    )
}
