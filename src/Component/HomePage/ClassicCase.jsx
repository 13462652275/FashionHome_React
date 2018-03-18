import React, { Component } from 'react';
import { fromJS, is } from 'immutable';
import { Link } from 'react-router-dom';

import swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import './Style/ClassicCase.css';

class ClassicCase extends Component {
	constructor(props) {
		super(props);
		this.state = {
			bannerList: [],
			bannerWidth: 0,
			currentIndex: 0
		};
	}

	shouldComponentUpdate (nextProps, nextState) {
		return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
	}

	componentDidUpdate (nextProps) {
		new swiper(this.refs.banner, {
			effect : 'coverflow',
			slidesPerView: 5,
			centeredSlides: true,
			pagination : '.swiper-pagination',
			paginationClickable :true,
			speed: 800,
			slideToClickedSlide:true,
			initialSlide: Math.ceil(this.props.swiperList.length / 2 - 1),
			coverflow: {
				rotate: 25,
				stretch: 0,
				depth: 100,
				modifier: 2,
				slideShadows : false
			}
		});
	}

	render () {
		return (
			<div className="index-case">
				{this.props.children}
				<div className="case-banner">
					<div className="swiper-container" ref="banner">
						<div className="swiper-wrapper">
							{
								this.props.swiperList.map((item, i) => {
									return (
										<div className="swiper-slide" key={i}>
											<Link to={item.url}>
												<img src={item.img} alt={item.alt} />
											</Link>
										</div>
									);
								})
							}
						</div>
						<div className="swiper-pagination"></div>
					</div>
				</div>
			</div>
		);
	}
};

export default ClassicCase;