import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom"

import Landig from "./pages/Landing";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const AppRoutes: React.FC = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Landig />} />
                <Route path="/sobre" element={<About />} />
                <Route path="/servicos" element={<Services />} />
                <Route path="/projetos" element={<Projects />} />
                <Route path="/contato" element={<Contact />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes;