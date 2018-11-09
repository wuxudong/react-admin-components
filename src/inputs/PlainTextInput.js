import React from 'react';
import {Field} from 'redux-form';


const PlainTextInput = ({source, ...rest}) => (
    <Field name={source} component="input" type="text" {...rest}/>
);
export default PlainTextInput;
