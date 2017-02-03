import React from 'react';
import { Button, FormGroup, ControlLabel, Modal } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { $ } from 'meteor/jquery';
import { Bert } from 'meteor/themeteorchef:bert';
import '../../../modules/validation.js';

export default class AddDocumentModalForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddDocument = this.handleAddDocument.bind(this);
  }

  handleAddDocument() {
    const doc = {
      title: this.title.value,
      body: this.body.value,
    };

    Meteor.call('documents.upsert', doc, (error, response) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        if (response.insertedId) browserHistory.push(`/documents/${response.insertedId}`);
        this.props.modal.close();
      }
    });
  }

  componentDidMount() {
    $(this.addDocumentForm).validate({
      rules: {
        title: { required: true },
        body: { required: true },
      },
      messages: {
        title: { required: 'Please add a title.' },
        body: { required: 'Please add a body.' },
      },
      submitHandler: this.handleAddDocument,
    });
  }

  render() {
    const { modal } = this.props;

    return (
      <form
        ref={addDocumentForm => (this.addDocumentForm = addDocumentForm)}
        onSubmit={event => event.preventDefault()}
      >
        <Modal.Body>
          <FormGroup>
            <ControlLabel>Title</ControlLabel>
            <input
              ref={title => (this.title = title)}
              type="text"
              name="title"
              className="form-control"
            />
          </FormGroup>
          <ControlLabel>Body</ControlLabel>
          <textarea
            ref={body => (this.body = body)}
            name="body"
            className="form-control"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={ modal.close } bsStyle="default">Cancel</Button>
          <Button type="submit" bsStyle="success">Add Document</Button>
        </Modal.Footer>
      </form>
    );
  }
}

AddDocumentModalForm.propTypes = {
  modal: React.PropTypes.object,
};
