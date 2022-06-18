import { NavLink } from 'react-router-dom';
import * as ROUTINGS from '../../routing/path';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import classnames from 'classnames';

import styles from './style.module.scss';
import { useState } from 'react';

const menuItem = [
  { id: 0, title: 'Đặt tiệc', url: ROUTINGS.ROUTING_ORDER, cName: 'navLinks' },
  { id: 1, title: 'Menu', url: ROUTINGS.ROUTING_MENU, cName: 'navLinks' },
  { id: 2, title: 'Hình ảnh', url: ROUTINGS.ROUTING_IMAGE, cName: 'navLinks' },
];

export default () => {
  const [clicked, setClicked] = useState(false);
  const [active, setActive] = useState(0);
  const handleClick = () => {
    setClicked(!clicked);
  };
  const handleClickMenuItem = (item) => {
    setActive(item.id);
    setClicked(!clicked);
  };
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbarlogo}>
          <span>THE COASTAL CALI</span>
        </div>
        <div className={styles.menuIcon} onClick={handleClick}>
          {clicked ? <CloseIcon /> : <MenuIcon />}
        </div>
        <ul className={classnames(styles.navMenu, clicked && styles.active)}>
          {menuItem.map((item, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={item.url}
                  className={classnames(styles.navLinks, active == item.id && styles.active)}
                  onClick={() => handleClickMenuItem(item)}
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
