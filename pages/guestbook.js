import React from 'react';
import fetch from 'isomorphic-unfetch';
import PropTypes from 'prop-types';
import Nav from '../components/nav/nav';
import Feed from '../components/feed/feed';
import '../components/feed/feed.scss';

class Guestbook extends React.Component {

  static async getInitialProps() {
    const res = await fetch('http://localhost:3000/api/guestbook');
    const data = await res.json();
    return { data };
  }

  render() {
    const { data } = this.props;
    return (
      <React.Fragment>
        <Nav currentPath="guestbook" />
        <Feed messages={data.posts} />
      </React.Fragment>
    );
  }

}

export default Guestbook;

Guestbook.defaultProps = {
  data: null,
};

Guestbook.propTypes = {
  data: PropTypes.shape(PropTypes.shape),
};
