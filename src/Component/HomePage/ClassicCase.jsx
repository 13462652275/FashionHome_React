//基础模块
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fromJS, is } from 'immutable';

//引入第三方模块
import swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';

//样式
import './Style/ClassicCase.css';


class ClassicCase extends Component {
	constructor (props) {
		super(props);
		this.state = {
			bannerList: [],
			bannerWidth: 0,
			currentIndex: 0
		};
	};

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
	};

	shouldComponentUpdate (nextProps, nextState) {
		return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
	};

	render () {
		return (
			<div className="index-case">
				{ this.props.children }
				<div className="case-banner">
					<div className="swiper-container" ref="banner">
						<div className="swiper-wrapper">
							{
								this.props.swiperList.map((item, i) => {
									return (
										<div className="swiper-slide" key={ i }>
											<Link to={ item.url }>
												<img src={ item.img } alt={ item.alt } />
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
	};
};

export default ClassicCase;