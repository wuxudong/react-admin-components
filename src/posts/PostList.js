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


const styles = {
//     table: {
//         border: "1px solid",
//     },
//     th: {
//         border: "1px solid",
//
//     },
//     td: {
//         border: "1px solid",
//
//     },
//     rowCell: {
//         border: "1px solid",
//         width:"40px",
//     },
//     headerCell: {
//         border: "1px solid",
//     },
};

const categories = [
    {
        name: "水果生鲜",
        sub: [
            {
                name: "水果",
                sub: [
                    {
                        id: 1, name: "苹果"
                    },
                    {
                        id: 2, name: "梨"
                    },
                    {
                        id: 3, name: "火龙果"
                    }]
            },
            {
                name: "生鲜",
                sub: [
                    {
                        id: 4, name: "鲤鱼"
                    },
                    {
                        id: 5, name: "鲫鱼"
                    },
                    {
                        id: 6, name: "对虾"
                    }]
            }


        ]
    },
    {
        name: "手机数码",
        sub: [
            {
                name: "手机",
                sub: [
                    {
                        id: 7, name: "iphone"
                    },
                    {
                        id: 8, name: "华为"
                    },
                    {
                        id: 9, name: "vivo"
                    }]
            },
            {
                name: "数码",
                sub: [
                    {
                        id: 10, name: "相机"
                    },
                    {
                        id: 11, name: "mp3"
                    }]
            }
        ]
    }
]


const PostFilter = (props) => (
    <Filter {...props}>
        <CategorySelector source="categoryId" label="分类" categories={categories} alwaysOn/>
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

