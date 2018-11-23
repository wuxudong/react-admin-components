import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ReferenceField, TextField} from 'react-admin'

const style = {
    marginTop: "2rem",
    display: "inline-flex", marginRight: "2rem",
    flexDirection: "column",
    width: "20%"
}

class CustomRouteNoLayout extends Component {

    render() {
        return (
            <div>
                <h1 style={{textAlign: "center"}}>Posts</h1>
                <div style={{display: "block"}}>

                    <div style={style}><span>title</span> <span>content</span></div>

                    <ReferenceField addLabel={false}
                                    allowEmpty={true}
                                    basePath="posts"
                                    record={{id: 1, postId: 1}}
                                    reference="posts"
                                    source="postId"
                                    linkType={false}>
                        <TextField source="title" label="标题"/>

                    </ReferenceField>


                </div>

            </div>
        )
            ;
    }
}

const mapStateToProps = state => ({});

export default connect(
    mapStateToProps,
)(CustomRouteNoLayout);
