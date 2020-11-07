// in src/users.js
import * as React from "react";
import { List, Datagrid, TextField, TextInput, Create, Edit, SimpleForm, EditButton, ReferenceField  } from 'react-admin';

export const ProductsList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="description" />
            <TextField source="price" />
            <ReferenceField source="addressId" reference="Address">
                <TextField source="id" />
            </ReferenceField>
            {/* <TextField source="addressId" />
            <TextField source="address" /> */}
            <EditButton />
        </Datagrid>
    </List>
);

export const ProductsEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" />
            <TextInput source="description" />
            <TextInput source="price" />
            <TextField source="addressId" />
            <TextField source="address" />

        </SimpleForm>
    </Edit>
);

export const ProductsCreate = props => (
    <Create {...props}>
        <SimpleForm>
        <TextInput source="id" />
            <TextInput source="name" />
            <TextInput source="description" />
            <TextInput source="price" />
            <TextField source="addressId" />
            <TextField source="address" />
        </SimpleForm>
    </Create>
);