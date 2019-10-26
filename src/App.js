import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import Dashboard from './dashboard/dashboard';
import authProvider from './authProvider/authProvider';

import UserList from './data/users'
import { PostList, PostEdit, PostCreate }  from './data/posts'

import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
  
function App() {
 
  return (
    <div className="App">
       <Admin dashboard={Dashboard}  
              authProvider={authProvider} 
              dataProvider={dataProvider}>

          <Resource name="users" 
                    list={UserList}  
                    icon={UserIcon} />
          <Resource 
                    name="posts" 
                    list={PostList}  
                    edit={PostEdit} 
                    create={PostCreate} 
                    icon={PostIcon}  />         
       </Admin>
    </div>
  );
}

export default App;
