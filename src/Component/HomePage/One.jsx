import React, { Component } from 'react';
import { fromJS, is } from 'immutable';
import { changeIndex } from '../../Redux/Action/Action';
import { dispatch } from '../../Redux/Store/Store';

import ReactSwipe from 'react-swipe';

class One extends Component {
	componentWillMount () {
		dispatch(changeIndex(this.props.index));
		this.props.setIndex();
	}

	shouldComponentUpdate(nextProps, nextState) {
		return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
	}

	render () {
		const options = {
			effect : 'coverflow',
			slidesPerView: 5,
			centeredSlides: true,
			pagination : '.swiper-pagination',
			paginationClickable :true,
			speed: 800,
			slideToClickedSlide:true,
			initialSlide: 9 / 2 - 1,
			coverflow: {
				rotate: 25,
				stretch: 0,
				depth: 100,
				modifier: 2,
				slideShadows : false
			}
		};
		return (
			<div className="case-banner">
				<ReactSwipe className="carousel" swipeOptions={options}>
					<div className="swiper-slide">
						<a href="javascript:void(0);">
							<img src={require('../../Images/index_classic_01.jpg')} alt="" />
						</a>
					</div>
					<div className="swiper-slide">
						<a href="javascript:void(0);">
							<img src={require('../../Images/index_classic_01.jpg')} alt="" />
						</a>
					</div>
					<div className="swiper-slide">
						<a href="javascript:void(0);">
							<img src={require('../../Images/index_classic_01.jpg')} alt="" />
						</a>
					</div>
					<div className="swiper-slide">
						<a href="javascript:void(0);">
							<img src={require('../../Images/index_classic_01.jpg')} alt="" />
						</a>
					</div>
					<div className="swiper-slide">
						<a href="javascript:void(0);">
							<img src={require('../../Images/index_classic_01.jpg')} alt="" />
						</a>
					</div>
					<div className="swiper-slide">
						<a href="javascript:void(0);">
							<img src={require('../../Images/index_classic_01.jpg')} alt="" />
						</a>
					</div>
					<div className="swiper-slide">
						<a href="javascript:void(0);">
							<img src={require('../../Images/index_classic_01.jpg')} alt="" />
						</a>
					</div>
					<div className="swiper-slide">
						<a href="javascript:void(0);">
							<img src={require('../../Images/index_classic_01.jpg')} alt="" />
						</a>
					</div>
					<div className="swiper-slide">
						<a href="javascript:void(0);">
							<img src={require('../../Images/index_classic_01.jpg')} alt="" />
						</a>
					</div>
				</ReactSwipe>
				<div className="swiper-pagination"></div>
			</div>
		);
	}
};

export default One;