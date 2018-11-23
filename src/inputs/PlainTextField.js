import React from 'react';
import {
    TextField,
} from 'react-admin'; // eslint-disable-line import/no-unresolved



const TextFieldInTableForm = ({...rest}) => (
    <TextField addLabel={false} {...rest} />
);
export default TextFieldInTableForm;
