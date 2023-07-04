// styles
import './Navbar.css';

function Navbar ({ usersLength }) {
  return (
    <div>
      <div className="navbar">
        <div className="navbar-container container">
          <h1 className="navbar-logo">Cuser</h1>
          <h3 className="navbar-counter"> {usersLength > 0 ? 'You have: ' + usersLength + ' user(s)' : 'No Users Yet'} </h3>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
