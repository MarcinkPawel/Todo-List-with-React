import { takeLatest, takeEvery, call, put, select, delay } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";
import { fetchExampleTasks, selectTasks, fetchExampleTasksSuccess } from "./tasksSlice";


function* fetchExampleTasksHandler() {
  try {
    yield delay(2000); 
    const exampleTasks = yield call(getExampleTasks);
    yield put(fetchExampleTasksSuccess(exampleTasks));  
  } catch (error) {
    yield call(alert, "Something went wrong!");
  }
}

function* saveTasksInLocalStorageHandler() {
    const tasks =  yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
  yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
  yield takeEvery("*", saveTasksInLocalStorageHandler)
}
