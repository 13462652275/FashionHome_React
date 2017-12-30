/*
 * action 类型
 */

export const CHANGE_INDEX = 'CHANGE_INDEX';
export const ONE = 'ONE';

/*
 * action 创建函数
 */

export const changeIndex = (value) => {
  return { type: CHANGE_INDEX, value };
};

export const one = (value) => {
  return { type: ONE, value };
};