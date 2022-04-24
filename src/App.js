import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import HeaderBottom from './component/HeaderBottom/HeaderBottom';
import HeaderTop from './component/HeaderTop/HeaderTop';
import Products from './pages/Products/Products';
import Overview from './pages/Overview/Overview';
import Invoices from './pages/Invoices/Invoices';
import Clients from './pages/Clients/Clients';

function App() {
  return (
    <Fragment>
      <div className="top-bar">
      </div>
      <div className="container">
        <HeaderTop />

        <Router>
          <HeaderBottom />
          <Routes>
            <Route path="/overview" element={< Overview />} />
            <Route path="/" element={< Products />} />
            <Route path="/clients" element={< Clients />} />
            <Route path="/invoices" element={< Invoices />} />
          </Routes>
        </Router>
      </div>


    </Fragment>
  );
}

export default App;
