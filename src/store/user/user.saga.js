
//we need at least 4 main generators import in order us to use a saga function generator


import {all, takeLatest, put, call} from 'redux-saga/effects'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, getCurrentUser, signInAuthUserWithEmailAndPassword, signInWithGooglePopup, signOutUser } from '../../utils/firebase/firebase.utils'
import { signInSuccess, signInFailed, signUpSuccess, signUpFailed, signOutSuccess, signOutFailed} from './user.action'
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

//this function checks if the user is existed or not.
export function* isUserAuthenticated(){

    try{
        //getCurrentUser is a promise and checks if the user is still authenticated 
        //yeild call getCurrentUser calls the currentUser and assign to the userAuth if the user is existed
        const userAuth= yield call(getCurrentUser);
        //if not then retruned 
        if(!userAuth) return;

        //otherwise pass the value into the signInSucess where we define to return the user info
        // yield call(getSnapShotFromUserAuth,userAuth);
        //if the userAuth is existed then call the above function getSnapShotFromUserAuth
        yield call(getSnapShotFromUserAuth,userAuth);        
    }
    catch(error) {
        yield put(signInFailed(error));
    }
}


export function* signUp({payload:{email,password,displayName}}) {
    try {
        const {user}=yield call(createAuthUserWithEmailAndPassword, email, password);
        yield put(signUpSuccess(user,{displayName}));
    }
    catch(error) {
        yield put(signUpFailed(error));

    }
}

export function* signOut (){

    try {
        yield call(signOutUser);
        yield put(signOutSuccess());

    }
    catch (error){
        yield put(signOutFailed(error))


    }
}

export function* signInAfterSignUp({payload: {user, additionalDetails}}){
    yield call(getSnapShotFromUserAuth, user, additionalDetails);
}

export function* onGoogleSignInStart(){

    yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle)
}
export function* onCheckUserSession() {

    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated)
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



export function* signInWithEmail({payload: {email, password}}) {

    try {
        const {user}= yield call(signInAuthUserWithEmailAndPassword, email, password);
        yield call(getSnapShotFromUserAuth,user);
    } 
    catch (error) 
    {
        yield put(signInFailed(error));
    }
}
export function* onEmailSignInStart() {


    yield takeLatest (USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* onSignUpStart() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
}

export function* onSignOutStart(){
    yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
    }



export function* onSignUpSuccess(){

    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS,
        signInAfterSignUp )
}
export function* userSagas() {


    yield all([call(onCheckUserSession), call(onGoogleSignInStart), call(onEmailSignInStart), call(onSignUpStart), call(onSignUpSuccess), call(onSignOutStart)])
}


