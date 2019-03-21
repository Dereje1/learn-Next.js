import React from 'react';
import Nav from '../components/nav/nav';

class Guestbook extends React.Component {

  constructor(props) {
    super(props);
    this.state = { messages: [] };
  }

  componentDidMount() {
    fetch('/api/guestbook')
      .then(res => res.json())
      .then(data => this.setState({ messages: data.posts }));
  }

  loadMessages = () => {
    const { messages } = this.state;
    if (!messages.length) return null;
    return messages.map(m => (
      <div key={m.name}>
        <span>{m.name}</span>
        <span>{m.message}</span>
      </div>
    ));
  }

  render() {
    return (
      <React.Fragment>
        <Nav currentPath="guestbook" />
        {this.loadMessages()}
      </React.Fragment>
    );
  }

}

export default Guestbook;
