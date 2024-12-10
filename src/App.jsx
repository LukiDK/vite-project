import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";
import ConceptPage from "./pages/ConceptPage";
import ContactPage from "./pages/ContactPage";

import { Nav } from "./components/nav/nav";
import { Footer } from "./components/footer/footer";
import { GlobalStyle } from "./styles/Global.style";

function App() {
    return (
        <Router>
            <GlobalStyle />
            <Nav />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/concept" element={<ConceptPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
