import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { Footer } from './layouts/NavbarAndFooter/Footer';
import { HomePage } from './layouts/Homepage/HomePage';
import { SearchBooksPage } from './layouts/SearchBooksPage/SearchBooksPage';
import { Redirect, Route, Switch } from 'react-router-dom';


export const App = () => {
  return (
    <div className='d-flex flex-column min-vh-100'>
      <Navbar />
      <div className='flex-grow-1'>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/luv2learn'></Redirect>
          </Route>
          <Route path='/luv2learn'>
            <HomePage />
          </Route>
          <Route path='/search'>
            <SearchBooksPage />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

