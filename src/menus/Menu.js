import React, {cloneElement, Children, Component, Fragment} from 'react';
import Collapse from '@material-ui/core/Collapse';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import {MenuItemLink} from 'react-admin';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import LabelIcon from '@material-ui/icons/Label';

import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import NestedMenuItem from "./NestedMenuItem";


class Menu extends React.Component {
    render() {

        return (

            <div>

                <NestedMenuItem text="top1">

                    <MenuItemLink
                        key={"admin/city-group"}
                        to={`/admin/city-group`}
                        primaryText={'城市团管理1'}
                        leftIcon={< LabelIcon/>}
                    />

                    <MenuItemLink
                        key={"admin/city-group"}
                        to={`/admin/city-group`}
                        primaryText={'城市团管理2'}
                        leftIcon={< LabelIcon/>}
                    />

                </NestedMenuItem>


                <MenuItemLink
                    key={"admin/city-group"}
                    to={`/admin/city-group`}
                    primaryText={'城市团管理3'}
                    leftIcon={< LabelIcon/>}
                />

                <NestedMenuItem text="top2">
                    <MenuItemLink
                        key={"admin/city-group"}
                        to={`/admin/city-group`}
                        primaryText={'城市团管理4'}
                        leftIcon={< LabelIcon/>}
                    />


                </NestedMenuItem>

            </div>
        )
    }


}

export default Menu