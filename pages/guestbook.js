import React from 'react';
import Nav from '../components/nav/nav';
import Feed from '../components/feed/feed';
import '../components/feed/feed.scss';

class Guestbook extends React.Component {

  constructor(props) {
    super(props);
    this.state = { messages: [] };
  }

  componentDidMount() {
    /* fetch messages only once on mount */
    fetch('/api/guestbook')
      .then(res => res.json())
      .then(data => this.setState({ messages: data.posts }));
  }

  render() {
    const { messages } = this.state;
    return (
      <React.Fragment>
        <Nav currentPath="guestbook" />
        <Feed messages={messages} />
      </React.Fragment>
    );
  }

}

export default Guestbook;
