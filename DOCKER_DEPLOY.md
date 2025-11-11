# Docker 部署指南

本文档介绍如何将 amor-fast-buy 项目打包成 Docker 镜像并部署。

## 前置要求

- Docker 已安装并运行
- 项目代码已准备好

## 快速开始

### 方法一: 使用部署脚本 (推荐)

```bash
# 完整部署 (构建 + 运行)
./deploy.sh

# 或者指定命令
./deploy.sh build    # 仅构建镜像
./deploy.sh run      # 仅运行容器
./deploy.sh restart  # 重启容器
./deploy.sh stop     # 停止容器
./deploy.sh logs     # 查看日志
./deploy.sh clean    # 清理容器和镜像
```

### 方法二: 手动执行 Docker 命令

#### 1. 构建 Docker 镜像

```bash
docker build -t amor-fast-buy:latest .
```

#### 2. 运行容器

```bash
docker run -d \
  --name amor-fast-buy \
  -p 8080:80 \
  --restart unless-stopped \
  amor-fast-buy:latest
```

#### 3. 访问应用

打开浏览器访问: http://localhost:8080

## 常用命令

### 查看运行中的容器

```bash
docker ps
```

### 查看容器日志

```bash
docker logs -f amor-fast-buy
```

### 进入容器

```bash
docker exec -it amor-fast-buy sh
```

### 停止容器

```bash
docker stop amor-fast-buy
```

### 删除容器

```bash
docker rm amor-fast-buy
```

### 删除镜像

```bash
docker rmi amor-fast-buy:latest
```

### 重启容器

```bash
docker restart amor-fast-buy
```

## 配置说明

### 端口配置

默认映射端口为 8080，可以修改 `deploy.sh` 中的 `PORT` 变量或运行时指定:

```bash
docker run -d --name amor-fast-buy -p 3000:80 amor-fast-buy:latest
```

### Nginx 配置

Nginx 配置文件位于 `nginx.conf`，可以根据需要修改:

- 路由配置
- API 代理
- 缓存策略
- GZIP 压缩等

修改后需要重新构建镜像。

### 环境变量

如需配置环境变量，可以在运行容器时添加:

```bash
docker run -d \
  --name amor-fast-buy \
  -p 8080:80 \
  -e NODE_ENV=production \
  -e API_URL=https://api.example.com \
  amor-fast-buy:latest
```

## Docker Compose (可选)

如果项目需要配合其他服务运行，可以创建 `docker-compose.yml`:

```yaml
version: '3.8'

services:
  web:
    build: .
    image: amor-fast-buy:latest
    container_name: amor-fast-buy
    ports:
      - "8080:80"
    restart: unless-stopped
    # environment:
    #   - NODE_ENV=production
    # volumes:
    #   - ./nginx.conf:/etc/nginx/conf.d/default.conf
```

使用方式:

```bash
# 启动
docker-compose up -d

# 停止
docker-compose down

# 查看日志
docker-compose logs -f
```

## 镜像优化

当前镜像使用了多阶段构建:

1. **构建阶段**: 使用 Node.js 22-slim 镜像安装依赖并构建项目
2. **生产阶段**: 使用轻量级 Nginx Alpine 镜像运行应用

最终镜像大小约 30-50MB。

## 故障排查

### 容器无法启动

```bash
# 查看容器日志
docker logs amor-fast-buy

# 查看容器详细信息
docker inspect amor-fast-buy
```

### 端口被占用

```bash
# 查看端口占用
lsof -i :8080

# 使用其他端口
docker run -d --name amor-fast-buy -p 9000:80 amor-fast-buy:latest
```

### 重新构建镜像

```bash
# 清理缓存重新构建
docker build --no-cache -t amor-fast-buy:latest .
```

## 生产环境部署建议

1. **使用特定版本标签**
   ```bash
   docker build -t amor-fast-buy:1.0.0 .
   ```

2. **配置健康检查**
   在 Dockerfile 中添加:
   ```dockerfile
   HEALTHCHECK --interval=30s --timeout=3s \
     CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1
   ```

3. **资源限制**
   ```bash
   docker run -d \
     --name amor-fast-buy \
     --memory="512m" \
     --cpus="1.0" \
     -p 8080:80 \
     amor-fast-buy:latest
   ```

4. **使用 HTTPS**
   - 配置 SSL 证书
   - 使用反向代理 (Nginx/Caddy)

5. **日志管理**
   ```bash
   docker run -d \
     --name amor-fast-buy \
     --log-driver json-file \
     --log-opt max-size=10m \
     --log-opt max-file=3 \
     -p 8080:80 \
     amor-fast-buy:latest
   ```

## 推送到 Docker Registry

### Docker Hub

```bash
# 登录
docker login

# 打标签
docker tag amor-fast-buy:latest yourusername/amor-fast-buy:latest

# 推送
docker push yourusername/amor-fast-buy:latest
```

### 私有 Registry

```bash
# 打标签
docker tag amor-fast-buy:latest registry.example.com/amor-fast-buy:latest

# 推送
docker push registry.example.com/amor-fast-buy:latest
```

## 更新部署

```bash
# 1. 拉取最新代码
git pull

# 2. 重新构建和部署
./deploy.sh

# 或手动执行
docker build -t amor-fast-buy:latest .
docker stop amor-fast-buy
docker rm amor-fast-buy
docker run -d --name amor-fast-buy -p 8080:80 amor-fast-buy:latest
```

