import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import {Admin, Resource} from 'react-admin';
import fakeDataProvider from 'ra-data-fakerest';
import chineseMessages from 'ra-language-chinese';

import {createMuiTheme} from '@material-ui/core/styles';


import posts from './posts';

const messages = {
    'cn': chineseMessages
};

const i18nProvider = locale => messages[locale];


const dataProvider = fakeDataProvider({
    posts: [
        {
            id: 0,
            title: 'Hello, world!',
            rank: 1,
            comments: [{id: 0, content: "comment 0 of 0", rank: 1}, {id: 1, content: "comment 1 of 0", rank: 3}, {
                id: 4,
                content: "comment 3 of 0",
                rank: 5
            }]
        },
        {
            id: 1,
            title: 'FooBar',
            rank: 2,
            comments: [{id: 2, content: "comment 0 of 1", rank: 2}, {id: 3, content: "comment 1 of 1", rank: 4}]
        },
        {
            id: 2,
            title: 'Woo',
            rank: 3,
            comments: [{id: 7, content: "comment 0 of 12", rank: 2}, {id: 8, content: "comment 1 of 2", rank: 4}]
        }
    ],
})


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
