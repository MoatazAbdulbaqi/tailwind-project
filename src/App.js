import './styles.css';
import Header from './components/header/header.component';
import LandingPage from './pages/landing/landing.component';
import FeaturesPage from './pages/features/features.component';
import ServicesPage from './pages/services/services.component';
import PortfolioPage from './pages/portfolio/portfolio.component';
import AboutPage from './pages/about/about.component';
import ContactPage from './pages/contact/contact.component';
import Footer from './pages/footer/footer.component';

function App() {
    return (
        <div className="App">
            <LandingPage />
            <FeaturesPage />
            <ServicesPage />
            <PortfolioPage />
            <AboutPage />
            <ContactPage />
            <Footer />
        </div>
    );
}

export default App;
