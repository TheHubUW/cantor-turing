import React, { Component } from 'react';

export default class Navigaiton extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false, navClass: 'collapse navbar-collapse' };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    if (this.state.show) {
      this.setState({show: false, navClass: 'collapse navbar-collapse'});
    } else {
      this.setState({show: true, navClass: 'collapse show navbar-collapse'});
    }
  }

  render() {
  return (
   <nav className="navbar navbar-shrink navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div className="container">
      <a className="navbar-brand js-scroll-trigger" href="#page-top"><img className="mx-auto rounded-circle" height="40" width="40" src={require('../img/Hub_Logo.jpg')} alt="The Hub" /></a>

        <button className="navbar-toggler navbar-toggler-right" type="button" onClick={this.onClick} >
          Menu
          <i className="fa fa-bars"></i>
        </button>
        <div className={this.state.navClass} id="navbarResponsive">
          <ul className="navbar-nav ml-auto" onClick={this.onClick}>
          <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#about">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#community">Discord</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#email-list">Newsletter</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#members">Members</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
  }
}