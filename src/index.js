import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import MobileDashboard from './components/Responsive/MobileDasbord.tsx';
import DesktopDashboard from './App.tsx';
import reportWebVitals from './reportWebVitals';
import Userownerlist from './pages/userownerlist.tsx';
import Profile from './pages/Profile.tsx'
import Report from './pages/Report.tsx';
import OrderDetailsPage from './pages/OrderDetailsPage.tsx';
import DesktopShopownerlist from './pages/shopownerlist.tsx';
import MobileShopownerlist from './components/Responsive/MobileShopowner.tsx';
import Invoice from './pages/Invoice.tsx';
import CreateInvoice from './components/CreateInvoice.tsx';
import ReviewPanel from './components/reviewpanal.tsx';
import Mains from './pages/mains.tsx';
import Rating from './pages/Rating.tsx'
import DesktopPromotionPage from './pages/Promotion.tsx';
import MobilePromotionpages from './components/Responsive/MobilePromotionPages.tsx';
import ShopDiscountsExpanded from './components/ShopDiscountsExpanded.tsx';
import CampaignDetail from './components/CampaignDetail.tsx';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
      <Route path="/" element={
          window.innerWidth <= 768 ? <MobileDashboard /> : <DesktopDashboard />
        } />
        <Route path="/App" element={
          window.innerWidth <= 768 ? <MobileDashboard /> : <DesktopDashboard />  
        } />
        <Route path="/Report" element={<Report />} />
        <Route path="/OrderDetailsPage" element={<OrderDetailsPage />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Invoice" element={<Invoice />} />
        <Route path="/Shopownerlist" element={
          window.innerWidth <= 768 ? <MobileShopownerlist /> : <DesktopShopownerlist />  
        } />
        <Route path="/Userownerlist" element={<Userownerlist />} />
        <Route path="/CreateInvoice" element={<CreateInvoice/>} />
        <Route path="/ReviewPanel" element={<ReviewPanel />} />
        <Route path="/Mains" element={<Mains />} />
        <Route path="/Rating" element={<Rating />} />
        <Route path="/PromotionPage" element={
          window.innerWidth <= 768 ? <MobilePromotionpages /> : <DesktopPromotionPage />  
        } />
        <Route path="/promotions/discounts" element={<ShopDiscountsExpanded />} />
        <Route path="/campaigns/:campaignId" element={<CampaignDetail />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
