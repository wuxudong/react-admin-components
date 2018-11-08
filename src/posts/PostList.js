import React, {Children, Fragment, cloneElement} from 'react';
import {
    Datagrid,
    EditButton,
    List,
    ShowButton,
    TextField,
    TextInput,
    DisabledInput,
    Filter
} from 'react-admin'; // eslint-disable-line import/no-unresolved

import PostQuickEditButton from './PostQuickEditButton'
import CategorySelector from '../inputs/CategorySelector'

import compose from 'recompose/compose';
import {withStyles} from '@material-ui/core/styles';
import NodeForm from '../forms/NodeForm'


const styles = {
};

const PostFilter = (props) => (
    <Filter {...props}>
        <CategorySelector source="category" label="分类" alwaysOn/>
    </Filter>
);


const PostList = ({classes, ...props}) => (
    <List
        {...props} bulkActionButtons={false} filters={<PostFilter/>}
    >
        <Datagrid>
            <TextField source="id"  />
            <TextField source="title" label="标题"/>
            <TextField source="rank" label="优先级"/>
            <TextField source="rank" label="优先级"/>
            <TextField source="rank" label="优先级"/>
            <TextField source="rank" label="优先级"/>
            <TextField source="rank" label="优先级"/>
            <TextField source="rank" label="优先级"/>


            <EditButton/>
            <PostQuickEditButton/>
            <ShowButton/>

            {/*<NodeForm>*/}
            {/*<DisabledInput source="id" />*/}
            {/*<TextInput source="title"/>*/}
            {/*<TextInput source="rank"/>*/}

            {/*</NodeForm>*/}
        </Datagrid>
    </List>
);

export default compose(
    withStyles(styles)
)(PostList);

