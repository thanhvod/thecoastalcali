import { NavLink } from 'react-router-dom';

import * as ROUTINGS from '../../routing/path';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import classnames from 'classnames';

import styles from './style.module.scss';
import { useState } from 'react';

const menuItem = [
  { id: 1, title: 'Đặt tiệc', url: ROUTINGS.ROUTING_ORDER },
  { id: 2, title: 'Menu', url: ROUTINGS.ROUTING_MENU },
  { id: 3, title: 'Hình ảnh', url: ROUTINGS.ROUTING_IMAGE },
];

export default () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleClick = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbarlogo}>
          <span>THE COASTAL CALI</span>
        </div>
        <div className={styles.menuIcon} onClick={handleClick}>
          {showMenu ? <CloseIcon /> : <MenuIcon />}
        </div>
        <ul className={classnames(styles.navMenu, showMenu && styles.active)}>
          {menuItem.map((item, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={item.url}
                  className={styles.navLinks}
                  activeClassName={styles.active}
                  onClick={() => setShowMenu(false)}
                >
                  {item.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};
