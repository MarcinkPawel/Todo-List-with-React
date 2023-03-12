import {all} from "redux-saga/effects";
import { tasksSaga } from "../src/features/tasks/tasksSaga";


export default function* rootSaga() {
    yield all([
        tasksSaga(),
    ]);
}