import './ModalContainer.css'
import React from 'react'
import { connect } from 'react-redux'
import { modalTypesMap } from './modalTypes'

const ModalContainer = ({ modal }) => {
  const SpecificModal = modalTypesMap[modal.type]

  const renderModal = () => {
    return (
      <div className="modal-container">
        <SpecificModal {...modal.props} />
      </div>
    )
  }

  return !!SpecificModal ? renderModal() : null
}

const mapStateToProps = (state, ownProps) => {
  return { modal: state.modal }
}

export default connect(mapStateToProps)(ModalContainer)
