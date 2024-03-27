import Logo from '../ui/logo/logo';
import {PropsWithChildren} from 'react';
import {memo} from 'react';
import styles from './header.module.css';

const Header = memo(({children}: PropsWithChildren): JSX.Element => (
  <header className="header">
    <div className="container">
      <div className="header__wrapper">
        <div className={`${styles.header}`}>
          {/* <Logo /> */}
          Живопись Высоцковой Алёны
        </div>
        {/* {children} */}
      </div>
    </div>
  </header>
));

Header.displayName = 'Header';

export default Header;
