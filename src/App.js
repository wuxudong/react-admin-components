import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import {Admin, Resource} from 'react-admin';

import chineseMessages from 'ra-language-chinese';

import {createMuiTheme} from '@material-ui/core/styles';

import dataProvider from './dataProvider'


import posts from './posts';

const messages = {
    'cn': chineseMessages
};

const i18nProvider = locale => messages[locale];




const myTheme = createMuiTheme({
    typography: {
        // In Japanese the characters are usually larger.
        fontSize: 6,
        htmlFontSize: 10,
    },

    overrides: {
        MuiTableCell: {
            root: {
                border: "1px solid",
            },
            body: {
                border: "1px solid",
            },
            head: {
                border: "1px solid",
            }
        },

        MuiInput: {
            root: {
                // width: "80px"
            }
        },

        MuiFormControl: {
            root: {
                // flexDirection: "row",

            }
        },

        MuiInputLabel: {
            root: {
                color: "#000f",
                padding: "0px 0 0px"
            }
        },

        Labeled: {
            label: {
                padding: "0px 0 0px"
            }
        },


        MuiCard: {
            root: {
                overflow: "auto"
            }
        }
    },
});

const App = () => (
    <Admin dataProvider={dataProvider} locale="cn" i18nProvider={i18nProvider} theme={myTheme}>
        <Resource name="posts" {...posts} />
    </Admin>
);


export default App;
