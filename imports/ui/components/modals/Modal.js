import React from 'react';
import { Modal } from 'react-bootstrap';

const renderBodyFooter = (form, body, footer) => (
  form || (
  <div>
    <Modal.Body>
      { body }
    </Modal.Body>
    <Modal.Footer>
      { footer }
    </Modal.Footer>
  </div>
));

const AppModal = ({ show, className, title, form, body, footer, onHide }) => (
  <Modal show={ show } onHide={ onHide } className={ className }>
    <Modal.Header closeButton>
      <Modal.Title>{ title }</Modal.Title>
    </Modal.Header>
    { renderBodyFooter(form, body, footer) }
  </Modal>
);

AppModal.propTypes = {
  show: React.PropTypes.bool,
  className: React.PropTypes.string,
  title: React.PropTypes.string,
  form: React.PropTypes.node,
  body: React.PropTypes.node,
  footer: React.PropTypes.node,
  onHide: React.PropTypes.func,
};

export default AppModal;
