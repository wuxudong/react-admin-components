import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

import {
    Create,
    SimpleForm,
    TextInput,
    ReferenceInput,
    AutocompleteInput,
    FormDataConsumer,
    ReferenceField,
    TextField,
    FunctionField
} from 'react-admin'; // eslint-disable-line import/no-unresolved

const ReplenishmentCreate = ({...props}) => (
    <Create {...props}>
        <SimpleForm
        >
            <ReferenceInput label="Tag" source="tagId" reference="tags">
                <AutocompleteInput optionText="name"/>
            </ReferenceInput>


            <FormDataConsumer>
                {({formData, record, ...rest}) => (

                    <ReferenceField source="id" reference="tags"
                                    record={{id: formData.tagId}} allowEmpty={true} linkType={false}
                                    basePath="tags">

                        <TextField source="remark"/>

                    </ReferenceField>

                )}
            </FormDataConsumer>

            <FormDataConsumer>
                {({formData, record, ...rest}) => (

                    <ReferenceInput label="Post" source="postId" reference="posts" filter={{tagId: formData.tagId}}>
                        <AutocompleteInput optionText="title"/>
                    </ReferenceInput>

                )}
            </FormDataConsumer>

            <FormDataConsumer>
                {({formData, record, ...rest}) => (

                    <Fragment>
                        <ReferenceField source="id" reference="posts"
                                        record={{id: formData.postId}} allowEmpty={true} linkType={false}
                                        basePath="posts">

                            <TextField source="rank"/>
                        </ReferenceField>
                        <ReferenceField source="id" reference="posts"
                                        record={{id: formData.postId}} allowEmpty={true} linkType={false}
                                        basePath="posts">
                            <FunctionField
                                render={record => (`${record.category.l1}-${record.category.l2}-${record.category.l3}`)}/>
                        </ReferenceField>
                    </Fragment>

                )}
            </FormDataConsumer>

            <TextInput source="content"/>


        </SimpleForm>
    </Create>
);

export default ReplenishmentCreate;
