import React from 'react'
import Link from 'gatsby-link'
import logoNoBg from './logo-noBG.svg'
import styles from './index.module.css'

const Header = () => (
  <header className={`sspa-primary ${styles.header}`}>
    <Link to="/" className={styles.headerLogo}>
      <img src={logoNoBg} alt="single-spa" className={styles.headerImg} height="62"/>
      <span>SINGLE-SPA</span>
    </Link>
    <nav className={styles.headerNav}>
      <a href="https://github.com/canopytax/single-spa">Github</a>
      <Link to="/docs/index.html">Docs</Link>
      <Link to="/tutorial/index.html">Getting Started</Link>
      <a href="https://single-spa.surge.sh/">Demo</a>
    </nav>
  </header>
)

export default Header
