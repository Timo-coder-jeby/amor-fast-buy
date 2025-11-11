#!/bin/bash

# 快速参考 - Docker 命令速查表

cat << 'EOF'
╔══════════════════════════════════════════════════════════════════╗
║             Amor Fast Buy - Docker 命令速查表                    ║
╚══════════════════════════════════════════════════════════════════╝

📦 构建和部署
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  # 一键部署（推荐）
  ./deploy.sh

  # 使用 Docker Compose
  docker-compose up -d

  # 手动构建和运行
  docker build -t amor-fast-buy:latest .
  docker run -d --name amor-fast-buy -p 8080:80 amor-fast-buy:latest

🔍 查看和监控
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  # 查看运行中的容器
  docker ps

  # 查看所有容器（包括停止的）
  docker ps -a

  # 查看容器日志（实时）
  docker logs -f amor-fast-buy
  ./deploy.sh logs

  # 查看容器详情
  docker inspect amor-fast-buy

  # 查看容器资源使用情况
  docker stats amor-fast-buy

⚙️ 控制容器
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  # 启动容器
  docker start amor-fast-buy

  # 停止容器
  docker stop amor-fast-buy
  ./deploy.sh stop

  # 重启容器
  docker restart amor-fast-buy
  ./deploy.sh restart

  # 暂停容器
  docker pause amor-fast-buy

  # 恢复暂停的容器
  docker unpause amor-fast-buy

🗑️ 清理和维护
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  # 删除容器
  docker rm -f amor-fast-buy

  # 删除镜像
  docker rmi amor-fast-buy:latest

  # 完整清理（容器 + 镜像）
  ./deploy.sh clean

  # 清理所有未使用的资源
  docker system prune -a

  # 清理所有未使用的卷
  docker volume prune

🔧 调试和排查
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  # 进入容器 shell
  docker exec -it amor-fast-buy sh

  # 执行单个命令
  docker exec amor-fast-buy ls -la /usr/share/nginx/html

  # 从容器复制文件到本地
  docker cp amor-fast-buy:/etc/nginx/conf.d/default.conf ./nginx-current.conf

  # 从本地复制文件到容器
  docker cp ./nginx.conf amor-fast-buy:/etc/nginx/conf.d/default.conf

  # 重新构建（不使用缓存）
  docker build --no-cache -t amor-fast-buy:latest .

📊 镜像管理
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  # 查看所有镜像
  docker images

  # 查看特定镜像
  docker images amor-fast-buy

  # 镜像打标签
  docker tag amor-fast-buy:latest amor-fast-buy:1.0.0

  # 保存镜像为文件
  docker save -o amor-fast-buy.tar amor-fast-buy:latest

  # 从文件加载镜像
  docker load -i amor-fast-buy.tar

  # 推送到 Docker Hub
  docker push yourusername/amor-fast-buy:latest

🌐 Docker Compose 命令
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  # 启动服务（后台运行）
  docker-compose up -d

  # 启动服务（前台运行，显示日志）
  docker-compose up

  # 停止服务
  docker-compose down

  # 停止并删除卷
  docker-compose down -v

  # 重新构建并启动
  docker-compose up -d --build

  # 查看服务状态
  docker-compose ps

  # 查看服务日志
  docker-compose logs -f

  # 重启服务
  docker-compose restart

🚀 生产环境部署
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  # 1. 构建生产镜像
  docker build -t amor-fast-buy:1.0.0 .

  # 2. 推送到仓库
  docker tag amor-fast-buy:1.0.0 registry.example.com/amor-fast-buy:1.0.0
  docker push registry.example.com/amor-fast-buy:1.0.0

  # 3. 在服务器上拉取并运行
  docker pull registry.example.com/amor-fast-buy:1.0.0
  docker run -d \
    --name amor-fast-buy \
    -p 80:80 \
    --restart unless-stopped \
    --memory="512m" \
    --cpus="1.0" \
    registry.example.com/amor-fast-buy:1.0.0

📝 常用组合命令
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  # 停止并删除容器，然后重新构建和运行
  docker stop amor-fast-buy && docker rm amor-fast-buy && \
  docker build -t amor-fast-buy:latest . && \
  docker run -d --name amor-fast-buy -p 8080:80 amor-fast-buy:latest

  # 查看最近的日志（最后 100 行）
  docker logs --tail 100 amor-fast-buy

  # 查看实时日志（带时间戳）
  docker logs -f --timestamps amor-fast-buy

  # 清理所有停止的容器和未使用的镜像
  docker container prune -f && docker image prune -a -f

🔍 健康检查
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  # 查看容器健康状态
  docker inspect --format='{{.State.Health.Status}}' amor-fast-buy

  # 查看健康检查历史
  docker inspect --format='{{json .State.Health}}' amor-fast-buy | jq

🌍 网络管理
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  # 查看容器网络
  docker network ls

  # 查看容器 IP
  docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' amor-fast-buy

  # 创建自定义网络
  docker network create amor-network

  # 连接容器到网络
  docker network connect amor-network amor-fast-buy

📦 数据卷管理
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  # 查看所有卷
  docker volume ls

  # 创建数据卷
  docker volume create amor-data

  # 使用数据卷运行容器
  docker run -d --name amor-fast-buy -v amor-data:/app/data -p 8080:80 amor-fast-buy:latest

  # 查看卷详情
  docker volume inspect amor-data

🎯 快捷脚本命令
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ./deploy.sh          # 完整部署（构建 + 运行）
  ./deploy.sh build    # 仅构建镜像
  ./deploy.sh run      # 仅运行容器
  ./deploy.sh restart  # 重启容器
  ./deploy.sh stop     # 停止容器
  ./deploy.sh logs     # 查看日志
  ./deploy.sh clean    # 清理容器和镜像

🔗 访问地址
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  本地访问: http://localhost:8080/amor-fast-buy/
  健康检查: http://localhost:8080/

📚 更多信息
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  查看详细文档: cat DOCKER_DEPLOY.md
  查看安装指南: cat DOCKER_INSTALL.md
  查看项目说明: cat README.md

╔══════════════════════════════════════════════════════════════════╗
║  提示：大多数情况下，只需要运行 ./deploy.sh 即可！              ║
╚══════════════════════════════════════════════════════════════════╝

EOF

