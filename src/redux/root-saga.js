import { all, call } from 'redux-saga/effects';

import { fetchColletionsStart } from './shop/shop.sagas';
import { userSaga } from './user/user.sagas';
import { cartSaga } from './cart/cart.sagas';
import { shopSaga } from './shop/shop.sagas';

export default function* rootSaga() {
    yield all([
        call(fetchColletionsStart),
        call(userSaga),
        call(cartSaga),
        call(shopSaga)
    ])
}   