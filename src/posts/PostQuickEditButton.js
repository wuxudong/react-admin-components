import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import Drawer from '@material-ui/core/Drawer';
import {withStyles} from '@material-ui/core/styles';

import IconImageEye from '@material-ui/icons/RemoveRedEye';
import IconKeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import {Button, SimpleForm, TextInput, SimpleShowLayout, TextField, required, EditController} from 'react-admin';


const styles = theme => ({
    field: {
        // These styles will ensure our drawer don't fully cover our
        // application when teaser or title are very long
        '& span': {
            display: 'inline-block',
            maxWidth: '20em'
        }
    }
});


const PostQuickEditView = ({classes, ...props}) => {

    return (

        <EditController {...props} match={{}} location={{}} >
            {({resource, record, save, basePath, version}) => (

                <SimpleForm resource={resource} record={record} save={save} basePath={basePath} version={version} form={'list-inline-form' + record.id}
                            redirect={false}>
                    <TextField source="id"/>
                    <TextInput source="title" validate={required()} resettable/>
                    <TextInput source="rank" validate={required()} resettable/>
                </SimpleForm>)}
        </EditController>
    )
};


const mapStateToProps = (state, props) => {
    return {
        // Get the record by its id from the react-admin state.
        record: state.admin.resources[props.resource]
            ? state.admin.resources[props.resource].data[props.id]
            : null,
        version: state.admin.ui.viewVersion
    }
};


const PostQuickEdit = connect(mapStateToProps, {})(
    withStyles(styles)(PostQuickEditView)
);

class PostQuickEditButton extends React.Component {
    state = {showPanel: false};

    handleClick = () => {
        this.setState({showPanel: true});
    };

    handleCloseClick = () => {
        this.setState({showPanel: false});
    };

    render() {
        const {showPanel} = this.state;
        const {record} = this.props;
        return (
            <Fragment>
                <Button onClick={this.handleClick} label="Quick Edit">
                    <IconImageEye/>
                </Button>

                {showPanel? <Drawer
                    anchor="right"
                    open={true}
                    onClose={this.handleCloseClick}
                    >
                    <div>
                    <Button label="Close" onClick={this.handleCloseClick}>
                    <IconKeyboardArrowRight/>
                    </Button>
                    </div>
                    <PostQuickEdit id={record.id.toString() } basePath="/posts" resource="posts"/>
                    </Drawer>: null}

            </Fragment>
        );
    }
}

export default connect()(PostQuickEditButton);