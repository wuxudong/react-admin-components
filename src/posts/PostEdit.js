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
    BooleanInput,
    ImageField,
    Toolbar,
    SaveButton,
    FormDataConsumer
} from 'react-admin'; // eslint-disable-line import/no-unresolved

import {withStyles} from '@material-ui/core/styles';
import TableFormIterator from '../forms/TableFormIterator'

import CategorySelector from '../inputs/CategorySelector'
import { connect } from 'react-redux'

import { Field, FieldArray, reduxForm, formValueSelector } from 'redux-form'
import PlainTextInput from '../inputs/PlainTextInput'
import PlainTextField from '../inputs/PlainTextField'

const styles = {
    inlineInputContainer: {display: 'inline-flex', marginRight: '1rem', width: "10rem"},
};

const ShortTextInput = (props) => <TextInput {...props} style={styles.cellInput}/>


class PostCreateToolbar extends React.Component {

    mySubmit(param) {

    }

    render() {
        return <Toolbar {...this.props} >
            <SaveButton
                label="post.action.save_and_show"
                redirect="show"
                submitOnEnter={true}

            />

        </Toolbar>
    }
}

const selector = formValueSelector('record-form')
let MyComputedValue = ({content, rank}) => (
    <span>{content} {rank}</span>
)

MyComputedValue =  connect(
    (state, props) => ({
        content: selector(state, `${props.member}.content`),
        rank: selector(state, `${props.member}.rank`),
    })
)(MyComputedValue)

const PostEdit = ({classes, ...props}) => {
    return (<Edit {...props}>
        <SimpleForm>

            <TextInput source="title" validate={required()} resettable label="标题"
                       formClassName={classes.inlineInputContainer}/>

            <CategorySelector source="category" label="分类" alwaysOn/>

            <BooleanInput source="statusAsBoolean"/>


            <ImageInput source="image" label="图片" placeholder="选择图片" accept="image/*" multiple={false}
                        formClassName={classes.inlineInputContainer}>
                <ImageField source="src"/>
            </ImageInput>

            <TextField source="title" formClassName={classes.inlineInputContainer}/>
            <TextField source="rank" formClassName={classes.inlineInputContainer}/>


            <ArrayInput source="comments" label="评论">
                <TableFormIterator disableAdd>
                    <PlainTextInput source="content" label="内容" style={{marginRight: "5px", marginLeft: "5px"}}/>
                    <PlainTextInput source="rank" label="优先级" style={{marginRight: "5px", marginLeft: "5px", width:"3rem"}}/>
                    <PlainTextField source="rank" label="优先级" notReplaceSource={true} style={{display:"inline-block" ,width:"9rem"}}/>


                    <MyComputedValue label="复合字段"/>
                </TableFormIterator>
            </ArrayInput>

        </SimpleForm>
    </Edit>)

};

export default withStyles(styles)(PostEdit);
