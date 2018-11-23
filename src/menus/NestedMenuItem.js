import React, {cloneElement, Children, Component, Fragment} from 'react';
import Collapse from '@material-ui/core/Collapse';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import {MenuItemLink} from 'react-admin';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import LabelIcon from '@material-ui/icons/Label';


class NestedMenuItem extends React.Component {

    state = {
        open: false
    }

    handleClick = () => {
        this.setState({open: !this.state.open});
    };

    render() {
        let {icon, text, children, key, ...rest} = this.props
        console.log(text)
        return (
            <div>
                <MenuItemLink
                    key={key}
                    to={"#"}
                    primaryText={`${text} ${this.state.open ? "收起" : "展开"}`}
                    leftIcon={icon ? icon : < LabelIcon/>}
                    onClick={this.handleClick}
                />

                {this.state.open ? Children.map(
                    children, child => (
                        React.cloneElement(child, {
                            style: {marginLeft: "1rem"}
                        })
                    )
                    )
                    : null
                }
            </div>
        )
    }
}

export default NestedMenuItem