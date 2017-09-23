import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Signup from '../components/Signup';
import Members from '../components/Members';
import Footer from '../components/Footer';
const FormStore = require('../stores/FormStore');

  function getAppState() {
    return {
      form: FormStore.getForm()
    };
  }

export default class FormStoreApp extends Component {
  constructor(props) {
    super(props);
    this.state = getAppState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    FormStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    FormStore.removeChangeListener(this.onChange);
  }

  render() {
    console.log(this.state);
    return (
    <div id="page-top">
      <Navigation />
      <Header />
      <Signup submit={this.state.form.submit} value={this.state.form.email.value}/>
      <Members />
      <Footer />
    </div>
    )
  }

  onChange() {
    this.setState(getAppState());
  }

}