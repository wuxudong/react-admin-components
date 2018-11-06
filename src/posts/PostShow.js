import React from 'react';
import {
    Show,
    TextField,
    SimpleShowLayout
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
