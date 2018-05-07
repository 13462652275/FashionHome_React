import React, { Component } from 'react';
import { fromJS, is } from 'immutable';

//样式
import './Style/Header.css';


class Header extends Component {
	shouldComponentUpdate (nextProps, nextState) {
		return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
	};

	render () {
		return (
			<header className="wrapper">
				<h1 className="logo">
					<a href="/">时尚家居</a>
				</h1>
				<form className="header-search">
					<input type="text" placeholder="搜索..."/>
					<input type="submit" value=""/>
				</form>
			</header>
		);
	};
};

export default Header;