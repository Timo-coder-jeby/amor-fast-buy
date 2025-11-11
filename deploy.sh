#!/bin/bash

# Docker 部署脚本
# 用法: ./deploy.sh [选项]
# 选项:
#   build   - 仅构建镜像
#   run     - 仅运行容器
#   restart - 重启容器
#   stop    - 停止容器
#   logs    - 查看日志
#   clean   - 清理容器和镜像

set -e

# 配置变量
IMAGE_NAME="amor-fast-buy"
CONTAINER_NAME="amor-fast-buy"
PORT="8080"
TAG="latest"

# 颜色输出
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# 打印信息
info() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

warn() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# 构建镜像
build() {
    info "开始构建 Docker 镜像..."
    docker build -t ${IMAGE_NAME}:${TAG} .
    info "镜像构建完成: ${IMAGE_NAME}:${TAG}"
}

# 停止并删除旧容器
stop_container() {
    if [ "$(docker ps -aq -f name=${CONTAINER_NAME})" ]; then
        warn "停止并删除旧容器..."
        docker stop ${CONTAINER_NAME} || true
        docker rm ${CONTAINER_NAME} || true
        info "旧容器已删除"
    fi
}

# 运行容器
run() {
    stop_container
    info "启动新容器..."
    docker run -d \
        --name ${CONTAINER_NAME} \
        -p ${PORT}:80 \
        --restart unless-stopped \
        ${IMAGE_NAME}:${TAG}
    info "容器已启动"
    info "访问地址: http://localhost:${PORT}"
}

# 查看日志
logs() {
    info "查看容器日志 (Ctrl+C 退出)..."
    docker logs -f ${CONTAINER_NAME}
}

# 重启容器
restart() {
    info "重启容器..."
    docker restart ${CONTAINER_NAME}
    info "容器已重启"
}

# 清理
clean() {
    warn "清理容器和镜像..."
    stop_container
    docker rmi ${IMAGE_NAME}:${TAG} || true
    info "清理完成"
}

# 完整部署
deploy() {
    build
    run
    info "部署完成!"
    info "运行 './deploy.sh logs' 查看日志"
}

# 主函数
main() {
    case "${1:-deploy}" in
        build)
            build
            ;;
        run)
            run
            ;;
        restart)
            restart
            ;;
        stop)
            stop_container
            ;;
        logs)
            logs
            ;;
        clean)
            clean
            ;;
        deploy)
            deploy
            ;;
        *)
            error "未知命令: $1"
            echo "用法: $0 {build|run|restart|stop|logs|clean|deploy}"
            exit 1
            ;;
    esac
}

main "$@"

