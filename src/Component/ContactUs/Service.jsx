//基础模块
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//第三方模块
import { fromJS, is } from 'immutable';

//样式
import './Style/Service.css';

//工具组件
import Icon from 'Tool/Icon';


class Service extends Component {
	constructor (props) {
		super(props);
		this.state = {};
	};

	shouldComponentUpdate (nextProps, nextState) {
		return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
	};

	render () {
		return (
			<article className="contact-us-service wrapper">
				<ServiceItem icon="&#xe605;" title="在线订购" describe="高效便捷，安全保障"/>
				<ServiceItem icon="&#xe60f;" title="我要询价" describe="专注客户体验，创新引领技术。"/>
				<ServiceItem icon="&#xe6e7;" title="留言与投诉" describe="以客户为中心，实施超时和超重服务。"/>
			</article>
		);
	};
};

class ServiceItem extends Component {
	static propTypes = {
		icon: PropTypes.string,
		title: PropTypes.string,
		describe: PropTypes.string
	};

	constructor (props) {
		super(props);
		this.state = {};
	};

	shouldComponentUpdate (nextProps, nextState) {
		return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
	};

	render () {
		return (
			<section className="contact-us-service-item">
				{/*<span 
					className="contact-us-service-item-icon iconfont"
					dangerouslySetInnerHTML={{ __html: this.props.icon }}
					></span>*/}
				<a className="contact-us-service-item-icon" href="/ContactUs">
					<div className="contact-us-service-item-circle"></div>
					<div className="contact-us-service-item-circle-left"></div>
					<div className="contact-us-service-item-circle-right"></div>
					<Icon className="contact-us-service-item-iconfont" size="50">{ this.props.icon }</Icon>
				</a>
				<p className="contact-us-service-item-title">{ this.props.title }</p>
				<p className="contact-us-service-item-describe">{ this.props.describe }</p>
			</section>
		);
	};
};

export default Service;