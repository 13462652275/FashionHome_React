import { combineReducers } from 'redux';
import { CHANGE_INDEX, ONE } from '../Action/Action';

const defaultIndex = (state = 0, action) => {
	switch (action.type) {
		case CHANGE_INDEX:
			return action.value;
		default:
			return state;
	}//此处不要写分号 ; 
};

const handleOne = (state = 0, action) => {
	switch (action.type) {
		case ONE:
			return action.value;
		default:
			return state;
	}
};
//例如 handleOne 这个函数，默认值写在 state = 0  0这个位置，
//而下面的自动识别其实就是把 Reducer 里面的对面上面函数都遍历执行一遍，
//当 action.type 对应上时，把 action.value 返回过来
//如果遍历时的 action.type 不是自己的， 那上面的 state 就是上一次的保存的状态给返回到状态库
//这其实就是只要有人使用 action 那么状态库的所有 Reducer 函数都会执行一遍，
//只不过就是不是自己的 action 那他会还是会返回自己上一次的状态，
//相当于没有改变，但是值却重新渲染了一遍


//getState()获取到的数据key是在这里。下面这个combineReducers会根据action.type来自动识别调用哪个函数。
const Reducer = combineReducers({
  defaultIndex: defaultIndex,
  one: handleOne
})

export default Reducer;
