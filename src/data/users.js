import React from 'react';
import { List, Datagrid, TextField,EmailField } from 'react-admin';
import MyUrl from './myUrl'
 const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">         
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="phone" />
            <MyUrl source="website" />             
            <TextField source="company.name" />
        </Datagrid>
    </List>
);

export default UserList;