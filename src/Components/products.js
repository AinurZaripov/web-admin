// in src/users.js
import * as React from "react";
import { List, Datagrid, TextField, TextInput, Create, Edit,
    SelectInput, SimpleForm, EditButton, ReferenceField, ReferenceInput,
    Filter  } from 'react-admin';
const PostTitle = ({ record }) => 
{
    return <span>Product name: {record ? `"${record.name}"` : ''}</span>;
};

const ProductFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="id" alwaysOn />
        <ReferenceInput label="Name" source="addressId" reference="addresses" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

export const ProductsList = props => (
    <List filters={<ProductFilter />} {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="description" />
            <TextField source="price" />
            <TextField source="addressId" />
            <ReferenceField source="addressId" reference="addresses">
                <TextField source="name" />
            </ReferenceField>
            {/* <TextField source="addressId" />
            <TextField source="address" /> */}
            <EditButton />
        </Datagrid>
    </List>
);

export const ProductsEdit = props => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="description" />
            <TextInput source="price" />
            <ReferenceInput source="addressId" reference="addresses">
                <SelectInput optionText="name" />
            </ReferenceInput>
            {/* <TextInput source="addressId" /> */}
        </SimpleForm>
    </Edit>
);

export const ProductsCreate = props => (
    <Create title={<PostTitle />} {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="description" />
            <TextInput source="price" />
            <ReferenceInput source="addressId" reference="addresses">
                <SelectInput optionText="name" />
            </ReferenceInput>
            {/* <TextInput source="addressId" /> */}
        </SimpleForm>
    </Create>
);