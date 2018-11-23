import React, {Fragment} from 'react';
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
    FunctionField,
    SelectInput,
    Datagrid,
    FormDataConsumer,
    ReferenceField,
    FieldTitle,
    ArrayField,
    ResettableTextField,
} from 'react-admin'; // eslint-disable-line import/no-unresolved

import {withStyles} from '@material-ui/core/styles';
import TableFormIterator from '../forms/TableFormIterator'

import CategorySelector from '../inputs/CategorySelector'
import {connect} from 'react-redux'

import MuiTextField from '@material-ui/core/TextField';

import {Field, FieldArray, reduxForm, formValueSelector} from 'redux-form'
import PlainTextInput from '../inputs/PlainTextInput'
import PlainTextField from '../inputs/PlainTextField'
import InputLikeTextField from '../inputs/InputLikeTextField'
import queryString from 'query-string'

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
    <span>我是一个运营字段 {content} {rank}</span>
)

MyComputedValue = connect(
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


            <TextInput source="rank" validate={required()} resettable label="rank"
                       formClassName={classes.inlineInputContainer}/>


            {/*<InputLikeTextField source="rank" label="rank"
                       formClassName={classes.inlineInputContainer}/>
*/}

            {/*<ReferenceField label="anotherPostRank" source="id" reference="posts" addLabel={false}*/}
            {/*record={{id: 2}} allowEmpty={true} linkType={false}*/}
            {/*basePath="posts" formClassName={classes.inlineInputContainer}>*/}
            {/*<InputLikeTextField source="rank" label="rank"/>*/}
            {/*</ReferenceField >*/}


            {/*<Fragment formClassName={classes.inlineInputContainer}>*/}
                {/*<ReferenceField source="id" reference="posts" addLabel={true}*/}
                                {/*record={{id: 0}} allowEmpty={true} linkType={false} //basePath="posts"*/}
                                {/*formClassName={classes.inlineInputContainer}>*/}

                    {/*<FunctionField render={record =>*/}
                        {/*( <MuiTextField value={record.title} InputProps={{*/}
                            {/*disableUnderline: true,*/}
                            {/*readOnly: true*/}
                        {/*}} label={*/}
                            {/*<FieldTitle*/}
                                {/*label="标题"*/}
                            {/*/>*/}

                        {/*}/>)}/>*/}

                {/*</ReferenceField>*/}
            {/*</Fragment>*/}


            <SelectInput source="anotherPostId" choices={[
            {id: '0', name: '0'},
            {id: '1', name: '1'},
            {id: '2', name: '2'},
            ]}/>


            <FormDataConsumer>
            {({formData, ...rest}) => (
            <ReferenceField source="id" reference="posts"
            record={{id: formData.anotherPostId}} allowEmpty={true} linkType={false}
            basePath="posts">
            <TextField source="rank"/>
            </ReferenceField>

            )
            }
            </FormDataConsumer>


            {/*<ArrayInput source="comments">*/}

            {/*<TableFormIterator disableAdd disableRemove>*/}
            {/*<TextInput source="content" style={{width: "10rem"}} label="content" addLabel={false}/>*/}
            {/*<TextInput source="content" style={{width: "30rem"}} label="content" addLabel={false}/>*/}
            {/*<TextInput source="content" style={{width: "30rem"}} label="content" addLabel={false}/>*/}
            {/*<TextField source="content" style={{width: "10rem"}} label="content" addLabel={false}*/}
            {/*notReplaceSource={true}/>*/}

            {/*<PlainTextField source="content" style={{width: "30rem"}} label="content" addLabel={false}*/}
            {/*notReplaceSource={true}/>*/}


            {/*</TableFormIterator>*/}

            {/*</ArrayInput>*/}


        </SimpleForm>
    </Edit>)

};

const mapStateToProps = (state, props) => {
    const parsed = queryString.parse(props.location.search);

    return {
        forOperation: parsed.forOperation == 'true',
    };
};


export default withStyles(styles)(connect(
    mapStateToProps
)(PostEdit));
