//基础模块
import React, { Component } from 'react';

//第三方模块
import { fromJS, is } from 'immutable';

//样式
import './Style/HeaderInfo.css';


class HeaderInfo extends Component {
	constructor (props) {
		super(props);
		this.state = {};
	};

	shouldComponentUpdate (nextProps, nextState) {
		return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
	};

	render () {
		return (
			<article className="contact-us-banner">
				<img src={ require('../../Images/contact-us.jpg') } alt=""/>
				<h2 className="contact-us-info">
					<p className="contact-us-company-name">河南省时尚家居有限公司</p>
					<p className="contact-us-relation">地址：河南省郑州市金水区郑汴路66号</p>
					<p className="contact-us-relation">电话：0370—88888888</p>
					<p className="contact-us-relation">邮编：450000</p>
					<p className="contact-us-web-address">网址：www.fashionhome.com</p>
				</h2>
			</article>
		);
	};
};

export default HeaderInfo;