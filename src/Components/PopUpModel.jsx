// src/Modal.js
import React from 'react';
import '../Style/style.css'; // Import the CSS
import Cart from '../Components/Cart'
import ProductList from '../Components/ProductList';

const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          Close
        </button>
        <Cart/>
        <ProductList
        />
        {content}
      </div>
    </div>
  );
};

export default Modal;
