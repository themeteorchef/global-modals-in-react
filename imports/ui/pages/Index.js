import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

const Index = ({ modal }) => (
  <div className="Index">
    <Jumbotron className="text-center">
      <h2>Base</h2>
      <p>A starting point for Meteor applications.</p>
      <p><a className="btn btn-success" href="https://themeteorchef.com/base" role="button">Read the Documentation</a></p>
      <p style={ { fontSize: '16px', color: '#aaa' } }>Currently at v4.11.1</p>
      <Button
        bsStyle="success"
        onClick={() => { modal.open('acceptTerms'); }}
      >Accept Terms</Button>
      <Button
        bsStyle="success"
        onClick={() => { modal.open('addDocument'); }}
      >Add Document</Button>
    </Jumbotron>
  </div>
);

Index.propTypes = {
  modal: React.PropTypes.object,
};

export default Index;
