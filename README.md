# 数据安全保护系统前端

## 项目简介

数据安全保护系统前端是一个基于 Vue 3 + Vite 开发的现代化 Web 应用，旨在提供数据安全保护相关的功能，包括文件上传、安全检查、数据浏览等核心功能。

## 技术栈

- **前端框架**: Vue 3
- **构建工具**: Vite
- **UI 组件库**: Element Plus
- **路由管理**: Vue Router
- **样式预处理**: SCSS

## 项目结构

```
src/
├── assets/           # 静态资源
├── components/       # 通用组件
├── router/           # 路由配置
├── views/            # 页面视图
│   ├── home.vue      # 首页
│   ├── upload.vue    # 上传页面
│   ├── check.vue     # 检查页面
│   ├── browse.vue    # 浏览页面
│   └── mine.vue      # 个人中心
├── App.vue           # 根组件
├── main.js           # 入口文件
└── style.css         # 全局样式
```

## 功能模块

1. **首页** - 系统概览和功能入口
2. **上传模块** - 支持文件上传和数据导入
3. **检查模块** - 对上传数据进行安全检查
4. **浏览模块** - 查看已上传和检查的数据
5. **个人中心** - 用户信息和系统设置

## 快速开始

### 环境要求

- Node.js 14.0+  
- npm 6.0+ 或 yarn

### 安装依赖

```bash
# 使用 npm
npm install

# 或使用 yarn
yarn install
```

### 开发模式

```bash
# 使用 npm
npm run dev

# 或使用 yarn
yarn dev
```

项目将在 http://localhost:5173 启动。

### 构建生产版本

```bash
# 使用 npm
npm run build

# 或使用 yarn
yarn build
```

构建产物将生成在 `dist` 目录。

### 预览生产构建

```bash
# 使用 npm
npm run preview

# 或使用 yarn
yarn preview
```

## 开发指南

### 代码规范

- 使用 Vue 3 的 Composition API 和 `<script setup>` 语法
- 组件命名采用 PascalCase 格式
- 变量和函数命名采用 camelCase 格式
- 样式文件使用 SCSS 预处理器

### 路由配置

路由配置位于 `src/router/index.js`，可根据需要添加或修改路由。

### 组件开发

通用组件应放置在 `src/components/` 目录下，按功能模块组织。

## 构建和部署

1. 运行 `npm run build` 生成生产构建
2. 将 `dist` 目录下的文件部署到服务器
3. 配置服务器以支持 SPA 应用（需要配置 fallback 路由）

## 贡献指南

1. Fork 本项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

