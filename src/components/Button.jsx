// src/components/Button.jsx
//import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

export default function Button({ children, onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}

// Validación de props
Button.propTypes = {
    children: PropTypes.node.isRequired, // children debe ser un nodo de React y es obligatorio
    onClick: PropTypes.func.isRequired,  // onClick debe ser una función y es obligatorio
  };