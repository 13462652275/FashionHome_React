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

export const getSortingList = () => {
	return axios.get(`${baseUrl}/sortingList`);
};

export const getSofaData = params => {
	return axios.get(`${baseUrl}/sofaData`, { params });
};

export const getCaseData = () => {
	return axios.get(`${baseUrl}/caseData`);
};

export const getDesignerList = () => {
	return axios.get(`${baseUrl}/designersList`);
};

export const getHotCompanyList = () => {
	return axios.get(`${baseUrl}/hotCompanyList`);
};

export const getHotWorkData = () => {
	return axios.get(`${baseUrl}/hotWorkData`);
};

export const getCelebrityBrandingList = () => {
	return axios.get(`${baseUrl}/celebrityBrandingList`);
};

export const getNewsData = () => {
	return axios.get(`${baseUrl}/newsData`);
};

export const getVideoList = () => {
	return axios.get(`${baseUrl}/videoList`);
};