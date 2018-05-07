//基础模块
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//第三方模块
import { fromJS, is } from 'immutable';


class MenuSwiper extends Component {
	static propTypes = {
		className: PropTypes.string,
		style: PropTypes.object
	};

	static defaultProps = {
		className: ''
	};

	constructor (props) {
		super(props);
		this.state = {
			maxDistance: 0,
			clientX: 0,
			currentDistance: 0,
			animation: {
				transition: 'none',
				transform: 'translateX(0px)'
			}
		};

		this.animation = (transition, distance) => {
			this.setState({ animation: { transition, transform: `translateX(${distance}px)` } });
		};

		this.touchStart = e => {
			this.setState({ clientX: e.changedTouches[0].clientX });
		};

		this.touchMove = e => {
			const distance = e.changedTouches[0].clientX - this.state.clientX;
			this.animation('none', this.state.currentDistance + distance);
		};

		this.touchEnd = e => {
			let distance = Number(this.state.animation.transform.substring(11, this.state.animation.transform.length - 3));
			if (- distance > this.state.maxDistance) {
				distance = - this.state.maxDistance;
				this.animation('transform 0.7s', distance);
			} else if (distance > 0) {
				distance = 0;
				this.animation('transform 0.7s', distance);
			};
			this.setState({ currentDistance: distance });
		};
	};

	componentDidMount () {
		const [ viewWidth, menuWidth ] = [
			this.refs.menuSwiper.parentNode.offsetWidth,
			this.refs.menuSwiper.offsetWidth
		];

		this.setState({
			maxDistance: menuWidth > viewWidth ? menuWidth - viewWidth : 0
		});
	};

	shouldComponentUpdate (nextProps, nextState) {
		return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
	};

	render () {
		return (
			<div className={ ('menu-swiper ' + this.props.className).trim() } style={ this.props.style }>
				<div
					style={{ 'display': 'inline-block', ...this.state.animation }}
					onTouchStart={ this.touchStart }
					onTouchMove={ this.touchMove }
					onTouchEnd={ this.touchEnd }
					ref="menuSwiper">
					{ this.props.children }
				</div>
			</div>
		);
	};
};

export default MenuSwiper;