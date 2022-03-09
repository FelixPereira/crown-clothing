import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsPreview = createSelector(
  [selectCollections],
  collections => collections ?  Object.keys(collections).map(keys => collections[keys]) : []
);

export const selectCollection = categoryUrl => 
  createSelector(
    [selectCollections],
    collections => collections ? collections[categoryUrl] : null
);

export const selectIsFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
);

export const selectIsLoading = createSelector(
  [selectShop],
  shop => !shop.collections
);
