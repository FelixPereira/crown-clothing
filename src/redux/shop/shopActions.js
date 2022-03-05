import { shopActionsTypes } from './shopActionsTypes';
import {firestore, convertCollectionSnapshotToMap} from '../../firebase/firebase';

export const fetchCollectionsStart = () => ({
  type: shopActionsTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = collections => ({
  type: shopActionsTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collections
});

export const fetchCollectionsFailure = errorMessage => ({
  type: shopActionsTypes.fetchCollectionsFailure,
  payload: errorMessage
});

export const fetchCollectionsAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());

    collectionRef
      .get()
      .then(snapshot => {
       const collections = convertCollectionSnapshotToMap(snapshot);
      dispatch(fetchCollectionsSuccess(collections));
      }).catch(error => dispatch(fetchCollectionsFailure(error.message)));
  }
}