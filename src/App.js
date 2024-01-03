import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from './Pages/AboutPage/AboutPage';
// import Contact from './Pages/Contact/Contact';
import Error from './Pages/Error/Error';
import HomeOne from "./Pages/HomeOne/HomeOne/HomeOne";
import HomeThree from './Pages/HomeThree/HomeThree/HomeThree';
import Textarea from './Pages/HomeTwo/Textarea';
import NewsDetails from './Pages/News/NewsDetails';
import NewsStandard from './Pages/News/NewsStandard';
import Portfolio from './Pages/Portfolio/Portfolio';
import PortfolioDetails from './Pages/Portfolio/PortfolioDetails';
import PortfolioDetailsTwo from './Pages/Portfolio/PortfolioDetailsTwo';
import PortfolioThree from './Pages/Portfolio/PortfolioThree';
import PortfolioTwo from './Pages/Portfolio/PortfolioTwo';
import Preloader from './Pages/Preloader/Preloader';
import ScrollTop from "./Pages/ScrollTop/ScrollTop";
import ServicesDetails from './Pages/Services/ServicesDetails';
import ServicesPage from './Pages/Services/ServicesPage';
import Navbar from './Pages/Contact/Enavbar';
// import { Home } from './Pages/Header/Menu.js';

function App() {
    const [loader, setLoader] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoader(false);
        }, 2000);
    }, []);

    return (
        <>
            {loader && <Preloader />}
            <Router><Routes>
                <Route path="/" element={<HomeOne />} />
                <Route path="/home-two" element={<Textarea title="ENTER TEXT HERE"/>} />
                <Route path="/home-three" element={<HomeThree />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/services-details" element={<ServicesDetails />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/portfolio-two" element={<PortfolioTwo />} />
                <Route path="/portfolio-three" element={<PortfolioThree />} />
                <Route path="/portfolio-details" element={<PortfolioDetails />} />
                <Route path="/portfolio-details-two" element={<PortfolioDetailsTwo />} />
                <Route path="/news" element={<NewsStandard />} />
                <Route path="/news-details" element={<NewsDetails />} />
                <Route path="/contact" element={<Navbar/>} />
                <Route path="*" element={<Error />} />
            </Routes></Router>
            <ScrollTop />
        </>
    )
}

export default App;
