import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import styles from './NavBar.module.css';

export function NavBar() {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);

  if (!user) return null;
  
  return (
    <nav className={styles.navbar}>
      <div className={styles.leftSide}>
        <button
          className={styles.menuBtn}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <span className={styles.menuIcon} />
        </button>
        <NavLink to="/" className={styles.brand} onClick={() => setOpen(false)}>CRM</NavLink>
      </div>
      
      <div className={`${styles.links} ${open ? styles.linksOpen : ''}`}>
        <NavLink to="/admin" className={({isActive}) => isActive ? styles.linkActive : styles.link} onClick={() => setOpen(false)}>Admin</NavLink>
        <NavLink to="/manager" className={({isActive}) => isActive ? styles.linkActive : styles.link} onClick={() => setOpen(false)}>Manager</NavLink>
        <NavLink to="/client" className={({isActive}) => isActive ? styles.linkActive : styles.link} onClick={() => setOpen(false)}>Client</NavLink>
        <NavLink to="/support" className={({isActive}) => isActive ? styles.linkActive : styles.link} onClick={() => setOpen(false)}>Support</NavLink>
        <div className={styles.mobileActions}>
          <span className={styles.role}>{user.role}</span>
          <button className={styles.logoutBtn} onClick={() => { setOpen(false); logout(); }}>Выйти</button>
        </div>
      </div>

      <div className={styles.right}>
        <span className={styles.role}>{user.role}</span>
        <button className={styles.logoutBtn} onClick={() => logout()}>Выйти</button>
      </div>
    </nav>
  );
}


