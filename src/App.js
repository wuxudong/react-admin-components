import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Admin, Resource } from 'react-admin';
import fakeDataProvider from 'ra-data-fakerest';

import posts from './posts';

const dataProvider = fakeDataProvider({
    posts: [
        { id: 0, title: 'Hello, world!', rank: 1 },
        { id: 1, title: 'FooBar', rank: 2},
    ],

})

const App = () => (
    <Admin dataProvider={dataProvider}>
      <Resource name="posts" {...posts} />
    </Admin>
);


export default App;
