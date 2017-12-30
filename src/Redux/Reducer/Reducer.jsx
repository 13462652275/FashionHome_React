import { combineReducers } from 'redux';
import { CHANGE_INDEX, ONE } from '../Action/Action';

const defaultIndex = (state = 0, action) => {
	switch (action.type) {
		case CHANGE_INDEX:
			return action.value;
		default:
			return state;
	}
};

const handleOne = (state = 0, action) => {
	switch (action.type) {
		case ONE:
			return action.value;
		default:
			return state;
	}
};


//getState()获取到的数据key是在这里。下面这个combineReducers会根据action.type来自动识别调用哪个函数。
const Reducer = combineReducers({
  defaultIndex: defaultIndex,
  one: handleOne
})

export default Reducer;
