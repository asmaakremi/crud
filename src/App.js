import { Fragment, useState } from 'react';

// import Header from './components/Layout/Header';
// import Products from './components/Products/Products';
// import Cart from './components/Cart/Cart';

import {Header} from "./components/Layout";
import { Products } from './components/Products';
import { Cart } from './components/Cart';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler} action="Add" />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Products />
      </main>
    </Fragment>
  );
}

export default App;
