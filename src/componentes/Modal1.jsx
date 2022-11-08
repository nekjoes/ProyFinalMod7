import React from 'react';
import PropTypes from 'prop-types';
//import Modal1 from './ModalBase1';
import './Modal1.css';

/**
 * Primary UI component for user interaction
 */
export const Modal = ({ label, ...props }) => {
  
  return (
    
    // <label

    //   {...props}
    // >
    //   {label}
    // </label>

    <div>
    <a href="#modal-opened" class="link-1" id="modal-closed">Abrir Modal</a>
    <div class="modal-container" id="modal-opened">
    <div class="modal">
    
        <div class="modal__details">
        <h1 class="modal__title">{label}</h1>
        <p class="modal__description">Cuadro de Dialogo Formato USIP PostGrado FULLSTACK</p>
        </div>
    
        <p class="modal__text">Alumno: Johan Esteban Azero Soza.</p>
        
        <ul>
          <li>{props.label2}</li>
          <li>Opcion2</li>
        </ul>
        <button class="modal__btn">Button &rarr;</button>
    
        <a href="#modal-closed" class="link-2"></a>
    
    </div>
    </div>
</div>


  );
};

Modal.propTypes = {

  label: PropTypes.string.isRequired,
  label2: PropTypes.string
};
