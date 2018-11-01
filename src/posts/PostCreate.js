import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    Create,
    SimpleForm,
    TextInput,
} from 'react-admin'; // eslint-disable-line import/no-unresolved

const PostCreate = ({...props }) => (
    <Create {...props}>
        <SimpleForm
        >
            <TextInput source="title" />
            <TextInput source="rank" />
        </SimpleForm>
    </Create>
);

export default PostCreate;
