import React from 'react';
import {
    Edit,
    SimpleForm,
    TextInput,
    required,
    ArrayInput,
    SimpleFormIterator,
    TextField,
    DisabledInput,
    ImageInput,
    ImageField,
} from 'react-admin'; // eslint-disable-line import/no-unresolved

import {withStyles} from '@material-ui/core/styles';
import TableFormIterator from '../forms/TableFormIterator'

const styles = {
    inlineInputContainer: {display: 'inline-flex', marginRight: '1rem', width: "10rem"},
};

const ShortTextInput = (props) => <TextInput {...props} style={styles.cellInput}/>

const PostEdit = ({classes, ...props}) => {
    return (<Edit {...props}>
        <SimpleForm>

            <TextInput source="title" validate={required()} resettable label="标题"
                       formClassName={classes.inlineInputContainer}/>
            <TextInput source="rank" validate={required()} resettable label="优先级"
                       formClassName={classes.inlineInputContainer}/>
            <TextInput source="rank" validate={required()} resettable label="优先级"
                       formClassName={classes.inlineInputContainer}/>
            <TextInput source="rank" validate={required()} resettable label="优先级"
                       formClassName={classes.inlineInputContainer}/>

            <TextInput source="title" validate={required()} resettable label="标题"
                       formClassName={classes.inlineInputContainer}/>
            <TextInput source="rank" validate={required()} resettable label="优先级"
                       formClassName={classes.inlineInputContainer}/>



            <ImageInput source="image" label="图片" placeholder="选择图片"  accept="image/*" multiple={false} formClassName={classes.inlineInputContainer}>
                <ImageField source="src"/>
            </ImageInput>

            <TextField source="title" formClassName={classes.inlineInputContainer}/>
            <TextField source="title" formClassName={classes.inlineInputContainer}/>

            <TextField source="title" formClassName={classes.inlineInputContainer}/>
            <TextField source="title" formClassName={classes.inlineInputContainer}/>

            <TextField source="title" formClassName={classes.inlineInputContainer}/>
            <TextField source="rank" formClassName={classes.inlineInputContainer}/>


            <ArrayInput source="comments" label="评论">
                <TableFormIterator disableAdd>
                    <TextInput source="content" label="内容"/>
                    <ShortTextInput source="rank" label="优先级"/>
                    <ShortTextInput source="rank" label="优先级"/>
                    <ShortTextInput source="rank" label="优先级"/>
                    <ShortTextInput source="rank" label="优先级"/>
                    <ShortTextInput source="rank" label="优先级"/>
                    <ShortTextInput source="rank" label="优先级"/>
                    <ShortTextInput source="rank" label="优先级"/>
                    <ShortTextInput source="rank" label="优先级"/>
                    <ShortTextInput source="rank" label="优先级"/>
                    <ShortTextInput source="rank" label="优先级"/>
                    <ShortTextInput source="rank" label="优先级"/>
                    <ShortTextInput source="rank" label="优先级"/>
                    <ShortTextInput source="rank" label="优先级"/>
                    <ShortTextInput source="rank" label="优先级"/>
                </TableFormIterator>
            </ArrayInput>

        </SimpleForm>
    </Edit>)

};

export default withStyles(styles)(PostEdit);
