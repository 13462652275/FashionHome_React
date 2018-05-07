//基础模块
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//第三方模块
import { fromJS, is } from 'immutable';

//样式
import './Style/CelebrityLife.css';


class CelebrityLife extends Component {
	constructor (props) {
		super(props);
		this.state = {};
	};

	shouldComponentUpdate (nextProps, nextState) {
		return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
	};

	render () {
		return (
			<div className="celebrity-life">
				{ this.props.children }
				<div className="celebrity-life-container">
					<ImgFrame title="美食">
						<ImgView src={ require('../../Images/join_15.png') } className="celebrity-life-img-cate"/>
						<ImgView src={ require('../../Images/join_21.png') } />
					</ImgFrame>
					<ImgFrame title="旅游" className="celebrity-life-img-travel">
						<ImgView src={ require('../../Images/join_16.png') } />
					</ImgFrame>
					<ImgFrame title="趣味">
						<ImgView src={ require('../../Images/join_18.png') } />
					</ImgFrame>
					<ImgFrame title="现场" className="celebrity-life-img-locale">
						<ImgView src={ require('../../Images/join_25.png') } />
					</ImgFrame>
					<div>
						<ImgFrame title="艺术">
							<ImgView src={ require('../../Images/join_27.png') } />
						</ImgFrame>
						<ImgFrame title="艺术">
							<div className="celebrity-life-img-box">
								<ImgView src={ require('../../Images/join_30.png') } />
								<ImgView src={ require('../../Images/join_32.png') } />
							</div>
						</ImgFrame>
					</div>
				</div>
			</div>
		);
	};
};

class ImgFrame extends Component {
	static propTypes = {
		title: PropTypes.string.isRequired,
		children: PropTypes.any.isRequired,
		className: PropTypes.string,
		style: PropTypes.object
	};

	static defaultProps = {
		className: ''
	};

	shouldComponentUpdate (nextProps, nextState) {
		return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
	};

	render () {
		return (
			<div className={ ('celebrity-life-img-frame ' + this.props.className).trim() } style={ this.props.style }>
				{ this.props.children }
				<p>{ this.props.title }</p>
			</div>
		);
	};
};

class ImgView extends Component {
	static propTypes = {
		src: PropTypes.string.isRequired,
		className: PropTypes.string,
		style: PropTypes.object
	};

	static defaultProps = {
		className: ''
	};

	shouldComponentUpdate (nextProps, nextState) {
		return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
	};

	render () {
		return (
			<div className={ ('celebrity-life-img-view ' + this.props.className).trim() } style={ this.props.style }>
				<img src={ this.props.src } alt=""/>
			</div>
		);
	};
};

export default CelebrityLife;