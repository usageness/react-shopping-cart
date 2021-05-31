import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import CounterButton from './CounterButton';
import IconButton from './utils/IconButton';
import PriceText from './utils/PriceText';
import CheckBox from './utils/CheckBox';
import Image from './utils/Image';
import Flex from './utils/Flex';

import bin from '../asset/bin-icon.svg';

import styled, { css } from 'styled-components';

import { increaseQuantity, decreaseQuantity, deleteItemFromCart } from '../modules/cart';

const SingleCartItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  box-sizing: border-box;
  width: 100%;
  height: 205px;
  padding: 25px 0;
  border-bottom: 1px solid #cccccc;
`;

const CartItemName = styled.span`
  font-size: 20px;
  margin: 4px 21px 20px;
  color: #333333;
`;

const ManageCartItemStyle = css`
  width: 146px;
  margin-left: auto;
`;

const CartItemPrice = styled.span`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
`;

const CartItem = ({ cartItem, onCheckboxClick }) => {
  const dispatch = useDispatch();

  const onIncreaseButtonClick = () => {
    dispatch(increaseQuantity(cartItem.id));
  };

  const onDecreaseButtonClick = () => {
    dispatch(decreaseQuantity(cartItem.id));
  };

  const onDeleteItemButtonClick = () => {
    dispatch(deleteItemFromCart(cartItem.id));
  };

  return (
    <SingleCartItem>
      <CheckBox id={cartItem.id} checked={cartItem.checked} onChange={onCheckboxClick} />
      <Flex>
        <Image width="144px" height="144px" src={cartItem.image} alt={cartItem.name} isBackgroundImageNeeded={true} />
        <CartItemName>{cartItem.name}</CartItemName>
      </Flex>

      <Flex flexDirection="column" alignItems="flex-end" css={ManageCartItemStyle}>
        <IconButton
          src={bin}
          alt="해당 상품을 장바구니에서 삭제"
          width="24px"
          height="24px"
          onClick={onDeleteItemButtonClick}
        />
        <CounterButton
          id={cartItem.id}
          count={cartItem.quantity}
          onIncreaseButtonClick={onIncreaseButtonClick}
          onDecreaseButtonClick={onDecreaseButtonClick}
        />
        <CartItemPrice>
          <PriceText>{cartItem.quantity * cartItem.price}</PriceText>
        </CartItemPrice>
      </Flex>
    </SingleCartItem>
  );
};

CartItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    checked: PropTypes.bool.isRequired,
  }),
  onCheckboxClick: PropTypes.func,
};

export default CartItem;