import { Route, Routes, useLocation } from 'react-router-dom';

import Error404 from "containers/errors/error404";
import Home from "containers/pages/home";
import Cases from "containers/pages/cases";
import Services from "containers/pages/services";
import About from "containers/pages/about";
import Careers from "containers/pages/careers";
import Blog from "containers/pages/blog";
import Contact from "containers/pages/contact";

import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes(){

    const location = useLocation();

    return(
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                {/* Error Display */}
                <Route path="*" element={<Error404 />} />
                
                {/* Home Display */}
                <Route path="/" element={<Home />} />
                <Route path="/casos" element={<Cases />} />
                <Route path="/servicios" element={<Services />} />
                <Route path="/nosotros" element={<About />} />
                <Route path="/carreras" element={<Careers />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contacto" element={<Contact />} />
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;
