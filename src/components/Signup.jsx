import React, { Component } from 'react';
const FormActions = require('../actions/FormActions');

function onSubmit() {
  FormActions.submit();
}

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    FormActions.set(event.target.value);
  }

  render() {
    let display;
    console.log(this.props.submit);
    if (this.props.submit) {
      display = (
        <div>
          <p>Thank you for subscribing! We sent an email to <b><i>{this.props.value}</i></b> for you to comfirm your subscription</p>
        </div>
      );
    } else {
      display = (
        <div>
          <input className="col-sm-4 text-box" type='email' value={this.props.value} onChange={this.handleChange} />
          <br />
          <input className="btn btn-xl js-scroll-trigger" value='Subscribe' type='button' onClick={onSubmit} />
        </div>
      );
    }
    return (
      <section className="bg-light" id='email-list'>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">Email List</h2>
              <h3 className="email-subheading text-muted">Sign up for our email list to receive updates on events</h3>
              {display}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
