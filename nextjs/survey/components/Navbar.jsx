// components/Navbar.tsx
import React from "react";
import Link from "next/link";
import styles from '@/styles/Navbar.module.css'
const Navbar = () => {
  const navItems = [{
    title : 'Home',
    path : '/'
  },
  {
    title : 'Contact',
    path : '/about'
  },
  {
    title : 'About',
    path : '/contact'
  }];
  return (
    <div className={styles.navbar}>
      <div className="flex-none">
        <ul className={styles.navItemList}>
        {
          navItems.map((item, index) => {
            return (
            <li className={styles.navItem}>
              <Link href={item.path}>{item.title}</Link>
            </li>
            )
          })
        }
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
