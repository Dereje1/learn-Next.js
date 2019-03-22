import React from 'react';
import Nav from '../components/nav/nav';
import Form from '../components/form/form';
import './index.scss';
// scsss will not load without refresh unless loaded into index.
import '../components/feed/feed.scss';

const App = () => (
  <React.Fragment>
    <Nav currentPath="home" />
    <Form />
  </React.Fragment>
);

export default App;
