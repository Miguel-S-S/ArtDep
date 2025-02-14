// src/components/Background.jsx
//import React from 'react';
import PropTypes from 'prop-types';
import styles from './Background.module.css';

export default function Background({ children }) {
    return (
      <div className={styles.background}>
        <div className={styles.content}>
          {children} {/* Contenido que se mostrará sobre el fondo */}
        </div>
      </div>
    );
  }

  // Validación de props
Background.propTypes = {
    children: PropTypes.node.isRequired, // children debe ser un nodo de React y es obligatorio
  };