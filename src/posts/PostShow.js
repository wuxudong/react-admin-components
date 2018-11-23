import React from 'react';
import {Link} from 'react-router-dom'
import {
    Show,
    TextField,
    SimpleShowLayout,
    FunctionField,
    ArrayField,
    Datagrid
} from 'react-admin'; // eslint-disable-line import/no-unresolved


const PostShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id"/>
            <TextField source="title"/>
            <TextField source="rank"/>



        </SimpleShowLayout>
    </Show>
);

export default PostShow;
