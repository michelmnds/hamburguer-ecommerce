import { MdClose } from 'react-icons/md';
import { useContext } from 'react';
import CartProductList from './CartProductList';

import { StyledCartModalBox } from './style';
import { CartContext } from '../../providers/CartContext';
import { StyledParagraph, StyledTitle } from '../../styles/typography';

const CartModal = () => {
  const { cartModal, closeModal, cartProducts } = useContext(CartContext);

  if (cartProducts.length !== 0) {
    return (
      <StyledCartModalBox>
        {cartModal}
        <dialog>
          <header>
            <StyledTitle tag='h2' $fontSize='three'>
              Carrinho de compras
            </StyledTitle>
            <button
              type='button'
              aria-label='Fechar'
              onClick={() => closeModal()}
            >
              <MdClose size={21} />
            </button>
          </header>
          <div className='cartBox'>
            <CartProductList />
          </div>
        </dialog>
      </StyledCartModalBox>
    );
  }
  return (
    <StyledCartModalBox>
      {cartModal}
      <dialog>
        <header>
          <StyledTitle tag='h2' $fontSize='three'>
            Carrinho de compras
          </StyledTitle>
          <button
            type='button'
            aria-label='Fechar'
            onClick={() => closeModal()}
          >
            <MdClose size={21} />
          </button>
        </header>
        <div className='cartBox'>
          <CartProductList />

          <div className='emptyBox'>
            <StyledTitle tag='h3' $fontSize='three' textAlign='center'>
              Sua sacola está vazia
            </StyledTitle>
            <StyledParagraph textAlign='center'>Adicione itens</StyledParagraph>
          </div>
        </div>
      </dialog>
    </StyledCartModalBox>
  );
};

export default CartModal;
