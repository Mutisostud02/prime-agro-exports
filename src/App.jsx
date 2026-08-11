import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Layout components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Page components
import HomePage from "./pages/HomePage";
import WhoWeArePage from "./pages/about/WhoWeArePage";
import CompliancePage from "./pages/about/CompliancePage";
import FreightLogisticsPage from "./pages/about/FreightLogisticsPage";
import CustomersPage from "./pages/about/CustomersPage";
import TeamCareersPage from "./pages/about/TeamCareersPage";
import FarmsPackhousesPage from "./pages/growing/FarmsPackhousesPage";
import OutGrowerPage from "./pages/growing/OutGrowerPage";
import ProductsCategoryPage from "./pages/products/ProductsCategoryPage";
import FarmingPracticePage from "./pages/sustainability/FarmingPracticePage";
import ConservationPage from "./pages/sustainability/ConservationPage";
import CSRPage from "./pages/sustainability/CSRPage";
import ContactPage from "./pages/ContactPage";

// Scroll To Top on route change helper
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#F3EEE1] text-[#241F18] font-sans antialiased selection:bg-[#E1672B] selection:text-white">
        <Header />
        
        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            
            {/* About Us Routes */}
            <Route path="/about-us/who-we-are" element={<WhoWeArePage />} />
            <Route path="/about-us/compliance-accreditation" element={<CompliancePage />} />
            <Route path="/about-us/freight-logistics" element={<FreightLogisticsPage />} />
            <Route path="/about-us/customers" element={<CustomersPage />} />
            <Route path="/about-us/our-team-careers" element={<TeamCareersPage />} />

            {/* Growing Base Routes */}
            <Route path="/growing-base/our-farms-packhouses" element={<FarmsPackhousesPage />} />
            <Route path="/growing-base/out-grower-farming" element={<OutGrowerPage />} />

            {/* Products Routes */}
            <Route path="/our-products" element={<ProductsCategoryPage />} />
            <Route path="/our-products/:categoryId" element={<ProductsCategoryPage />} />

            {/* Sustainability Routes */}
            <Route path="/sustainability/farming-practice" element={<FarmingPracticePage />} />
            <Route path="/sustainability/conservation" element={<ConservationPage />} />
            <Route path="/sustainability/corporate-social-initiative-responsibilities" element={<CSRPage />} />

            {/* Contact Route */}
            <Route path="/contact-us" element={<ContactPage />} />

            {/* Catch-all fallback redirecting to Home */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
