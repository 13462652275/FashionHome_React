//基础模块
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './Redux/Store/Store';
import Router from './Router/Index';
import registerServiceWorker from './registerServiceWorker';

//第三方模块
import initReactFastclick from 'react-fastclick';
import Mock from './Mock/mock';

//重置样式
import './Style/Reset.css';

//全军样式
import './Style/Common.css';


Mock.bootstrap();

initReactFastclick();

ReactDOM.render(
	<Provider store={ store }>
		<Router />
	</Provider>, 
	document.getElementById('root')
);
registerServiceWorker();