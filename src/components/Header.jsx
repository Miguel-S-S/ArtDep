// src/components/Header.jsx
import styles from './Header.module.css';


export default function Header() {
    return (
      <header className={styles.header}>
        <h1 className={styles.title}>Mis Creaciones Vanesa</h1>
        <nav className={styles.nav}>
          <a href="/">Inicio</a>
          <a href="/products">Catalogo</a>
          <a href="/cart">Carrito</a>
        </nav>
      </header>
    );
  }