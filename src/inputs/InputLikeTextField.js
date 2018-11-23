import React from 'react';
import {FieldTitle,} from 'react-admin'; // eslint-disable-line import/no-unresolved
import MuiTextField from '@material-ui/core/TextField';
import get from 'lodash/get';

const InputLikeTextField = (props) => {
    const {
        isRequired,
        label,
        resource,
        record,
        source,
        ...rest
    } = props;


    const value = get(record, source);
    return (

        <MuiTextField value={value} InputProps={{
            disableUnderline: true,
            readOnly: true
        }} label={
            label === false ? (
                label
            ) : (
                <FieldTitle
                    label={label}
                    source={source}
                    resource={resource}
                    isRequired={isRequired}
                />
            )
        } {...rest}/>)

}
export default InputLikeTextField;
