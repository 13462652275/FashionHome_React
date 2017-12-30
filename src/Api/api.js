import axios from 'axios';

export default axios;

const baseUrl = '';

export const getFooterList = () => {
	return axios.get(`${baseUrl}/footerList`);
};

export const getBannerList = () => {
	return axios.get(`${baseUrl}/bannerList`);
};

export const getSwiperList = () => {
	return axios.get(`${baseUrl}/swiperList`);
};

export const getIndexProductData = () => {
	return axios.get(`${baseUrl}/indexProductData`);
};

export const getMenuList = () => {
	return axios.get(`${baseUrl}/menuList`);
};