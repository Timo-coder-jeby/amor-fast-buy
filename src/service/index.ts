import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

// 响应数据接口
interface ResponseData<T = any> {
  code: number;
  data: T;
  message: string;
}

// 请求配置接口
interface RequestConfig extends AxiosRequestConfig {
  // 是否显示错误提示
  showError?: boolean;
  // 是否显示成功提示
  showSuccess?: boolean;
}

class HttpRequest {
  private instance: AxiosInstance;
  private baseURL: string;
  constructor(baseURL: string = import.meta.env.VITE_API_BASE_URL) {
    console.log('API Base URL:', import.meta.env);
    this.baseURL = baseURL;
    this.instance = axios.create({
      baseURL: this.baseURL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.setupInterceptors();
  }

  // 设置拦截器
  private setupInterceptors(): void {
    // 请求拦截器
    this.instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        // 在发送请求之前做些什么
        // 1. 添加 token
        const token = localStorage.getItem('token') || sessionStorage.getItem('token');
        if (token && config.headers) {
          config.headers.Authorization = `Bearer ${token}`;
        }

        // 2. 添加时间戳防止缓存
        if (config.method === 'get') {
          config.params = {
            ...config.params,
            _t: Date.now(),
          };
        }
        return config;
      },
      (error) => {
        // 对请求错误做些什么
        console.error('请求错误:', error);
        return Promise.reject(error);
      }
    );

    // 响应拦截器
    this.instance.interceptors.response.use(
      (response: AxiosResponse) => {
        // 2xx 范围内的状态码都会触发该函数
        const { data } = response;

        // 如果响应数据包含业务状态码，进行处理
        if (data && typeof data === 'object' && 'code' in data) {
          // 根据业务状态码进行处理
          if (data.code === 200 || data.code === 0) {
            return response;
          }

          // 处理业务错误
          if (data.code === 401) {
            // token 过期，跳转到登录页
            console.error('登录已过期，请重新登录');
            localStorage.removeItem('token');
            sessionStorage.removeItem('token');
            // 可以在这里跳转到登录页
            // window.location.href = '/login';
          }

          console.error('业务错误:', data.message);
          return Promise.reject(data);
        }

        // 没有业务状态码，直接返回响应
        return response;
      },
      (error) => {
        // 超出 2xx 范围的状态码都会触发该函数
        console.error('响应错误:', error);

        // 处理 HTTP 错误
        if (error.response) {
          const { status } = error.response;
          switch (status) {
            case 400:
              console.error('请求参数错误');
              break;
            case 401:
              console.error('未授权，请登录');
              localStorage.removeItem('token');
              sessionStorage.removeItem('token');
              break;
            case 403:
              console.error('拒绝访问');
              break;
            case 404:
              console.error('请求的资源不存在');
              break;
            case 500:
              console.error('服务器错误');
              break;
            case 502:
              console.error('网关错误');
              break;
            case 503:
              console.error('服务不可用');
              break;
            case 504:
              console.error('网关超时');
              break;
            default:
              console.error(`连接错误 ${status}`);
          }
        } else if (error.request) {
          console.error('网络错误，请检查网络连接');
        } else {
          console.error('请求配置错误:', error.message);
        }

        return Promise.reject(error);
      }
    );
  }

  // GET 请求
  async get<T = any>(url: string, params?:any,config?: RequestConfig): Promise<ResponseData<T>> {
    const response = await this.instance.get(url, {params,...config});
    return response.data;
  }

  // POST 请求
  async post<T = any>(url: string, data?: any, config?: RequestConfig): Promise<ResponseData<T>> {
    const response = await this.instance.post(url, data, config);
    return response.data;
  }

  // PUT 请求
  async put<T = any>(url: string, data?: any, config?: RequestConfig): Promise<ResponseData<T>> {
    const response = await this.instance.put(url, data, config);
    return response.data;
  }

  // DELETE 请求
  async delete<T = any>(url: string, config?: RequestConfig): Promise<ResponseData<T>> {
    const response = await this.instance.delete(url, config);
    return response.data;
  }

  // PATCH 请求
  async patch<T = any>(url: string, data?: any, config?: RequestConfig): Promise<ResponseData<T>> {
    const response = await this.instance.patch(url, data, config);
    return response.data;
  }

  // 文件上传
  async upload<T = any>(url: string, formData: FormData, config?: RequestConfig): Promise<ResponseData<T>> {
    const response = await this.instance.post(url, formData, {
      ...config,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  }

  // 获取 axios 实例（用于特殊场景）
  getAxiosInstance(): AxiosInstance {
    return this.instance;
  }
}

// 创建默认实例并导出
const request = new HttpRequest();

export default request;
export { HttpRequest };
export type { ResponseData, RequestConfig };

