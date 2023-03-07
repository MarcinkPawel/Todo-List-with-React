import {all} from "redux-saga/effects";
import { watchFetchExmapleTasks } from "./tasksSaga";


export default function* rootSaga() {
    yield all([
        watchFetchExmapleTasks(),
    ]);
}