import React from 'react'
import Link from 'gatsby-link'
import logoNoBg from './logo-noBG.svg'
import styles from './index.module.css'

const Header = () => (
  <header className={`sspa-primary ${styles.header}`}>
    <div className={styles.headerMobileMenuBtn}>
      M
    </div>
    <Link to="/" className={styles.headerText}>
      <img src={logoNoBg} alt="single-spa" className={styles.headerImg}/>
      <span>SINGLE-SPA</span>
    </Link>
  </header>
)

export default Header
