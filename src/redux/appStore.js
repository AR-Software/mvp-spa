import { createStore } from 'redux'
import { changeHeader }  from './appActions'
import AppReducer from './appReducers'


const AppStore = createStore(AppReducer);

AppStore.dispatch(changeHeader());

export default AppStore;