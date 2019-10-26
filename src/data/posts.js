import React from 'react';
import { List,
     Datagrid, 
     TextField,
     EditButton,
     ReferenceField,
     ReferenceInput,
     DisabledInput,
     SimpleForm,
     Edit,
     SelectInput,
     TextInput, 
     LongTextInput, 
     Create } from 'react-admin';
 
//display posts
export const PostList = props => (
    <List {...props}>
        <Datagrid >
            <TextField source="id" />
            <ReferenceField source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>            
            <TextField source="title" />
            <EditButton />
        </Datagrid>
    </List>
);

//Edit post
export const PostEdit = props => (
    <Edit {...props}>
        <SimpleForm>
           <DisabledInput source="id" />
            <ReferenceInput source="userId" reference="users"> 
               <SelectInput optionText="name" />
            </ReferenceInput> 
            <TextInput source="title" /> 
           <LongTextInput source="body" />
        </SimpleForm>
    </Edit>
);
 
//create post
export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <LongTextInput source="body" />
        </SimpleForm>
    </Create>
);