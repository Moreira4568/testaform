import React from 'react';
import ReactDOM from 'react-dom';
import { Admin, Resource } from 'react-admin';

import dataProvider from './dataProvider';
import posts from './posts';
import comments from './comments';

import './styles.css';

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="posts" {...posts} />
    <Resource name="comments" {...comments} />
    <Resource name="tags" />
  </Admin>
);

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
