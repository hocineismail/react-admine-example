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
     Create,
     Filter,
     SimpleList,
     Responsive } from 'react-admin';

     
//Set Filter "search"  
const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);
   
//display posts
export const PostList = props => (
    <List filters={<PostFilter />} {...props}>
         <Responsive
            small={
                <SimpleList
                    primaryText={record => record.title}
                    secondaryText={record => `${record.views} views`}
                    tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
                />
            }
            medium={
                <Datagrid>
                    <TextField source="id" />
                    <ReferenceField label="User" source="userId" reference="users">
                        <TextField source="name" />
                    </ReferenceField>
                    <TextField source="title" />
                    <TextField source="body" />
                    <EditButton />
                </Datagrid>
            }
        />
    </List>
);


//Set the Title of post
const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};  


//Edit post
export const PostEdit = props => (
    <Edit title={<PostTitle />} {...props}>
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

