import { takeLatest, call, put, all } from 'redux-saga/effects';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.util';
import { fetchCollectionsSucess, fetchCollectionsFailure } from './shop.actions';

import ShopActionTypes from './shop.type';

export function* fetchColletionsAsync() {

    try {
        const collectionRef = firestore.collection("collections");
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionsSucess(collectionsMap))
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message))
    }

}

export function* fetchColletionsStart() {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchColletionsAsync)
}

export function* shopSaga() {
    yield all([
        call(fetchColletionsStart)
    ])
}