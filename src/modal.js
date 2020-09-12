import React from 'react';
import './modal.css';
import Exit from './icons/exit';

const Modal = (props) => {
  const { closeModal } = props;

  const closeicon = () => (
    <Exit name="times"
      onClick={closeModal}
      className='closeModal'
      style={{
        width: '30px',
        height: '30px',
        color: '#000000',
        padding: '10px',
        cursor: 'pointer',
        backgroundColor: 'transparent',
        border: 0,
        position: 'absolute',
        top: '0.3rem',
        right: '0.5rem',
      }}
      >
    
    </Exit>
  );

  return (
    <div className="overlay">
      <div className="content">
        { closeicon() }
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
