// in src/users.js
import * as React from "react";
import { List, Datagrid, TextField, TextInput, Create, Edit, SimpleForm, EditButton, ReferenceField  } from 'react-admin';

export const UsersList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="lastName" />
            <TextField source="firstName" />
            <TextField source="middleName" />
            <TextField source="role" />
            <EditButton />
        </Datagrid>
    </List>
);

export const UsersEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="lastName" />
            <TextInput source="firstName" />
            <TextInput source="middleName" />
            <TextInput source="role" />
        </SimpleForm>
    </Edit>
);

export const UsersCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="lastName" />
            <TextInput source="firstName" />
            <TextInput source="middleName" />
            <TextInput source="role" />
        </SimpleForm>
    </Create>
);