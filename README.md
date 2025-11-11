# Amor Fast Buy 🛒

一个现代化的快速购物平台，提供智能商品推荐、价格比较和便捷购买体验。

## ✨ 特性

- 🎯 智能商品搜索和推荐
- 💰 多平台价格比较
- 🎁 节日礼盒推荐
- 📱 响应式设计
- ⚡ 快速加载和流畅动画
- 🔍 SEO 优化

## 🛠️ 技术栈

- **框架**: React 19 + Vite
- **路由**: React Router v6
- **状态管理**: Zustand
- **样式**: Tailwind CSS
- **UI 组件**: Radix UI
- **HTTP 客户端**: Axios
- **图标**: Lucide React
- **通知**: Sonner

## 📦 快速开始

### 本地开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 预览生产构建
pnpm preview
```

### 🐳 Docker 部署（推荐）

#### 方法一：使用自动化脚本
```bash
# 一键部署
./deploy.sh

# 查看日志
./deploy.sh logs

# 停止服务
./deploy.sh stop
```

#### 方法二：使用 Docker Compose
```bash
# 启动服务
docker-compose up -d

# 查看日志
docker-compose logs -f

# 停止服务
docker-compose down
```

#### 方法三：手动 Docker 命令
```bash
# 构建镜像
docker build -t amor-fast-buy:latest .

# 运行容器
docker run -d --name amor-fast-buy -p 8080:80 amor-fast-buy:latest

# 访问应用
open http://localhost:8080/amor-fast-buy/
```

### 📚 详细文档

- **[Docker 安装指南](./DOCKER_INSTALL.md)** - Docker 环境安装教程
- **[Docker 部署文档](./DOCKER_DEPLOY.md)** - 完整的 Docker 部署指南
- **[部署脚本说明](./deploy.sh)** - 自动化部署脚本

## 🌐 访问地址

- **开发环境**: http://localhost:5173
- **生产环境**: http://localhost:8080/amor-fast-buy/

## 📁 项目结构

```
amor-fast-buy/
├── src/
│   ├── components/       # React 组件
│   │   ├── AmorHome/    # 首页组件
│   │   ├── Details/     # 详情页组件
│   │   └── ui/          # UI 基础组件
│   ├── pages/           # 页面组件
│   ├── routes/          # 路由配置
│   ├── service/         # API 服务
│   ├── store/           # 状态管理
│   ├── hooks/           # 自定义 Hooks
│   └── lib/             # 工具函数
├── public/              # 静态资源
├── docs/                # 构建输出目录
├── Dockerfile           # Docker 镜像配置
├── docker-compose.yml   # Docker Compose 配置
├── nginx.conf           # Nginx 服务器配置
└── deploy.sh            # 自动化部署脚本
```

## 🔧 配置说明

### 环境变量

创建 `.env` 文件：
```env
VITE_API_BASE_URL=http://18.166.177.4:8080
```

### 构建配置

- 输出目录: `docs/`
- 基础路径: `/amor-fast-buy/`
- 构建工具: Vite

### Nginx 配置

- GZIP 压缩
- 静态资源缓存（1年）
- SPA 路由支持
- API 代理

## 🚀 部署流程

### 1. 本地测试
```bash
pnpm build
pnpm preview
```

### 2. Docker 部署
```bash
./deploy.sh
```

### 3. 生产环境
```bash
# 打标签
docker tag amor-fast-buy:latest yourregistry/amor-fast-buy:1.0.0

# 推送镜像
docker push yourregistry/amor-fast-buy:1.0.0

# 在服务器上部署
docker pull yourregistry/amor-fast-buy:1.0.0
docker run -d --name amor-fast-buy -p 80:80 yourregistry/amor-fast-buy:1.0.0
```

## 📊 性能优化

- ✅ 代码分割和懒加载
- ✅ 图片懒加载
- ✅ GZIP 压缩
- ✅ 浏览器缓存
- ✅ CDN 加速（可配置）

## 🐛 故障排查

### Docker 相关问题

```bash
# 查看容器日志
docker logs -f amor-fast-buy

# 查看容器状态
docker ps -a

# 重启容器
docker restart amor-fast-buy

# 清理并重新部署
./deploy.sh clean
./deploy.sh
```

### 开发问题

```bash
# 清理依赖重新安装
rm -rf node_modules pnpm-lock.yaml
pnpm install

# 清理构建缓存
rm -rf dist docs .vite
pnpm build
```

## 🤝 贡献指南

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📝 开发规范

- 使用 TypeScript 进行类型检查
- 遵循 ESLint 规则
- 组件使用函数式编程
- 使用 Hooks 管理状态
- CSS 使用 Tailwind 工具类

## 📄 许可证

MIT License

## 📞 联系方式

- 项目地址: https://github.com/yourusername/amor-fast-buy
- 问题反馈: https://github.com/yourusername/amor-fast-buy/issues

---

**Made with ❤️ by Amor Team**

