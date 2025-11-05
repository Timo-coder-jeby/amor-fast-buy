import request from '@service';

// ============ 产品相关接口 ============

/**
 * 获取热销产品列表
 * @param size 获取数量限制
 * @param queryType 查询类型 0 商品 1 热销
 * @param title
 */
export const getTopSellingProducts = async (size: number = 3,queryType?: number,title?: string | undefined) => {
  return request.post('/api/products/list', { size,queryType: queryType ?? 1,title: title || undefined }, { check: true });
};

/**
 * 获取产品详情
 * @param productId 产品ID
 */
export const getProductDetail = async (productId: number | string): Promise<any> => {
  return request.get(`/api/products/${productId}`, {}, { check: true });
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


