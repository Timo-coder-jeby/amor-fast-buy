import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { toast } from '@/hooks/use-toast';
import { getGlobalLoadingManager } from '@/store/loading.tsx';


interface RequestConfig extends AxiosRequestConfig {
  check?: boolean;
}

class RequestService {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: import.meta.env.VITE_API_BASE_URL || '',
      timeout: 10000,
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {
    // 请求拦截器
    this.instance.interceptors.request.use(
      (config) => {
        getGlobalLoadingManager().showLoading();
        return config;
      },
      (error) => {
        getGlobalLoadingManager().hideLoading();
        return Promise.reject(error);
      }
    );

    // 响应拦截器
    this.instance.interceptors.response.use(
      ({config,data}:any) => {
        getGlobalLoadingManager().hideLoading();
        return config?.check ? (data?.data || data) : data;
      },
      (error) => {
        getGlobalLoadingManager().hideLoading();
        toast({
          title: '请求失败',
          description: error.response?.data?.message || error.message || '网络错误',
        });
        return Promise.reject(error);
      }
    );
  }


  get<T = any>(url: string,params?:any, config?: RequestConfig): Promise<AxiosResponse<T>> {
    return this.instance.get<T>(url, {params,...config});
  }

  post<T = any>(url: string, data?: any, config?: RequestConfig): Promise<AxiosResponse<T>> {
    return this.instance.post<T>(url, data, config);
  }

  put<T = any>(url: string, data?: any, config?: RequestConfig): Promise<AxiosResponse<T>> {
    return this.instance.put<T>(url, data, config);
  }

  delete<T = any>(url: string, config?: RequestConfig): Promise<AxiosResponse<T>> {
    return this.instance.delete<T>(url, config);
  }
}

export default new RequestService();

