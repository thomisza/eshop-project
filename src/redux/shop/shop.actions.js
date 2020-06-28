import shopActionsType from './shop.type';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.util';

export const fetchCollectionsStart = (collectionMap) => {
    return {
        type: shopActionsType.FETCH_COLLECTIONS_START,
    }
}

export const fetchCollectionsSucess = (collectionsMap) => {
    return {
        type: shopActionsType.FETCH_COLLECTIONS_SUCESS,
        payload: collectionsMap
    }
}

export const fetchCollectionsFailure = (error) => {
    return {
        type: shopActionsType.FETCH_COLLECTIONS_FAILURE,
        payload: error
    }
}

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection("collections");
        dispatch(fetchCollectionsStart());

        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            dispatch(fetchCollectionsSucess(collectionsMap))
        }).catch(error => dispatch(fetchCollectionsFailure(error.message)));
    }
}