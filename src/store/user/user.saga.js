//we need at least 4 main generators import in order us to use a saga function generator


import {all, takeLatest, put, call} from 'redux-saga/effects'
import { createUserDocumentFromAuth, getCurrentUser, signInWithGooglePopup } from '../../utils/firebase/firebase.utils'
import { signInSuccess, signInFailed} from './user.action'
import { USER_ACTION_TYPES } from './user.types'


//this saves the snapshot of the user information
export function*getSnapShotFromUserAuth(userAuth, additionalDetails){

    try{
        //anywhere you call a function in redux-saga, you use *call* keyword
        const userSnapShot= yield call(createUserDocumentFromAuth, userAuth,additionalDetails);
        yield put(signInSuccess({id: userSnapShot.id, ...userSnapShot.data()}))
        console.log(userSnapShot) 
        console.log(userSnapShot.data());
    }catch(error){

        yield put(signInFailed(error))


    }
}
export function* isUserAuthenticated(){

    try{
        //getCurrentUser is a promise and checks if the user is still authenticated 
        const userAuth= yield call(getCurrentUser);
        if(!userAuth) return;

        //otherwise pass the value into the signInSucess where we define to return the user info
        // yield call(getSnapShotFromUserAuth,userAuth);
        yield call(getSnapShotFromUserAuth,userAuth);


        
    }
    catch(error) {
        yield put(signInFailed(error))

    }
}

export function* signInWithGoogle() {

    try{

        const {user}= yield call(signInWithGooglePopup);
        yield call(getSnapShotFromUserAuth, user);
    }
    catch(error){
        yield put(signInFailed(error))
    }
}

export function* onGoogleSignInStart(){

    yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle)
}
export function* onCheckUserSession() {

    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* userSagas() {


    yield all([call(onCheckUserSession), call(onGoogleSignInStart)])
}