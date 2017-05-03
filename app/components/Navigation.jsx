var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = (props) => {
  return (
    <nav>
      <ul className="tabs">
        <li className="tab">
          <IndexLink
            to="/"
            activeClassName="active" 
            className="tab__link">Recipes</IndexLink>
        </li>
        <li className="tab">
          <Link
            to="/add"
            activeClassName="active"
            className="tab__link">Add New</Link>
        </li>
      </ul>
    </nav>
  );
};

module.exports = Navigation;