import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './Redux/Store/Store';
import Router from './Router/Router';
import registerServiceWorker from './registerServiceWorker';
import initReactFastclick from 'react-fastclick';
import Mock from './Mock/mock';

Mock.bootstrap();

initReactFastclick();

ReactDOM.render(
	<Provider store={store}>
		<Router />
	</Provider>, 
	document.getElementById('root'));
registerServiceWorker();
