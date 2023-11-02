import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { ExloreTopBooks } from './layouts/Homepage/ExploreTopBooks';


function App() {
  return (
    <div>
    <Navbar/>
    <ExloreTopBooks/>
    </div>
  );
}

export default App;
