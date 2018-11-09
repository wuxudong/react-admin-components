import React from 'react';
import {
    TextField,
} from 'react-admin'; // eslint-disable-line import/no-unresolved



const TextFieldInTableForm = ({source, record, ...rest}) => (
    <span {...rest}>{record[source]}</span>
);
export default TextFieldInTableForm;
