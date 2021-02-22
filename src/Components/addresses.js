// in src/users.js
import * as React from "react";
import { List, Datagrid, TextField, TextInput, Create, Edit, SimpleForm,
     EditButton, SelectInput, ReferenceInput, Filter  } from 'react-admin';

const AddressesTitle = ({ record }) => 
{
    return <span>Address name: {record ? `"${record.name}"` : ''}</span>;
};

const AddressesFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="id" alwaysOn />
    </Filter>
);

export const AddressesList = props => (
    <List filters={<AddressesFilter/>} {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <EditButton />
        </Datagrid>
    </List>
);

export const AddressesEdit = props => (
    <Edit title={<AddressesTitle/>} {...props}>
        <SimpleForm>
            {/* <TextInput disabled source="id" /> */}
            <TextInput source="name" />
        </SimpleForm>
    </Edit>
);

export const AddressesCreate = props => (
    <Create title={<AddressesTitle/>} {...props}>
        <SimpleForm>
            {/* <TextInput disabled source="id" /> */}
            <TextInput source="name" />
        </SimpleForm>
    </Create>
);