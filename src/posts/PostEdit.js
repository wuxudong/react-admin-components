import React from 'react';
import {
    Edit,
    SimpleForm,
    TextInput,
    required,
} from 'react-admin'; // eslint-disable-line import/no-unresolved


const PostEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="title" validate={required()} resettable />
            <TextInput source="rank" validate={required()} resettable />
        </SimpleForm>
    </Edit>
);

export default PostEdit;
