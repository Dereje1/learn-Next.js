/* static Nav component present for both routes */
import Link from 'next/link';
import PropTypes from 'prop-types';
import './nav.scss';

const Nav = ({ currentPath }) => (
  <div className="nav">
    <Link href="/">
      <button type="button" className={currentPath === 'home' ? 'navbuttons active' : 'navbuttons'}>Home</button>
    </Link>
    <Link href="/guestbook">
      <button type="button" className={currentPath === 'guestbook' ? 'navbuttons active' : 'navbuttons'}>Guest Book</button>
    </Link>
  </div>
);

export default Nav;

Nav.propTypes = {
  currentPath: PropTypes.string.isRequired,
};
