// ResumePreviewModal.js
import React, { Component } from "react";

class ResumePreviewModal extends Component {
  render() {
    const { isOpen, closeModal, resumeDownload } = this.props;

    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Preview Resume"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <button id="closeModalBtn" onClick={closeModal}>
          &times;
        </button>
        <iframe title="Resume Preview" src={resumeDownload} style={{ width: "100%", height: "100%" }}></iframe>
      </Modal>
    );
  }
}

export default ResumePreviewModal;
