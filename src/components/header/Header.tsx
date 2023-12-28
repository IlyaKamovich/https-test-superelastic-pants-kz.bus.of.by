import { Fragment, useState } from 'react';

import './header.scss';
import BurgerMenu from '../burger-menu/BurgerMenu';

const Header = () => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <Fragment>
      <header className="header">
        <div className="sale">Новинка 2024 года</div>
        <div className="menu">
          <div className="container">
            <button type="button" className="icon-button menu-trigger" onClick={onOpen}>
              <img src="icons/burger.svg" alt="menu" />
            </button>
            <span>Быстросохнущие эластичные брюки </span>
          </div>
        </div>
      </header>
      <BurgerMenu open={open} onClose={onClose} />
    </Fragment>
  );
};

export default Header;
