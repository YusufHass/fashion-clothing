//this root-saga incapsulates all indivial saga
import {all, call} from 'redux-saga/effects';
import { categoriesSaga } from './categories/category.saga';

//generate function
// Es6 generator function, it distinguished by the word 'function' and '*'
//this function generator calls categoriesSaga in the catagory.saga.js
export function* rootSaga(){
    //yield makea await and all makes excute all
    yield all([call(categoriesSaga)])
    
}