import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import {Admin, Resource} from 'react-admin';
import fakeDataProvider from 'ra-data-fakerest';

import posts from './posts';

const dataProvider = fakeDataProvider({
    posts: [
        {
            id: 0,
            title: 'Hello, world!',
            rank: 1,
            comments: [{id: 0, content: "comment 0 of 0", rank: 1}, {id: 1, content: "comment 1 of 0", rank: 3}, {id: 4, content: "comment 3 of 0", rank: 5}]
        },
        {
            id: 1,
            title: 'FooBar',
            rank: 2,
            comments: [{id: 2, content: "comment 0 of 1", rank: 2}, {id: 3, content: "comment 1 of 2", rank: 4}]
        },
    ],

})

const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="posts" {...posts} />
    </Admin>
);


export default App;
