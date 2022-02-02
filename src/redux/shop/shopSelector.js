import { createSelector } from 'reselect';

const MAP_PARAMS = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5
};

const selectShop = state => state.shop;

export const selectColletions = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollection = categoryId => 
  createSelector(
    [selectColletions],
    collections => 
    collections.find(
      collection => 
        collection.id === MAP_PARAMS[categoryId]
      )
);
