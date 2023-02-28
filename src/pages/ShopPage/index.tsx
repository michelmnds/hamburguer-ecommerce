import { useContext, useEffect, useState } from 'react';
import { StyledShopPage } from './style';
import { CartContext } from '../../providers/CartContext';
import CartModal from '../../components/CartModal';
import Header from '../../components/Header';
import ProductList from '../../components/ProductList';

import { StyledContainer } from '../../styles/grid';

const ShopPage = () => {
  const { cartModal, setCartModal } = useContext(CartContext);
  const [search, setSearch] = useState<null | string>('');

  // const searchProductsList = products.filter((product) => {
  //   return search === ''
  //     ? true
  //     : product.name.toLowerCase().includes(search.toLowerCase());
  // });

  useEffect(() => {
    setCartModal(false);
  }, []);

  return (
    <StyledShopPage>
      {cartModal && <CartModal />}
      <Header />
      <main>
        <StyledContainer containerWidth={1300}>
          <ProductList />
        </StyledContainer>
      </main>
    </StyledShopPage>
  );
};

export default ShopPage;
