import React, { Children, Fragment, cloneElement } from 'react';
import {
    Datagrid,
    EditButton,
    List,
    ShowButton,
    TextField,
} from 'react-admin'; // eslint-disable-line import/no-unresolved

import PostQuickEditButton from './PostQuickEditButton'

const PostList = ({ classes, ...props }) => (
    <List
        {...props}
    >
        <Datagrid>
            <TextField source="title" />
            <TextField source="rank" />

            <EditButton/>
            <PostQuickEditButton />
            <ShowButton/>
        </Datagrid>
    </List>
);

export default PostList;
