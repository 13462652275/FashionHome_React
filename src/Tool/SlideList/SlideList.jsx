//基础模块
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//第三方模块
import { fromJS, is } from 'immutable';

//样式
import './Style/SlideList.css';


class SlideList extends Component {
	static propTypes = {
		slideView: PropTypes.number.isRequired,
		slideNumber: PropTypes.number.isRequired,
		slideWidth: PropTypes.number.isRequired,
		ifStart: PropTypes.bool,
		className: PropTypes.string
	};

	static defaultProps = {
		slideView: 1,
		ifStart: true,
		className: ''
	};

	constructor (props) {
		super(props);
		this.state = {
			currentIndex: 0,
			indexLimit: this.props.slideNumber - this.props.slideView,
			animation: {
				transition: 'none',
				transform: 'translateX(0px)'
			}
		};

		this.isSlide = false;

		this.animation = (transition, distance) => {
			this.setState({ animation: { transition, transform: `translateX(${ distance }px)` } });
		};

		this.prev = () => {
			if (!this.isSlide) {
				this.isSlide = true;
				let currentIndex = this.state.currentIndex;
				currentIndex = currentIndex <= 0 ? 0 : currentIndex - 1;
				if (currentIndex === this.state.currentIndex) {
					this.transitionCallBack();
					return;
				};
				this.setState({ currentIndex });
				this.animation('transform 0.7s', - currentIndex * this.props.slideWidth);
			};
		};

		this.next = () => {
			if (!this.isSlide) {
				this.isSlide = true;
				let currentIndex = this.state.currentIndex;
				currentIndex = currentIndex >= this.state.indexLimit ? this.state.indexLimit : currentIndex + 1;
				if (currentIndex === this.state.currentIndex) {
					this.transitionCallBack();
					return;
				};
				this.setState({ currentIndex });
				this.animation('transform 0.7s', - currentIndex * this.props.slideWidth);
			};
		};

		this.transitionCallBack = () => {
			this.isSlide = false;
		};
	};

	shouldComponentUpdate (nextProps, nextState) {
		return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
	};

	render () {
		const SlideList = (
			<div className={ ('slide-list ' + this.props.className).trim() }>
				<div className="slide-view" ref="slideView">
					<div
						style={{ 'display': 'inline-block', ...this.state.animation }}
						onTransitionEnd={ this.transitionCallBack }
						ref="slideList">
						{ this.props.children }
					</div>
				</div>
				<div className="slide-list-prev-btn" onClick={ this.prev }></div>
				<div className="slide-list-next-btn" onClick={ this.next }></div>
			</div>
		);
		return this.props.ifStart ? SlideList : this.props.children;
	};
};

export default SlideList;