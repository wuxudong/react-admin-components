import React, { Children, Fragment, cloneElement } from 'react';
import {
    Datagrid,
    EditButton,
    List,
    ShowButton,
    TextField,
    TextInput,
    DisabledInput
} from 'react-admin'; // eslint-disable-line import/no-unresolved

import PostQuickEditButton from './PostQuickEditButton'
import NodeForm from '../forms/NodeForm'

const PostList = ({ classes, ...props }) => (
    <List
        {...props}
    >
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="rank" />

            <EditButton/>
            <PostQuickEditButton />
            <ShowButton/>

            {/*<NodeForm>*/}
                {/*<DisabledInput source="id" />*/}
                {/*<TextInput source="title"/>*/}
                {/*<TextInput source="rank"/>*/}

            {/*</NodeForm>*/}
        </Datagrid>
    </List>
);

export default PostList;
