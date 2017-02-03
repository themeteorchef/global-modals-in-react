import React from 'react';
import { TermsOfServiceModalBody, TermsOfServiceModalFooter } from '../ui/components/modals/TermsOfService';
import AddDocumentModalForm from '../ui/components/modals/AddDocument';

export default {
  acceptTerms(props, modal) {
    return {
      modalClasses: 'TermsOfServiceModal',
      modalTitle: 'Accept Terms of Service',
      modalBody: <TermsOfServiceModalBody { ...props } modal={ modal } />,
      modalFooter: <TermsOfServiceModalFooter { ...props } modal={ modal } />,
    };
  },
  addDocument(props, modal) {
    return {
      modalClasses: 'AddDocumentModal',
      modalTitle: 'Add a Document',
      modalForm: <AddDocumentModalForm { ...props } modal={ modal } />,
    };
  }
};
