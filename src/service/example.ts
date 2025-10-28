/**
 * API 使用示例
 *
 * 这个文件展示了如何使用封装的 HttpRequest 类
 */

import request from './index';
import type { ResponseData } from './index';

// ============ 使用示例 ============

// 1. GET 请求示例
export const getUserInfo = async (userId: string) => {
  try {
    const response = await request.get<{ name: string; email: string }>(`/user/${userId}`);
    console.log('用户信息:', response.data);
    return response.data;
  } catch (error) {
    console.error('获取用户信息失败:', error);
    throw error;
  }
};

// 2. POST 请求示例
export const createUser = async (userData: { name: string; email: string }) => {
  try {
    const response = await request.post<{ id: string }>('/user', userData);
    console.log('创建用户成功:', response.data);
    return response.data;
  } catch (error) {
    console.error('创建用户失败:', error);
    throw error;
  }
};

// 3. PUT 请求示例
export const updateUser = async (userId: string, userData: Partial<{ name: string; email: string }>) => {
  try {
    const response = await request.put(`/user/${userId}`, userData);
    console.log('更新用户成功:', response.data);
    return response.data;
  } catch (error) {
    console.error('更新用户失败:', error);
    throw error;
  }
};

// 4. DELETE 请求示例
export const deleteUser = async (userId: string) => {
  try {
    const response = await request.delete(`/user/${userId}`);
    console.log('删除用户成功:', response.data);
    return response.data;
  } catch (error) {
    console.error('删除用户失败:', error);
    throw error;
  }
};

// 5. 文件上传示例
export const uploadFile = async (file: File) => {
  try {
    const formData = new FormData();
    formData.append('file', file);

    const response = await request.upload<{ url: string }>('/upload', formData);
    console.log('上传成功:', response.data);
    return response.data;
  } catch (error) {
    console.error('上传失败:', error);
    throw error;
  }
};

// 6. 带参数的 GET 请求示例
export const getUserList = async (params: { page: number; pageSize: number; keyword?: string }) => {
  try {
    const response = await request.get<{ list: any[]; total: number }>('/users', { params });
    console.log('用户列表:', response.data);
    return response.data;
  } catch (error) {
    console.error('获取用户列表失败:', error);
    throw error;
  }
};

// 7. 自定义配置的请求示例
export const getDataWithCustomConfig = async () => {
  try {
    const response = await request.get('/data', {
      timeout: 5000, // 自定义超时时间
      headers: {
        'Custom-Header': 'custom-value',
      },
    });
    return response.data;
  } catch (error) {
    console.error('获取数据失败:', error);
    throw error;
  }
};

