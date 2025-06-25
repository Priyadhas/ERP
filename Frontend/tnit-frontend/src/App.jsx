import React, { useMemo } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ListUserComponent from './components/ListUserComponent';
import UserComponent from './components/UserComponent';
import LoginComponent from './components/LoginComponent';
import HomepageComponent from './components/HomepageComponent';
import NewClientForm from './components/NewClientForm';
import PriceListForm from './components/PriceListForm';
import DealPipelineForm from './components/DealPipelineForm';
import RenewalsForm from './components/RenewalForm';
import TicketEntryForm from './components/TicketEntryForm';
import SidebarComponent from './components/SidebarComponent';
import GetPriceComponent from './components/GetPriceComponent';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
}

// 👇 Separated layout to access routing information
function MainLayout() {
  const location = useLocation();

  // Define the paths where sidebar should appear
  const showSidebarPaths = useMemo(() => [
    '/homepage',
    '/list-users',
    '/add-user',
    '/add-client',
    '/add-pipeline',
    '/add-price-list',
    '/add-renewals',
    '/add-ticket-entry',
    '/get-price'
  ], []);

  const showSidebar = showSidebarPaths.includes(location.pathname);

  return (
    <div className="d-flex">
      {showSidebar && <SidebarComponent />}
      <div className="flex-grow-1 d-flex flex-column min-vh-100">
        <HeaderComponent />
        <div className="flex-grow-1 p-4">
          <Routes>
            <Route path="/" element={<LoginComponent />} />
            <Route path="/homepage" element={<HomepageComponent />} />
            <Route path="/list-users" element={<ListUserComponent />} />
            <Route path="/add-user" element={<UserComponent />} />
            <Route path="/add-client" element={<NewClientForm />} />
            <Route path="/add-pipeline" element={<DealPipelineForm />} />
            <Route path="/add-price-list" element={<PriceListForm />} />
            <Route path="/get-price" element={<GetPriceComponent />} />
            <Route path="/add-renewals" element={<RenewalsForm />} />
            <Route path="/add-ticket-entry" element={<TicketEntryForm />} />
          </Routes>
        </div>
        <FooterComponent />
      </div>
    </div>
  );
}

export default App;
