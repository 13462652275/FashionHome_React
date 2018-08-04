//基础模块
import React, { Component } from 'react';
import { fromJS, is } from 'immutable';

//API
import { getMenuList } from 'Api';

//样式
import './Style/Menu.css';


class Menu extends Component {
	constructor (props) {
		super(props);
		this.state = {
			index: 0,
			name: '',
			iconCodes: ['&#xe609;', '&#xe612;', '&#xe669;'],
			list: []
		};

		this.tabClick = index => {
			this.setState({ index, name: this.state.list[index].title });
		};
	};

	shouldComponentUpdate (nextProps, nextState) {
		return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
	};

	componentWillMount () {
		getMenuList().then(({ data }) => {
			this.setState({ list: data, name: data[0].title });
		}, error => {
			console.log(error);
		});
	};

	render () {
		return (
			<div className="product-menu">
				<div className="product-menu-left">
					<div className="product-menu-left-title">产品分类</div>
					<div className="product-menu-left-container">
						<ul className="product-menu-left-nav">
							{
								this.state.list.map((item, i) => {
									return (
										<li 
											className={ this.state.index === i ? 'avtive-nav' : '' }
											onClick={ this.tabClick.bind(this, i) } 
											key={ i }>
											<i 
												className="iconfont" 
												style={{ color: this.state.index === i ? '#fff' : '#77c111' }}
												dangerouslySetInnerHTML={{ __html: this.state.iconCodes[i] }}></i>
											<span style={{ color: this.state.index === i ? '#fff' : '#404040' }}>{ item.title }</span>
										</li>
									);
								})
							}
						</ul>
						<div 
							className="product-menu-left-arrow"
							style={{ top: this.state.index * 52 }}></div>
					</div>
				</div>
				<div className="product-menu-right">
					<div className="product-menu-right-top">
						<b className="product-menu-right-title">{ this.state.name }</b>
						<div className="product-menu-right-search">
							<input type="text" placeholder="搜索..."/>
							<button></button>
						</div>
					</div>
					{
						this.state.list.map((tab, i) => {
							return (
								<div 
									className="product-menu-right-container"
									style={{ display: this.state.index === i ? 'block' : 'none' }}
									key={ i }>
									{
										tab.columns.map((column, j) => {
											return (
												<MenuRightColumn column={ column } key={ j } />
											);
										})
									}
								</div>
							);
						})
					}
				</div>
			</div>
		);
	};
};

class MenuRightColumn extends Component {
	constructor (props) {
		super(props);
		this.state = {
			index: 0
		};
	};

	shouldComponentUpdate (nextProps, nextState) {
		return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
	};

	render () {
		return (
			<div className="product-menu-right-columns">
				<b className="product-menu-right-title">{ this.props.column.name }</b>
				<ul className="product-menu-right-list">
					{
						this.props.column.list.map((item, i) => {
							return (
								<li key={ i }>
									<span 
										style={{ borderColor: this.state.index === i ? '#77c111' : 'transparent' }}
										onClick={() => { this.setState({index: i}) }}>{ item }</span>
								</li>
							);
						})
					}
				</ul>
			</div>
		);
	};
};

export default Menu;