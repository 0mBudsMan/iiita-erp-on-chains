import logo from './logo.svg';
import './App.css';

import Artifacts from './ABI/CollegeERP.json';
import contractAddress from './ABI/contract-address.json';
import { BrowserProvider, Contract } from 'ethers';

import React, { useEffect, useState, useContext, use } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
} from "react-router-dom";
import Home from './pages/Home';
import Admin from './pages/Admin';
import Faculty from './pages/Faculty';
export const MyContext = React.createContext();
function App() {
  const init = async () => {
    const _provider = new BrowserProvider(window.ethereum);
    const signer = await _provider.getSigner(0);
    const _token = new Contract(contractAddress.Token, Artifacts.abi, signer);
    setToken(_token);
  }
  const [token, setToken] = useState();
  useEffect(() => {
    init();
  }, []);
  return (
    <MyContext.Provider value={{ token }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/faculty" element={<Faculty />} />
        </Routes>
      </Router>
    </MyContext.Provider>
  );
}

export default App;
