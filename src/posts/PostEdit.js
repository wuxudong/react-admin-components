import React from 'react';
import {
    Edit,
    SimpleForm,
    TextInput,
    required,
    ArrayInput,
    SimpleFormIterator
} from 'react-admin'; // eslint-disable-line import/no-unresolved

import TableFormIterator from '../forms/TableFormIterator'

const PostEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="title" validate={required()} resettable />
            <TextInput source="rank" validate={required()} resettable />

            <ArrayInput source="comments">
                <TableFormIterator disableAdd>
                    <TextInput source="content" />
                    <TextInput source="rank" />
                </TableFormIterator>
            </ArrayInput>

        </SimpleForm>
    </Edit>
);

export default PostEdit;
