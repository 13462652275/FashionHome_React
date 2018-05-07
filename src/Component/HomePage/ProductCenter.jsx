//基础模块
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//第三方模块
import { fromJS, is } from 'immutable';

//API
import { getIndexProductData } from 'Api';

//样式
import './Style/ProductCenter.css';

//工具组件
import MenuSwiper from 'Tool/MenuSwiper';
import Icon from 'Tool/Icon';


class ProductCenter extends Component {
	constructor (props) {
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
		};
	};

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
	};

	shouldComponentUpdate (nextProps, nextState) {
		return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
	};

	render () {
		return (
			<div className="index-product wrapper">
				{ this.props.children }
				{
					this.state.data.map((item, i) => (
						<ProductItem data={ item } key={ i }/>
					))
				}
			</div>
		);
	};
};

class ProductItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			index: 0
		};

		this.selected = i => {
			this.setState({ index: i });
		};
	};

	shouldComponentUpdate (nextProps, nextState) {
		return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
	};

	render () {
		return (
			<div className="index-product-piece">
				<h4 className="index-product-title">
					<Icon>{this.props.data.iconCode}</Icon>
					<b>{this.props.data.titleCH}</b>
					<span>{this.props.data.titleEN}</span>
					<Link to="/">More></Link>
				</h4>
				<div className="index-product-nav-border">
					<MenuSwiper>
						<ul className="index-product-nav" >
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
					</MenuSwiper>
				</div>
				<div className={this.props.data.className}>
					{
						this.props.data.data[this.state.index].data.map((item, i) => {
							return (
								<Link className={i === 0 ? 'big-picture' : 'small-info'} to={item.url} key={i}>
									<img src={item.img} alt={item.title}/>
									<div className={i === 0 ? 'big-picture-info' : 'small-picture-info'}>
										<span>{item.title}</span>
										<i>了解更多></i>
									</div>
								</Link>
							);
						})
					}
				</div>
			</div>
		);
	};
};

export default ProductCenter;