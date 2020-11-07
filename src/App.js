import {fetchUtils, Admin, Resource, EditGuesser } from 'react-admin';
import { ProductsCreate, ProductsEdit, ProductsList } from './products';
import { AddressesList } from './addresses';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import jsonServerProvider from 'ra-data-json-server';
import dataProvider from './dataProvider';

// const httpClient = (url, options = {}) => {
//   if (!options.headers) {
//       options.headers = new Headers({ Accept: 'application/json' });
//   }
//   // add your own headers here
//   options.headers.set('access-control-allow-origin', '*'); //<----see here
//   return fetchUtils.fetchJson(url, options);
// };
// const dataProvider = jsonServerProvider('https://localhost:44382/api', httpClient);

function App() {
  return (
    <div className="App">
      <Admin dataProvider={dataProvider}>
          <Resource name="Products" list={ProductsList} edit={ProductsEdit}/> 
          <Resource name="Addresses" list={AddressesList} edit={EditGuesser} /> 
      </Admin>
    </div>
  );  
}

export default App;
