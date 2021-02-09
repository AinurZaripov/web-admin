import {fetchUtils, Admin, Resource, EditGuesser } from 'react-admin';
import { ProductsCreate, ProductsEdit, ProductsList } from './Components/products';
import { AddressesList, AddressesEdit, AddressesCreate } from './Components/addresses';
import { UsersList, UsersEdit, UsersCreate } from './Components/users';
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

const App = () => (
  <Admin dataProvider={dataProvider}>
          <Resource name="Products" list={ProductsList} edit={ProductsEdit} create={ProductsCreate}/> 
          <Resource name="addresses" list={AddressesList} edit={AddressesEdit} create={AddressesCreate}/> 
          <Resource name="Users" list={UsersList} edit={UsersEdit} create={UsersCreate} /> 
      </Admin>
);  

export default App;
