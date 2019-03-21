import React from 'react';
import Nav from '../components/nav/nav';
import './styles.scss';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Nav />
        <h1>Form Here</h1>
      </React.Fragment>
    );
  }

}

export default App;
