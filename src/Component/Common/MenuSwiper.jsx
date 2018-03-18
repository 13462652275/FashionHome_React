import React, { Component } from 'react';
import { fromJS, is } from 'immutable';

class MenuSwiper extends Component {
	constructor (props) {
		super(props);
		this.state = {
			navWidth: '100%',
			maxDistance: 0,
			clientX: 0,
			currentDistance: 0,
			animation: {
				transition: 'none',
				transform: 'translateX(0px)'
			}
		}

		this.animation = (transition, distance) => {
			this.setState({ animation: { transition, transform: `translateX(${distance}px)` } });
		}

		this.touchStart = e => {
			this.setState({ clientX: e.changedTouches[0].clientX });
		}

		this.touchMove = e => {
			const distance = e.changedTouches[0].clientX - this.state.clientX;
			this.animation('none', this.state.currentDistance + distance);
		}

		this.touchEnd = e => {
			let distance = Number(this.state.animation.transform.substring(11, this.state.animation.transform.length - 3));
			if (- distance > this.state.maxDistance) {
				distance = - this.state.maxDistance;
				this.animation('transform 0.7s', distance);
			} else if (distance > 0) {
				distance = 0;
				this.animation('transform 0.7s', distance);
			}
			this.setState({ currentDistance: distance });
		}
	}

	shouldComponentUpdate(nextProps, nextState) {
		return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
	}

	componentDidUpdate (nextProps) {
		const navWidth = this.refs.navSwiper.offsetWidth;
		this.setState({
			navWidth,
			maxDistance: navWidth > window.innerWidth ? navWidth - window.innerWidth : 0
		});
	}

	render () {
		let className = 'nav-swiper ';
		if (this.props.className) {
			className += this.props.className;
		};
		return (
			<div className={className.trim()}>
				<div
					style={{ 'display': 'inline-block', ...this.state.animation}}
					onTouchStart={this.touchStart}
					onTouchMove={this.touchMove}
					onTouchEnd={this.touchEnd}
					ref="navSwiper">
					{ this.props.children }
				</div>
			</div>
		);
	}
}

export default MenuSwiper;