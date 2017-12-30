import React, { Component } from 'react';
import Router from '../Router/Router';

// import 'antd/dist/antd.css';
// import { Button, Input, notification } from 'antd';

import '../Style/Index.css';

class Index extends Component {
	render () {
		return (
			<div className="container">
				<header className="wrapper">
					<h1 className="logo">
						<a href="/">时尚家居</a>
					</h1>
					<form className="header-search">
						<input type="text" placeholder="搜索..."/>
						<input type="submit" value=""/>
					</form>
					<i className="header-icon iconfont">&#xe600;</i>
				</header>
				<Router />
			</div>
		);
	}
};

export default Index;