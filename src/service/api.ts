/**
 * API 接口封装
 * 统一管理所有的接口请求
 */

import request from '@service';

// ============ 产品相关接口 ============

/**
 * 获取热销产品列表
 * @param limit 获取数量限制
 */
export const getTopSellingProducts = async (limit: number = 3) => {
  return request.get('/api/products/top-selling', { limit }, { check: true });
};

/**
 * 获取产品详情
 * @param productId 产品ID
 */
export const getProductDetail = async (productId: number | string) => {
  return request.get(`/api/products/${productId}`, {}, { check: true });
};

/**
 * 搜索产品
 * @param keyword 搜索关键词
 * @param page 页码
 * @param pageSize 每页数量
 */
export const searchProducts = async (keyword: string, page: number = 1, pageSize: number = 10) => {
  return request.get('/api/products/search', { keyword, page, pageSize }, { check: true });
};

// ============ 礼品盒相关接口 ============

/**
 * 获取盲盒列表
 */
export const getGiftBoxes = async () => {
  return request.get('/api/blind-boxes', {}, { check: true });
};

/**
 * 获取礼品盒详情
 * @param boxId 礼品盒ID
 */
export const getGiftBoxDetail = async (boxId: number | string) => {
  return request.get(`/api/gift-boxes/${boxId}`, {}, { check: true });
};

// ============ 社区相关接口 ============

/**
 * 获取社区帖子列表
 * @param page 页码
 * @param pageSize 每页数量
 */
export const getCommunityPosts = async (page: number = 1, pageSize: number = 10) => {
  return request.get('/api/community/posts', { page, pageSize }, { check: true });
};

// ============ 用户相关接口 ============

/**
 * 获取用户信息
 */
export const getUserInfo = async () => {
  return request.get('/api/user/info', {}, { check: true });
};

/**
 * 更新用户偏好
 * @param preferences 用户偏好数据
 */
export const updateUserPreferences = async (preferences: any) => {
  return request.post('/api/user/preferences', preferences, { check: true });
};

// ============ 推荐相关接口 ============

/**
 * 获取个性化推荐产品
 * @param limit 推荐数量
 */
export const getRecommendedProducts = async (limit: number = 3) => {
  return request.get('/api/recommendations', { limit }, { check: true });
};

/**
 * 基于搜索的产品推荐
 * @param searchQuery 搜索关键词
 * @param limit 推荐数量
 */
export const getSearchBasedRecommendations = async (searchQuery: string, limit: number = 3) => {
  return request.get('/api/recommendations/search', { query: searchQuery, limit }, { check: true });
};

