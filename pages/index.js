import React from 'react';
import Nav from '../components/nav/nav';
import Form from '../components/form/form';
import './styles.scss';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Nav currentPath="home" />
        <Form />
      </React.Fragment>
    );
  }

}

export default App;
