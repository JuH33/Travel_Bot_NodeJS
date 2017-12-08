import { FETCH_USER, DROP_USER_ASYNC, CREATE_USER, dropUser } from '../actions/userActions';
import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import { dropUserAsync, userXhr, createUserAsync } from './userMiddleware';
import { ADD_DEST_ROUTE_ASYNC } from '../actions/destinationActions';
import { fetchRoute } from './destMiddleware';

/** *******************************
 *  SAGAS TAKERS
 */

export function *sagas() {
  yield takeLatest(FETCH_USER, userXhr);
  yield takeLatest(CREATE_USER, createUserAsync);
  yield takeEvery(DROP_USER_ASYNC, dropUserAsync);
  yield takeLatest(ADD_DEST_ROUTE_ASYNC, fetchRoute);
}
