import { createSelector } from 'reselect';

const selectShop = state => state.shop;

const selectColletions = createSelector (
  [selectShop],
  shop => shop.collections
);

export default selectColletions;