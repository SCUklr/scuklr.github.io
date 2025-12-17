#!/bin/bash

# 配置PATH使用Homebrew的Ruby
export PATH="/opt/homebrew/opt/ruby/bin:/opt/homebrew/lib/ruby/gems/3.4.0/bin:$PATH"

echo "🚀 Jekyll 博客快速启动脚本"
echo "================================"

# 检查是否安装了 Jekyll
if ! command -v jekyll &> /dev/null; then
    echo "❌ Jekyll 未安装"
    echo "正在安装 Jekyll 和 Bundler..."
    gem install jekyll bundler
    if [ $? -ne 0 ]; then
        echo "⚠️  安装失败，请尝试使用 sudo："
        echo "sudo gem install jekyll bundler"
        exit 1
    fi
fi

echo "✅ Jekyll 已安装"

# 检查是否安装了项目依赖
if [ ! -f "Gemfile.lock" ]; then
    echo "📦 安装项目依赖..."
    bundle install
    if [ $? -ne 0 ]; then
        echo "❌ 依赖安装失败"
        exit 1
    fi
fi

echo "✅ 依赖已安装"
echo ""
echo "🌐 启动本地服务器..."
echo "访问地址: http://localhost:4000"
echo "按 Ctrl+C 停止服务器"
echo ""

# 启动 Jekyll 服务器
bundle exec jekyll serve --livereload
