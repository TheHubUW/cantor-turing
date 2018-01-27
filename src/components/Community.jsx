import React, { Component } from 'react';

export default class Community extends Component {
  render() {
    return (
      <section className="bg-white" id='community'>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">Discord</h2>
              <h3 className="email-subheading text-muted">Meet us on Discord to discuss classes, play video games, find students, or pitch your idea</h3>
              <a href="https://discord.gg/k8VmMdR">
                <img className="mx-auto line-break rounded-circle" height="200" width="200" src={require(`../img/discord.png`)} alt="" />
              </a>
              <h3 className="line-break no-text-transform">k8VmMdR</h3>
              <iframe title="How To Use Discord" src="https://www.youtube.com/embed/rILeDVyeGO4" frameBorder="0" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </section>
    )
  }
}