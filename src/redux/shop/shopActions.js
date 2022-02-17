import { shopActionsTypes } from './shopActionsTypes';

export const updateCollections = collections => ({
  type: shopActionsTypes.UPDATE_COLLECTIONS,
  payload: collections
});