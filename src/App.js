import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import UserList from './data/users'
import { PostList, PostEdit, PostCreate }  from './data/posts'
const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
  
function App() {
 
  return (
    <div className="App">
       <Admin dataProvider={dataProvider}>
          <Resource name="users" list={UserList}   />
          <Resource name="posts" list={PostList}  edit={PostEdit}  create={PostCreate}  />         
       </Admin>
    </div>
  );
}

export default App;
