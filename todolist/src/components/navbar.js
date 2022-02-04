import React from 'react';
import PropTypes from 'prop-types';


export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="#">ShoppingWebsite</a>
    
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="{% url 'home'%}">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="{% url 'cart'%}">Cart</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Settings
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="{% url 'profile'%}">Profile</a>
            <a className="dropdown-item" href="{% url 'editprofile'%}">Edit profile</a>
            <a className="dropdown-item" href="{% url 'changepassword'%}">Change password</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="{% url 'orders'%}">Orders</a>
            <a className="dropdown-item" href="{% url 'addproducts'%}">Add Product</a>
            <a className="dropdown-item" href="{% url 'addcategory'%}">Add Category</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="{% url 'login' %}">Logout</a>
            <a className="dropdown-item" href="{% url 'login' %}">Login</a>
            <a className="dropdown-item" href="{% url 'signup' %}">Signup</a>
          </div>
        </li>
      </ul>
      <form method="get" className="form-inline my-2 my-lg-0" action="/search/">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" name="q" aria-label="Search"/>
        <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
</nav>

  );
}

Navbar.propTypes = {title: PropTypes.string,
                    aboutText: PropTypes.string}

Navbar.defaultProps = {
    title: "Todolist",
    aboutText: "About this page"
}