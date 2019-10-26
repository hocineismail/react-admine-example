import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import UserList from './data/users'
const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
  
function App() {
 
  return (
    <div className="App">
       <Admin dataProvider={dataProvider}>
          <Resource name="users" list={UserList}   />
       </Admin>
    </div>
  );
}

export default App;
