//基础模块
import React, { Component } from 'react';
import { fromJS, is } from 'immutable';
import PropTypes from 'prop-types';

//样式
import './Style/CaseItem.css';


class CaseFloor extends Component {
	static propTypes = {
		layout: PropTypes.string,
		data: PropTypes.object.isRequired
	};

	static defaultProps = {
		layout: 'left'
	};

	shouldComponentUpdate (nextProps, nextState) {
		return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
	};

	render () {
		let [ left, right ] = [ 'left', 'right' ];
		if (this.props.layout === 'right') {
			left = 'right';
			right = 'left';
		};
		return (
			<div className="case-floor">
				<div className={"case-floor-left " + left}>
					<CaseFloorItem data={this.props.data.big}></CaseFloorItem>
				</div>
				<div className={"case-floor-right " + right}>
					{
						this.props.data.small.map((item, i) => (<CaseFloorItem data={item} key={i}></CaseFloorItem>))
					}
				</div>
			</div>
		);
	};
};

class CaseFloorItem extends Component {
	static propTypes = {
		data: PropTypes.object.isRequired,
	};

	shouldComponentUpdate (nextProps, nextState) {
		return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
	};

	render () {
		return (
			<div className="case-floor-item">
				<div className="case-floor-frame">
					<img src={this.props.data.img} alt="" />
				</div>
				<p>{this.props.data.title}</p>
				<a href={this.props.data.url}>阅读全文</a>
			</div>
		);
	};
};

export default CaseFloor;