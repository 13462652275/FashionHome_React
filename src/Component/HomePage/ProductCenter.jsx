import React, { Component } from 'react';
import { fromJS, is } from 'immutable';
import { getIndexProductData } from '../../Api/api';

import './Style/ProductCenter.css';

class ProductCenter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			furniture: {
				titleCH: '家具',
				titleEN: 'Furniture',
				iconCode: '&#xe609;',
				nav: [ '客厅', '卧室', '书房', '餐厅', '办公', '儿童', '房厨', '户外' ]
			},
			buliding: {
				titleCH: '建材',
				titleEN: 'Buliding materials',
				iconCode: '&#xe612;',
				nav: [ '地板', '瓷砖', '门窗', '石材', '卫浴', '橱窗', '涂料', '墙纸', '开关' ]
			},
			decoration: {
				titleCH: '装饰',
				titleEN: 'Decoration',
				iconCode: '&#xe669;',
				nav: [ '面料', '灯具', '饰品', '床垫', '床品', '地毯', '窗帘', '装饰画' ]
			},
			indexProductData: {
				furniture: [],
				buliding: [],
				decoration: []
			}
		}
	}

	componentWillMount () {
		getIndexProductData().then(({ data }) => {
			let list = [
				{
					titleCH: '家具',
					titleEN: 'Furniture',
					iconCode: '&#xe609;',
					className: 'index-product-body index-furniture',
					data: data.furniture
				},
				{
					titleCH: '建材',
					titleEN: 'Buliding materials',
					iconCode: '&#xe612;',
					className: 'index-product-body index-buliding',
					data: data.buliding
				},
				{
					titleCH: '装饰',
					titleEN: 'Decoration',
					iconCode: '&#xe669;',
					className: 'index-product-body index-decoration',
					data: data.decoration
				}
			];
			this.setState({ data: list });
		}, error => {
			console.log(error);
		});
	}

	shouldComponentUpdate(nextProps, nextState) {
		return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
	}

	render () {
		return (
			<div className="index-product wrapper">
				{this.props.children}
				{
					this.state.data.map((item, i) => {
						return (
							<ProductItem data={item} key={i}></ProductItem>
						);
					})
				}
			</div>
		);
	}
}

class ProductItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			navWidth: '100%',
			maxDistance: 0,
			clientX: 0,
			currentDistance: 0,
			animation: {
				transition: 'none',
				marginLeft: 0
			},
			index: 0
		}

		this.animation = (transition, marginLeft) => {
			this.setState({ animation: { transition, marginLeft } });
		}

		this.touchStart = (e) => {
			this.setState({ clientX: e.changedTouches[0].clientX });
		}

		this.touchMove = (e) => {
			const distance = e.changedTouches[0].clientX - this.state.clientX;
			this.animation('none', this.state.currentDistance + distance);
		}

		this.touchEnd = (e) => {
			let marginLeft = this.state.animation.marginLeft;
			if (- marginLeft > this.state.maxDistance) {
				marginLeft = - this.state.maxDistance;
				this.animation('margin-left 0.7s', marginLeft);
			} else if (marginLeft > 0) {
				marginLeft = 0;
				this.animation('margin-left 0.7s', marginLeft);
			}
			this.setState({ currentDistance: marginLeft });
		}

		this.selected = (i) => {
			this.setState({ index: i });
		}
	}

	shouldComponentUpdate(nextProps, nextState) {
		return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
	}

	componentWillMount () {
		const navWidth = this.props.data.data.length * 64;
		if (window.innerWidth < navWidth) {
			this.setState({
				navWidth,
				maxDistance: navWidth > window.innerWidth ? navWidth - window.innerWidth : 0
			});
		}
	}

	render () {
		return (
			<div className="index-product-header">
				<h4 className="index-product-title">
					<i className="iconfont" dangerouslySetInnerHTML={{__html: this.props.data.iconCode}}></i>
					<b>{this.props.data.titleCH}</b>
					<span>{this.props.data.titleEN}</span>
					<a href="###">More></a>
				</h4>
				<ul 
					className="index-product-nav" 
					style={{width: this.state.navWidth, ...this.state.animation}}
					onTouchStart={this.touchStart}
					onTouchMove={this.touchMove}
					onTouchEnd={this.touchEnd}>
					{
						this.props.data.data.map((item, i) => (
							<li key={i}>
								<span 
									style={{color: this.state.index === i ? '#77c111' : '#333'}}
									onClick={this.selected.bind(this, i)}
									>{item.name}</span>
							</li>
						))
					}
				</ul>
				<div className={this.props.data.className}>
					{
						this.props.data.data[this.state.index].data.map((item, i) => {
							return (
								<a className={i === 0 ? 'big-picture' : 'small-info'} href={item.url} key={i}>
									<img src={item.img} alt={item.title}/>
									<div className={i === 0 ? 'big-picture-info' : 'small-picture-info'}>
										<span>{item.title}</span>
										<i>了解更多></i>
									</div>
								</a>
							);
						})
					}
				</div>
			</div>
		);
	}
}

export default ProductCenter;