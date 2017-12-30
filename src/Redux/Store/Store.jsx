import { createStore } from 'redux';
import Reducer from '../Reducer/Reducer';


//创建一个 Redux store 来以存放应用中所有的 state，应用中应有且仅有一个 store。
const Store = createStore(Reducer);

export const { dispatch, subscribe, getState, replaceReducer } = {...Store};

export default Store;