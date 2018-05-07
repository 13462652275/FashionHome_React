//基础模块
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//第三方模块
import { fromJS, is } from 'immutable';

//样式
import './Style/Banner.css';


class Banner extends Component {
	constructor (props) {
		super(props);
		this.state = {
			bannerList: [],
			bannerWidth: 0,
			currentIndex: 1,
			clienX: 0,
			animation: {}
		};
		this.timeID = null;
		this.autoTime = null;
		this.resize = () => {
			clearTimeout(this.timeID);
			this.timeID = setTimeout(() =>{
				this.setState({ bannerWidth: this.refs.banner.clientWidth });
			}, 300);
		};
		this.bannerFlag = true;

		this.animation = (currentIndex, transition) => {
			this.setState({
				currentIndex,
				animation: {
					width: this.state.bannerWidth * this.state.bannerList.length,
					transition,
					left: - this.state.bannerWidth * currentIndex
				}
			});
		};

		this.nextPicture = () => {
			if (this.bannerFlag) {
				this.bannerFlag = false;
				let currentIndex = this.state.currentIndex + 1;
				currentIndex = currentIndex > this.state.bannerList.length - 1 ? 0 : currentIndex;
				this.animation(currentIndex, 'left 1s');
			};
		};

		this.prevPicture = () => {
			if (this.bannerFlag) {
				this.bannerFlag = false;
				let currentIndex = this.state.currentIndex - 1;
				currentIndex = currentIndex < 0 ? this.state.bannerList.length - 1 : currentIndex;
				this.animation(currentIndex, 'left 1s');
			};
		};

		this.autoPlay = () => {
			this.nextPicture();
			this.autoTime = setTimeout(this.autoPlay, 5000);
		};

		this.touchStart = e => {
			clearTimeout(this.autoTime);
			this.setState({ clientX: e.changedTouches[0].clientX });
		};

		this.touchMove = e => {
			if (this.bannerFlag) {
				this.setState({
					animation: {
						width: this.state.bannerWidth * this.state.bannerList.length,
						transition: 'none',
						left: - this.state.bannerWidth * this.state.currentIndex + e.changedTouches[0].clientX - this.state.clientX
					}
				});
			};
		};

		this.touchEnd = e => {
			const [ distance, bannerWidth ] = [ e.changedTouches[0].clientX - this.state.clientX, this.state.bannerWidth ];
			if (distance / bannerWidth >= 0.3) {
				this.prevPicture();
			} else if (distance / bannerWidth <= -0.3) {
				this.nextPicture();
			} else {
				this.animation(this.state.currentIndex, 'left 1s');
			};
			this.startAutoPlay();
		};

		this.startAutoPlay = () => {
			this.autoTime = setTimeout(this.autoPlay, 5000);
		};

		this.transitionCallBack = () => {
			this.bannerFlag = true;
			if (this.state.currentIndex === this.state.bannerList.length - 1) {
				this.animation(1, 'none');
			} else if (this.state.currentIndex === 0) {
				this.animation(this.props.bannerList.length, 'none');
			};
		};
	};

	componentDidMount () {
		window.addEventListener('resize', this.resize);
		this.setState({ bannerWidth: this.refs.banner.clientWidth });
	};

	componentWillUpdate (nextProps) {
		if (nextProps.bannerList.length > 0 && !is(fromJS(this.props), fromJS(nextProps))) {
			let bannerList = [ ...nextProps.bannerList ];
			bannerList.unshift(nextProps.bannerList[nextProps.bannerList.length - 1]);
			bannerList.push(nextProps.bannerList[0]);
			this.setState({
				bannerList,
				animation: {
					width: this.state.bannerWidth * bannerList.length,
					left: - this.state.bannerWidth * this.state.currentIndex
				}
			});
			this.startAutoPlay();
		};
	};

	componentWillUnmount () {
		clearTimeout(this.timeID);
		clearTimeout(this.autoTime);
		window.removeEventListener('resize', this.resize);
	};

	shouldComponentUpdate (nextProps, nextState) {
		return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
	};

	render () {
		return (
			<div 
				className="banner-container" 
				style={{ height: this.state.bannerWidth / (1920 / 742) }} 
				ref="banner">
				<div 
					className="banner-view"
					style={{ marginLeft: - this.state.bannerWidth / 2 }} 
					onMouseOver={ () => {clearTimeout(this.autoTime) }}
					onMouseLeave={ this.startAutoPlay }
					onTouchStart={ this.touchStart }
					onTouchMove={ this.touchMove }
					onTouchEnd={ this.touchEnd }>
					<ul 
						className="banner-list cleafix"
						onTransitionEnd={ this.transitionCallBack }
						style={ this.state.animation }>
						{
							this.state.bannerList.map((item, i) => {
								return (
									<li style={{ width: this.state.bannerWidth }} key={ i }>
										<Link to={ item.url }>
											<img src={ item.img } alt={ item.alt }/>
										</Link>
									</li>
								);
							})
						}
					</ul>
					<ul className="banner-pagination">
						{
							this.props.bannerList.map((item, i) => {
								let currentIndex = this.state.currentIndex;
								currentIndex = currentIndex === 0 ? this.props.bannerList.length - 1 : currentIndex === this.state.bannerList.length - 1 ? 0 : currentIndex - 1;
								return (
									<li 
										className={ i === currentIndex ? 'active-pagination' : '' }
										onClick={ this.animation.bind(this, i + 1, 'left 1s') } 
										key={ i }></li>
								);
							})
						}
					</ul>
					<div 
						className="prev-btn" 
						style={{ left: 0 }}
						onClick={ this.prevPicture }
						onTouchStart={ this.prevPicture }>
						<img className="btn-arrow" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAADICAMAAAAUcNWVAAAAQlBMVEUAAAD////v7+/n5+fq6urn5+fm5ubn5+fn5+fl5eXm5ubl5eXm5ubm5ubm5ubm5ubl5eXl5eXm5ubl5eXm5ubm5ub/90GGAAAAFXRSTlMAABAgMEBQYH+AkJ+gsL/Az9Df7/Bmsp44AAADA0lEQVR42u3c2W7bMBAFUC123PYh+f+/LII2qW0tdRMUtSmRnOXe6QvnhSII6ICgRFHAYPq++z8xdA1ucIMb3GBhHO47K0W4EdN0u+jzMIP9dvrTnN+mZGDkfp0OL8fP9nRd+sA1Prz8vf/wHDnjf+5NnuewGd+7XfcU9jo9uqk0RLlhG8jGvcbA2/meQ+Ct+3OOgLfu+1vEGu+4PyIeLonLgEUuAZa5eFjowmGpi4bFLhiWu1hY4UJhjYuEVS4Q1rk4WOnCYK2LgtUuCNa7GNjgQmCLi4BNLgC2uX7Y6Lphq+uFza4Ttrs+2OG6YI/rgV2uA/a5dtjpmmGva4XdrhH2uzYY4JpghGuBIa4Bxrh6GOSqYZSrhWGuEsa5OhjoqmCkq4GhrgLGunIY7IphtCuF4a4QxrsymOCKYIYrgSmuAOa4dZjkVmGWW4NpbgXmuWWY6BZhpluCqW4B5rp5mOxmYbabg+luBua7+3CAuwtHuHtwiLsDx7hbOMjdwFFuCoe5CTyEuQl8CnMT+GuYm8BjmFs8gTDd8tFniIIT6Pg8BMHLGic/pkeuSSrheLzg0mL7Arw8DTy5BK/Tl54ml+BuufDkIsyUyzBRrsA8uQbT5CrMkuswSRbAHFkCU2QRzJBlMEEWwnhZCsNlMYyW5TBYVsBYWQNDZRWMlHUwUFbCOFkLw2Q1jJL1MEg2wBjZAkNkE4yQbTBANsJ+2Qq7ZTPsle2wU3bAPtkDu2QX7JF9sEN2wnbZC5tlN2yV/bBRBsA2GQGbZAhskTGwQQbBehkFq2UYrJVxsFIGwjoZCatkKKyRsbBCBsNyGQ2LZTgslfGwUCbAMpkBi2QKLJE5sEAmwXWZBVdlGlyTeXBFJsJlmQkXZSpckrlwQSbDeZkNZ2U6nJP5cEYOgPfk7hoB78jH6xIB78jzFALvyI91snh5U9P34m86MVUskZcwOJEvcfCDPJ0D4Tt5fU2GyLUUl1/9RzHF99cl2TL7+y6lbOU4jvNHOcMCHBmtJmqDG9zgBovjNxVq/yvCsoqIAAAAAElFTkSuQmCC" alt=""/>
					</div>
					<div 
						className="next-btn" 
						style={{ right: 0 }}
						onClick={ this.nextPicture }
						onTouchStart={ this.nextPicture }>
						<img className="btn-arrow" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAADICAMAAAAUcNWVAAAATlBMVEXl5eXm5ubn5+fq6urv7+/////v7+/n5+fq6urn5+fm5ubn5+fn5+fl5eXm5ubl5eXm5ubm5ubm5ubm5ubl5eXl5eXm5ubl5eXm5ubm5uZa7aLiAAAAGXRSTlMAAAAAAAAQIDBAUGB/gJCfoLC/wM/Q3+/wWm8YFQAAAs5JREFUeNrt3MtS3FAMBNDxIx4DAxkg4Ln//6MpyCpg69ktNrd/4JQW0krVp18/lFOHO9zhDnc4BI/jPJzvH+/PwzyhM88ivFzbR65LMXy+tX+5rbXwW2ssWYQfWqPJIvzceLIIvzae7ICxsgg/NZ4swneNJ8vr9Jsni/C8/KHJMkyUFZgnazBNVmGWrMMk2QBzZAtMkU0wQ7bBBNkI42UrDJfNMFq2w2DZAWNlDwyVXTBS9sFA2QnjZC8Mk90wSvbDIDkAY+QIDJFDMEKOwQA5COflKJyWw3BWjsNJOQHn5AycklNwRs7BCTkJx+UsHJbTcFTOw0EZAMdkBBySIXBExsABGQT7ZRTslmGwV8bBThkI+2Qk7JKhsEfGwg4ZDNtlNGyW4bBVxsNGmQDbZAZskimwRebABpkE6zILVmUarMk8WJGJsCwzYVGmwpLMhQWZDB/LbPhQpsNHMh8+kAvgfbkC3pVL4B35bSmBd+THUwn8Xb7VTLwjL0XwN7lq4nm+/g8P0lvVAMwXtwz+6r4XwVfXOo08dxMPyMhz5ZM58typAt5zK+BdtwDed/nwgUuHj1w2fOiS4WOXCwsuFZZcJiy6RFh2ebDi0mDNZcGqS4J1lwMbXApscRmwySXANhcPG104bHXRsNkFw3YXCztcKOxxkbDLBcI+Fwc7XRjsdVGw2wXBfhcDB1wIHHERcMgFwDE3DwfdNBx1s3DYTcJxNwcn3BSccTNwyk3AOTcOJ90wnHWjcNoNwnk3BgPcEIxwIzDEDcAY1w+DXDeMcr0wzHXCONcHA10XjHQ9MNR1wFjXDoNdM4x2rTDcNcJ41wYTXBPMcC0wxTXAHFeHSa4Ks1wNprkK/ERzZfjMc301WVtVTdYrz/XAW10V2jPPtdfdbZV1d+M7zZXhad1YrgJP68un+wJ3NXga1svlsg5TLfxjRZ0d7nCHO9xhKX8BRIBNDxEXSScAAAAASUVORK5CYII=" alt=""/>
					</div>
				</div>
				{ this.props.children }
			</div>
		);
	};
};

export default Banner;