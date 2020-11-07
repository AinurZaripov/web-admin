// in src/users.js
import * as React from "react";
import { List, Datagrid, TextField, EditButton } from 'react-admin';

export const AddressesList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <EditButton />
        </Datagrid>
    </List>
);