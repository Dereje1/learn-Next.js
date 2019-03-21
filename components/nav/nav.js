import Link from 'next/link';
import './nav.scss';

const Nav = () => (
  <div className="nav">
    <Link href="/">
      <button type="button" className="navbuttons">Home</button>
    </Link>
    <Link href="/guestbook">
      <button type="button" className="navbuttons">Guest Book</button>
    </Link>
  </div>
);

export default Nav;
