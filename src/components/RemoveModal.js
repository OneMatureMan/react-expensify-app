import React from 'react';
import Modal from 'react-modal';


const RemoveModal = (props) => (
    <Modal
        isOpen={props.isOpen}
        contentLabel="Selected Option"
        onRequestClose={props.handleCloseModal}
        ariaHideApp={false}
        closeTimeoutMS={200}
        className='modal'
    >
        <h3 className='modal__title'>Remove Expense?</h3>
        {/* <p className='modal__body'>Are you sure that you want to remove the expense?</p> */}
        <button className='button button--remove' onClick={props.onRemoveExpense}>Remove</button>
        <button className='button' onClick={props.handleCloseModal}>Close</button>
    </Modal>
)


export default RemoveModal;