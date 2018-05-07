//基础模块
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//第三方模块
import { fromJS, is } from 'immutable';

//样式
import './Style/Page.css';


class Page extends Component {
	static propTypes = {
		current: PropTypes.number,
		pageSize: PropTypes.number,
		total: PropTypes.number,
		showPageCount: PropTypes.number,
		className: PropTypes.string,
		onChange:  PropTypes.func
	};

	static defaultProps = {
		current: 1,
		pageSize: 10,
		total: 0,
		showPageCount: 5,
		className: 'page'
	};

	constructor (props) {
		super(props);
		this.state = {
			firstPage: 1,
			current: this.props.current,
			pageCount: Math.ceil(this.props.total / this.props.pageSize)
		};

		this.changePage = current => {
			let [ firstPage, half ] = [ this.state.firstPage, Math.floor(this.props.showPageCount / 2) ];
			if (current >= half + 1 && current <= this.props.pageSize - half) {
				firstPage = current - 2;
			} else if (current >= this.props.pageSize - half) {
				firstPage = this.props.pageSize - half * 2;
			} else if (current <= half + 1) {
				firstPage = 1;
			};
			this.setState({ current, firstPage });
			if (this.props.onChange) this.props.onChange(current);
		};

		this.prevPage = pole => {
			if (this.state.current <= 1) return;
			const current = pole === true ? 1 : this.state.current - 1;
			this.changePage(current);
		};

		this.nextPage = pole => {
			if (this.state.current >= this.state.pageCount) return;
			const current = pole === true ? this.state.pageCount : this.state.current + 1;
			this.changePage(current);
		};
	};

	shouldComponentUpdate (nextProps, nextState) {
		return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
	};

	render () {
		let pageCount = [];
		for (let i = this.state.firstPage; i <= this.state.pageCount; i++) {
			if (pageCount.length === this.props.showPageCount) {
				break;
			} else {
				let className = '';
				if (this.state.current === i) className = 'activePage';
				pageCount.push((<li className={ className } onClick={ this.changePage.bind(this, i) } key={ i }>{ i }</li>));
			};
		};
		return (
			<ul className={ this.props.className } style={ this.props.style }>
				<li onClick={ this.prevPage.bind(this, true) }>首页</li>
				<li onClick={ this.prevPage }>&lt;</li>
				{ pageCount }
				<li onClick={ this.nextPage }>&gt;</li>
				<li onClick={ this.nextPage.bind(this, true) }>末页</li>
			</ul>
		);
	};
};

export default Page;