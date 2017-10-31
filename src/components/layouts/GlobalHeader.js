import React, { Component } from "react";
import { Header } from 'semantic-ui-react'
import GlobalMenu from './GlobalMenu';

class GlobalHeader extends Component {

  render() {
    return (
      <Header className="header">
        <GlobalMenu userSession={this.props.userSession} dataPropagation={this.props.dataPropagation}/>         
      </Header>
    );
  }
}

export default GlobalHeader;
