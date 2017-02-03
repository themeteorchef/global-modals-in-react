import React from 'react';
import { Grid } from 'react-bootstrap';
import AppNavigation from '../containers/AppNavigation.js';
import modals from '../../modules/modals';
import Modal from '../components/modals/Modal';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    const component = this;

    component.state = {
      modalShow: false,
      modalClasses: null,
      modalTitle: null,
      modalForm: null,
      modalBody: null,
      modalFooter: null,
    };

    component.modal = {
      open(modal, modalProps) {
        component.setModal({ modal, show: true, props: modalProps });
      },
      close() {
        component.setModal({ show: false });
      },
    };

    component.resetModal = component.resetModal.bind(component);
    component.setModal = component.setModal.bind(component);
  }

  resetModal() {
    this.setState({
      modalClasses: null,
      modalTitle: null,
      modalForm: null,
      modalBody: null,
      modalFooter: null,
    });
  }

  setModal({ modal, show, props }) {
    const modalToSet = modal ? modals[modal](props, this.modal) : {};
    this.setState(Object.assign({ modalShow: show }, modalToSet), () => {
      if (!show) setTimeout(() => { this.resetModal(); }, 300);
    });
  }

  render() {
    const {
      modalShow,
      modalClasses,
      modalTitle,
      modalForm,
      modalBody,
      modalFooter,
    } = this.state;

    return (
      <div>
        <AppNavigation />
        <Grid>
          { React.cloneElement(this.props.children, { modal: this.modal }) }
        </Grid>
        <Modal
          show={ modalShow }
          className={ modalClasses }
          title={ modalTitle }
          form={ modalForm }
          body={ modalBody }
          footer={ modalFooter }
          onHide={ this.modal.close }
        />
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node,
};
